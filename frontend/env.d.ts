/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_VERSION_URL: "api/"
  readonly VITE_APP_STATIC_FILES_URL: string
  readonly VITE_APP_BACKEND_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
