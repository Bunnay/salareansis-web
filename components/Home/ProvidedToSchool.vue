<template>
  <div class="relative isolate -z-10 my-32">
    <div>
      <div
        class="flex flex-col gap-16 bg-blue-800 px-6 py-16 ring-1 ring-white/10 sm:p-8 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"
      >
        <div class="w-full flex-auto">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We offers based on your preferences. No worry!
          </h2>
          <p class="mt-3 mb-16 text-md leading-8 text-gray-300">
            Provides all of these materials to your school without extra payment
            every year.
          </p>
          <ul
            role="list"
            class="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 text-white sm:grid-cols-2"
          >
            <li
              v-for="benefit in benefits"
              :key="benefit.title"
              class="flex gap-x-3"
            >
              <div>
                <span
                  :class="[
                    benefit.iconBackground,
                    benefit.iconForeground,
                    'inline-flex rounded-full p-3',
                  ]"
                >
                  <component
                    :is="benefit.icon"
                    class="h-8 w-8"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div>
                <h3
                  class="text-xl font-semibold leading-6 text-gray-900 text-white"
                >
                  {{ benefit.title }}
                </h3>
                <p class="mt-2 text-sm text-gray-300 leading-loose">
                  {{ benefit.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <img
          class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
          src="@/assets/images/2286953.png"
          alt=""
        />
      </div>
    </div>
    <div
      class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
      />
    </div>

    <div>
      <div
        class="relative isolate overflow-hidden bg-blue-900 px-6 py-24 text-center shadow-2xl sm:px-16"
      >
        <h2
          class="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white"
        >
          Provides 1 year <span class="text-teal-500">FREE</span> with full
          features.
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          When you choose to utilize our system, we are pleased to offer you
          complimentary access to all the features within our platform for a
          duration of one year, providing you with a comprehensive and
          cost-effective solution.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  IdentificationIcon,
  RectangleGroupIcon,
  CogIcon,
  StarIcon,
} from "@heroicons/vue/24/outline";

const benefits = [
  {
    title: "ID Cards",
    description:
      "We provide the ID cards to all students and staff in your school for free.",
    icon: IdentificationIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Clubs and Competition from Bright",
    description:
      "We provide all clubs and competition information from our company into the system. The information will announce to all students and their parents.",
    icon: RectangleGroupIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Access Control Devices",
    description:
      "We provide the attendance recorder to record students and staff attendance.",
    icon: CogIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "University & Career Guidance",
    description:
      "We provide the university and career guidance to all grade 9 to 12.",
    icon: StarIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
];
</script>
