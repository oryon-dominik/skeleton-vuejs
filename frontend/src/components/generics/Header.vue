<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="p-1 my-1 duration-300 bg-white rounded-lg shadow-2xl dark:bg-gray-900 shadow-black transition-color"
  >
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Mobile menu button-->
        <div class="flex items-center lg:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <!-- Main menu + LOGO + Darkmode-switch -->
        <div class="flex items-center justify-between flex-1">
          <div class="flex items-center flex-shrink-0 duration-300 transition-color">
            <LogoComponent />
          </div>

          <div class="self-center hidden lg:block lg:ml-6">
            <div class="flex space-x-4">
              <NavigationComponent />
            </div>
          </div>

          <div class="self-center mr-2">
            <DarkModeSwitch />
          </div>
        </div>

        <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 bg-green-600 lg:static lg:inset-auto lg:ml-6 lg:pr-0"> -->
          <!-- <button type="button" class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <BellIcon class="w-6 h-6" aria-hidden="true" />
          </button>-->

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
          </Menu>-->
        <!-- </div> -->
      </div>
    </div>

    <!-- Mobile menu -->
    <DisclosurePanel class="flex items-center justify-center lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton>
          <div class="flex flex-col items-center justify-center space-y-2">
            <NavigationComponent />
          </div>
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
import NavigationComponent from "./Navigation.vue"
import LogoComponent from "./Logo.vue"

export default defineComponent({
  name: "HeaderComponent",
  components: {
    DarkModeSwitch,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    NavigationComponent,
    LogoComponent,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon
  }
})
</script>
<style lang="scss" scoped></style>
