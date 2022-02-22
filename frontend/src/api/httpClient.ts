import axios, { AxiosInstance } from "axios";

export type HttpClient = AxiosInstance;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_BASE_URL + '/' + import.meta.env.VITE_APP_API_VERSION_URL,
  withCredentials: true,
  headers: {"Content-Type": "application/json"}
});

export const httpClient: HttpClient = axiosInstance;
