<template>
  <main>
    <!-- Hero section -->
    <div class="relative isolate">
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-200">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div
        class="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pb-40"
      >
        <div class="max-w-xl lg:mx-0 lg:flex-auto">
          <div>
            <img src="@/assets/images/sims-logo.png" width="100" height="50" />

            <div class="mt-24 sm:mt-32 lg:mt-16">
              <div class="inline-flex space-x-6">
                <span
                  class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10"
                  >SALAREAN</span
                >
                <button @click="scrollDownToFeatures">
                  <span
                    class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600"
                  >
                    <span>Our features</span>
                    <ChevronRightIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <p class="mt-10 max-w-xl text-4xl sm:text-5xl leading-10">
              School Information Management System for
            </p>
            <p class="mt-5 max-w-xl text-4xl font-bold sm:text-5xl leading-10">
              Educational Institutes
            </p>
          </div>
          <p class="mt-6 text-lg leading-8 text-gray-500">
            One System for All Your Educational Institute Needs. With SIMS,
            Ensuring Your Educational Institute Run Smoothly and Efficiently.
          </p>

          <div class="mt-5 flex items-center gap-x-6">
            <button
              @click="scrollDownToContactUs"
              class="inline-flex text-gray-500 justify-between rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-md border border-gray-200"
            >
              <PhoneIcon class="h-5 w-5 mr-2" aria-hidden="true" />
              Contact us
            </button>
          </div>
        </div>
        <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <img
            src="@/assets/images/main-banner-img.svg"
            class="animate-pulse"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ChevronRightIcon, PhoneIcon } from "@heroicons/vue/20/solid";

const scrollDownToFeatures = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: window.innerWidth > 1023 ? 700 : 1000,
    behavior: "smooth",
  });
};

const scrollDownToContactUs = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
</script>
