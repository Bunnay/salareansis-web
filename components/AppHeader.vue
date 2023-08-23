<template>
  <Popover class="relative bg-white">
    <div
      class="pointer-events-none absolute inset-0 z-30 shadow"
      aria-hidden="true"
    />
    <div class="relative z-20">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:py-4 md:justify-start md:space-x-10 lg:px-8"
      >
        <div>
          <NuxtLink href="/" class="flex">
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/images/sims-logo.png"
              alt=""
            />
          </NuxtLink>
        </div>

        <!-- <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div> -->

        <!-- <div class="hidden md:flex md:flex-1 md:items-center justify-end">
          <NuxtLink
            href="/about-us"
            class="text-base font-medium text-gray-500 hover:text-gray-900 mr-8"
            >About us</NuxtLink
          >
          <NuxtLink
            href="/contact-us"
            class="text-base font-medium text-gray-500 hover:text-gray-900 mr-8"
            >Contact us</NuxtLink
          >
          <NuxtLink
            href="/gallery"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >Gallery</NuxtLink
          >
        </div> -->
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pb-6 pt-5 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="@/assets/images/sims-logo.png"
                  alt="Your Company"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <!-- <div class="px-5 py-6">
            <div class="grid grid-cols-2 gap-4">
              <NuxtLink
                href="/about-us"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700 mr-5"
                >About us</NuxtLink
              >
              <NuxtLink
                href="/contact-us"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700 mr-5"
                >Contact us</NuxtLink
              >
              <NuxtLink
                href="/gallery"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                >Gallery</NuxtLink
              >
            </div>
          </div> -->
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>
