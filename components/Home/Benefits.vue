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
      Explore the advantages we bring to your school.
    </p>

    <div class="rounded-lg sm:grid sm:grid-cols-3 gap-3 my-32">
      <div
        v-for="benefit in benefits"
        :key="benefit.title"
        class="bg-white border border-gray-200 p-6 mb-5 shadow rounded-xl"
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
      "Use our system to save money in your school. It makes things smoother, reduces paperwork, and cuts down on administrative costs, putting more money in your pocket.",
    icon: CurrencyDollarIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Save Time",
    description:
      "Save time with our system. It automates tasks, brings everything together, and makes communication easier, giving teachers and administrators more time to focus on teaching.",
    icon: ClockIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Make Money",
    description:
      "Increase your school's income with our system. It helps you use resources better, make smart decisions, and engage students, making your school more appealing and potentially bringing in more money.",
    icon: BanknotesIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
];
</script>
