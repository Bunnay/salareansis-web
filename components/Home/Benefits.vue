<template>
  <div class="mx-5 my-5 lg:mx-12 xl:mx-12">
    <h2
      class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-center"
    >
      Benefits
    </h2>
    <p
      class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 text-center"
    >
      Discover a multitude of advantages that our system brings to optimize
      administrative processes and elevate educational quality.
    </p>

    <div
      class="overflow-hidden rounded-lg bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-px my-32"
    >
      <div
        v-for="benefit in benefits"
        :key="benefit.title"
        :class="['group relative bg-white p-6 border-0']"
      >
        <div>
          <span
            :class="[
              benefit.iconBackground,
              benefit.iconForeground,
              'inline-flex rounded-lg p-3',
            ]"
          >
            <component
              :is="benefit.icon"
              class="h-10 w-10"
              aria-hidden="true"
            />
          </span>
        </div>
        <div class="mt-3">
          <h2 class="text-xl font-semibold leading-6 text-gray-900">
            {{ benefit.title }}
          </h2>
          <p class="mt-5 text-sm text-gray-500 leading-loose">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

const benefits = [
  {
    title: "Save Money",
    description:
      "Maximize cost efficiency by utilizing our system, which streamlines processes, minimizes paperwork, and reduces administrative overhead, leading to substantial financial savings for your school.",
    icon: CurrencyDollarIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Save Time",
    description:
      "Optimize time management with our system, automating tasks, centralizing data, and streamlining communication to free up valuable hours for educators and administrators, ultimately enhancing productivity and focus on core educational objectives.",
    icon: ClockIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Make Money",
    description:
      "Unlock revenue potential with our system, enabling improved resource allocation, strategic decision-making, and enhanced student engagement, which collectively contribute to a more attractive educational offering and potential revenue growth for your institution.",
    icon: BanknotesIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
];
</script>
