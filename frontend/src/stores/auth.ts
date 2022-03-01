import { defineStore, storeToRefs } from 'pinia'
import { useRouter } from "vue-router";
import { cookieStorage } from './cookies';
import { httpClient } from '../api/httpClient';
import { Endpoint } from "../api/endpoints";

import Cookies from 'js-cookie'


export type Credentials = {
  username: string;
  password: string;
}

export type UserState = {
  isAuthenticated: boolean,
  accessToken: string,
  refreshToken: string,
  user: User,
}

export type User = {
  id: string,
  name: string,
  email: string,
  url: string,
}


export const useAuth = defineStore({
  id: "users",

  state: () => ({
    isAuthenticated: false,
    accessToken: '',
    refreshToken: '',
    user: <User>{},
  }),

  getters: {
    getUserObject(state: UserState): User {
      return state.user;
    },
    isAuthenticated(state: UserState): boolean {
      return state.isAuthenticated;
    },
  },

  actions: {
    async login(credentials: Credentials) { 
      const { accessToken, refreshToken, user } = await loginOnBackend(credentials.username, credentials.password)
      this.isAuthenticated = true;
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      this.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        url: user.url,
      };
    },

    logout(): void {
      this.isAuthenticated = false;
      this.accessToken = '';
      this.refreshToken = '';
      this.user = <User>{};
      
      console.log("Cookies.get()", Cookies.get());
      // Cookies.remove('access_token');  TODO: check: is this automatically done by the browser? (because it's set empty here..?!)
      const router = useRouter();
      router.push({ name: "Home" });
    },
  },

  persist: { // pinia + plugin persist -> https://seb-l.github.io/pinia-plugin-persist/
    enabled: true,
    strategies: [
      { storage: cookieStorage, paths: ['accessToken'] },
      { storage: localStorage, paths: ['refreshToken'] },
    ],
  },

})


async function loginOnBackend(username: string, password: string) {
  return {
    accessToken: '',
    refreshToken: '',
    user: <User>{},
  }
}


// get an access token through username/password from the backend-API
async function getAccessToken(username: string, password: string) {
  return new Promise((resolve, reject) => {
    httpClient
        .post(Endpoint.token, {
          username: username,
          password: password
        })
        .then(response => {
          const accessToken = response.data.access;
          const refreshToken = response.data.refresh;
          // httpClientWithAuth.defaults.headers.common["Authorization"] = "Bearer " + newToken;  TODO: is this correct?!
          resolve(response);
        })
        .catch(error => {
          reject(error.response);
        });
  })
}

async function getNewAccessTokenFromRefreshToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    const authStore = useAuth();
    const refreshToken = storeToRefs(authStore).refreshToken;
    httpClient
      .post(Endpoint.refreshtoken, {
        refresh: refreshToken,
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error)
      })
  })
}


const httpClientWithAuth = { ...httpClient };

// Intercept invalid accessToken
httpClientWithAuth.interceptors.response.use(
  async function (response) {
    // Status codes within the range of 2xx
    return response;
  }, async function (error) {
    // Status codes outside the range of 2xx
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    // Logout user if token refresh didn't work or user is disabled
    console.log("error.config.url", error.config.url);
    if ( error.config.url == "/api/auth/token/refresh" || error.response.message == "Account is disabled." ) {
      const usersStore = useAuth();
      usersStore.logout();
      return Promise.reject(error);
    }

    // Try request again with new token
    return getNewAccessTokenFromRefreshToken()
      .then(() => {
        return new Promise((resolve, reject) => {
          httpClientWithAuth
            .request(error.config)
            .then(response => { resolve(response); })
            .catch(error => { reject(error); });
        });
      })
      .catch(error => { Promise.reject(error); });

});
