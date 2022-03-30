<template>
  <div class="px-4 py-16 mx-auto text-center">
    <div class="absolute left-0 w-full p-2 opacity-75 bg-gradient-to-b from-red-500 via-green-500 to-pink-600">
      <h1 class="text-xl font-semibold tracking-wide text-opacity-50 uppercase">404 error</h1>
      <h1 class="text-4xl font-extrabold">These are not the Droids you were looking for.</h1>
      <p class="text-lg font-medium">The link to this the page didn't resolve.</p>
      <router-link
        class="inline-flex items-center px-3 py-2 m-3 font-bold text-blue-100 bg-blue-600 border rounded-md opacity-100 text-l hover:bg-orange-600 hover:text-blue-800 hover:border-red-700"
        to="/"
      >
        Home
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
