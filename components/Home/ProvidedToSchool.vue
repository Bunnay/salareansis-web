<template>
  <div class="mx-5 my-16 lg:mx-32 xl:mx-32">
    <h2
      class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-center"
    >
      What we provide
    </h2>
    <p
      class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 text-center"
    >
      Discover what we offer for your school.
    </p>

    <!-- ID Card -->
    <div class="bg-gray-300 mt-12 rounded-xl shadow">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
      >
        <div class="w-full max-w-2xl xl:w-96 xl:flex-none">
          <div class="relative aspect-[2/1] h-full xl:mx-0 xl:aspect-auto">
            <img
              class="absolute inset-0 h-full w-full rounded-2xl object-contain"
              src="@/assets/images/id-card.png"
              alt=""
            />
          </div>
        </div>
        <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 py-5">
          <figure class="relative isolate">
            <p
              class="mt-5 max-w-xl text-2xl font-bold leading-10 border-b border-gray-400"
            >
              Identity Card
            </p>
            <blockquote class="text-md mt-3 text-gray-600">
              <p>
                At no additional cost, we provide free identity cards to both
                your students and staff members, contributing to a safer and
                more organized school environment.
              </p>
            </blockquote>
          </figure>

          <ul class="flex mt-8 gap-4">
            <li class="h-64 w-32 w-full">
              <img
                class="w-full rounded-2xl object-contain"
                alt="id card"
                src="@/assets/images/student-front.png"
              />
              <p class="mt-2 text-sm leading-8 text-center text-gray-600">
                Student front
              </p>
            </li>
            <li class="h-64 w-32 w-full">
              <img
                class="w-full rounded-2xl object-contain"
                alt="id card"
                src="@/assets/images/staff-front.png"
              />
              <p class="mt-2 text-sm leading-8 text-center text-gray-600">
                Staff front
              </p>
            </li>
            <li class="h-64 w-32 w-full">
              <img
                class="w-full rounded-2xl object-contain"
                alt="id card"
                src="@/assets/images/staff-back.png"
              />
              <p class="mt-2 text-sm leading-8 text-center text-gray-600">
                Staff back
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Access Control -->
    <div class="bg-gray-300 mt-12 lg:py-12 rounded-xl shadow">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
      >
        <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 py-5">
          <figure class="relative isolate">
            <p
              class="mt-5 max-w-xl text-2xl font-bold leading-10 border-b border-gray-400"
            >
              Access Control Devices.
            </p>
            <blockquote class="text-md mt-3 text-gray-600">
              <p>
                We offer free Access Control Devices to help you record
                attendance in your school efficiently and accurately, enhancing
                attendance tracking without any additional costs.
              </p>
            </blockquote>
          </figure>
          <img
            class="w-full rounded-2xl object-contain my-12"
            alt="scanning methods"
            src="@/assets/images/scanning-methods.svg"
          />
        </div>

        <div class="w-full max-w-2xl xl:w-96 xl:flex-none">
          <div class="relative aspect-[2/1] h-full xl:mx-0 xl:aspect-auto">
            <img
              class="absolute inset-0 h-full w-full rounded-2xl object-contain"
              src="@/assets/images/access-control.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- One year free -->
    <div class="bg-gray-300 mt-12 py-12 rounded-xl shadow">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
      >
        <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 py-5">
          <figure class="relative isolate">
            <p
              class="mt-5 text-4xl pb-5 font-bold leading-10 border-b border-gray-400"
            >
              Provides 1 year <span class="text-blue-800">FREE</span> with full
              features.
            </p>
            <blockquote class="text-md mt-3 text-gray-600">
              <p>
                Get all the features of our system for free for the first year,
                saving you money and giving you a complete solution.
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>

    <!-- <div>
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
          class="h-96 w-full flex-none rounded-2xl object-contain lg:aspect-square lg:h-auto lg:max-w-sm"
          src="@/assets/images/announcement.png"
          alt=""
        />
      </div>
    </div> -->

    <!-- <div>
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
    </div> -->
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
