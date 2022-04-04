<template>
  <div>
    <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-sm text-center text-gray-600">
          Or
          <router-link to="/register"><a class="font-medium text-cyberred hover:text-red-500"> register</a></router-link>
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
              <div class="mt-1">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-cyberred focus:ring-red-500">
                <label for="remember-me" class="block ml-2 text-sm text-gray-900"> Remember me </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-cyberred hover:text-red-500"> Forgot your password? </a>
              </div>
            </div>

            <div>
              <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyberred hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <p v-if="error != null" class>{{ error }}</p>
    <form @submit.prevent="authenticate()">
      <fieldset class>
        <legend>Login</legend>
        <div class>
          <input
            v-model="username"
            type="text"
            name="username"
            class
            placeholder="E-Mail-Adresse"
            data-testid="input-username"
            @mouseup="handleFormMouseEvent"
          />
        </div>
        <div class>
          <input
            v-model="password"
            type="password"
            name="password"
            class
            placeholder="Passwort"
            data-testid="input-password"
            @mouseup="handleFormMouseEvent"
          />
        </div>
        <div class>
          <input type="submit" value="Jetzt anmelden" class data-testid="input-submit" />
        </div>
      </fieldset>
    </form>
    <div class>
      <a @click.prevent="passwordForgetClicked">Passwort vergessen ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import { defineComponent, ref, computed, onErrorCaptured } from "vue"
//import { useStore } from "vuex" -->
// import { useRouter } from "vue-router"

export default defineComponent({})
//   name: "Authenticate",
//   props: {},

//   setup(props, context) {
//     const router = useRouter()
//     const username = ref(null)
//     const password = ref(null)
//     const isActive = ref(false)
//     const store = useStore()
//     const isLoggedIn = computed(() => store.state.user.isLoggedIn)
//     const error = ref(null)

//     // onErrorCaptured(() => {
//     //   console.log("ErrorCaptured!")
//     //   // err: Error, instance: Component, info: string => ?boolean
//     // })

//     const authenticate = async () => {
//       const authResponse = await store.dispatch("user/login", {
//         username: username.value,
//         password: password.value
//       })
//       if (authResponse && isLoggedIn) {
//         //localStorage.removeItem("vuex")
//         router.push({ name: "Dashboard" })
//       } else {
//         error.value = "Sorry, Username oder Passwort sind nicht bekannt"
//       }
//     }

//     function handleFormMouseEvent() {
//       context.emit("on-form-mouse-up")
//       isActive.value = true
//     }

//     function deactivate() {
//       isActive.value = false;
//       context.emit("authentication-deactivate")
//     }

//     function passwordForgetClicked() {
//       context.emit("password-forget-clicked")
//     }

//     return {
//       error,
//       isActive,
//       username,
//       password,
//       authenticate,
//       handleFormMouseEvent,
//       deactivate,
//       passwordForgetClicked
//     }
//   }
// })
</script>

<style lang="scss" scoped></style>
