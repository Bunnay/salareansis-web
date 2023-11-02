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
            <li class="h-64 w-32">
              <img
                class="w-full rounded-2xl object-contain"
                alt="id card"
                src="@/assets/images/student-front.png"
              />
              <p class="mt-2 text-sm leading-8 text-center text-gray-600">
                Student front
              </p>
            </li>
            <li class="h-64 w-32">
              <img
                class="w-full rounded-2xl object-contain"
                alt="id card"
                src="@/assets/images/staff-front.png"
              />
              <p class="mt-2 text-sm leading-8 text-center text-gray-600">
                Staff front
              </p>
            </li>
            <li class="h-64 w-32">
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
