<template>
  <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">User Registration</h2>
      <p class="mt-2 text-sm text-center text-gray-600">
        Or
        <router-link to="/login"><a class="font-medium text-cyberred hover:text-red-500">login</a></router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="register">
          <div v-if="error" class="text-red-500">{{ error }}</div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email Addresse</label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Passwort</label>
            <div class="mt-1">
              <input
                id="password_confirmation"
                v-model="password_confirmation"
                name="password_confirmation"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Passwort wiederholen</label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyberred hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Registrieren
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"

export default defineComponent({
  name: "RegisterUser",
  components: {},
  setup() {
    const email = ref(null)
    const password = ref(null)
    const password_confirmation = ref(null)

    const error = computed(() => {
      return email.value === "" ? "Email is required" : ""
      // TODO: add password-match and is password-is_required validation
    })

    const register = () => {
      console.log("register", email.value, password.value, password_confirmation.value)
      //   this.$store.dispatch("register", {
      //     email: this.email,
      //     password: this.password,
      //     password_confirmation: this.password_confirmation
      //   })
    }

    return { register, email, password, password_confirmation, error }
  }
})
</script>

<style scoped></style>
