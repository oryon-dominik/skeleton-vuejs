<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-white dark:bg-gray-800">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Mobile menu button-->
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <!-- 'MainMenu + Darkmode + Logo' Block -->
        <div class="flex flex-1 gap-x-10 sm:items-stretch sm:justify-start md:justify-center md:items-center">
          <!-- LOGO -->
          <div class="flex items-center flex-shrink-0">
            <img
              class="block object-contain w-auto h-16 ml-9 animate-pulse animate slow md:hidden"
              src="../../assets/cyberise_logo_centered_small_resized_for_web.png"
              alt="logo"
            />
            <img
              class="hidden object-contain w-auto h-16 bg-red-300 animate-pulse animate slow md:block"
              src="../../assets/cyberise_logo_centered_small_resized_for_web.png"
              alt="logo"
            />
          </div>

          <!-- Main menu -->
          <div class="hidden md:block md:ml-6">
            <div class="flex items-center space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                class=""
                :to="item.to"
                :class="[
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium'
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>

          <DarkModeSwitch />
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- <button type="button" class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <BellIcon class="w-6 h-6" aria-hidden="true" />
          </button> -->

          <!-- Profile dropdown -->
          <!-- <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
              <MenuItems class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <router-link class :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" to="/">Home</router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->
        </div>
      </div>
    </div>

    <DisclosurePanel class="z-10 md:hidden">
      <div class="flex flex-col items-start justify-center px-2 pt-2 pb-3 space-y-1 gap-y-1">
        <DisclosureButton v-for="item in navigation" :key="item.name">
          <router-link
            :key="item.name"
            class=""
            :to="item.to"
            :class="[
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </router-link>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline"

import DarkModeSwitch from "../examples/DarkModeSwitch.vue"

const navigation = [
  { to: "/", name: "Home", current: true },
  { to: "/about", name: "About", current: false },
  { to: "/todos", name: "Todos", current: false },
  { to: "/tutorial", name: "Tutorial", current: false },
  { to: "/login", name: "Login", current: false }
]

export default defineComponent({
  name: "NavBar",
  components: {
    DarkModeSwitch,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon
  },
  setup() {
    return {
      navigation
    }
  }
})
</script>
<style lang="scss" scoped></style>
