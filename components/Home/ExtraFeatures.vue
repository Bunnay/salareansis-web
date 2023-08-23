<template>
  <div class="mx-5 my-16 lg:mx-32 xl:mx-32">
    <h2
      class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-center"
    >
      Our extra features
    </h2>
    <p
      class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 text-center"
    >
      Unlock additional capabilities that further enrich your school management
      experience, providing advanced functionalities beyond the essentials.
    </p>

    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-24"
    >
      <li
        v-for="feature in features"
        :key="feature.email"
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center border border-1 shadow-sm"
      >
        <div class="flex flex-1 flex-col p-8">
          <div class="flex justify-center">
            <component
              :is="feature.icon"
              class="h-12 w-12 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <h2 class="mt-6 text-lg font-sm text-gray-900">
            {{ feature.title }}
          </h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  BanknotesIcon,
  BoltIcon,
  BuildingOffice2Icon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  PencilSquareIcon,
  PresentationChartLineIcon,
  RectangleGroupIcon,
  UserIcon,
  StarIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    title: "HR Management",
    description: "Paradigm Representative",
    icon: UserIcon,
  },
  {
    title: "Lecture Notes",
    description: "Paradigm Representative",
    icon: PencilSquareIcon,
  },
  {
    title: "Transcript & Academic record",
    description: "Paradigm Representative",
    icon: ClipboardDocumentListIcon,
  },
  {
    title: "Learning Reminder",
    description: "Paradigm Representative",
    icon: ClockIcon,
  },
  {
    title: "Alumni Management",
    description: "Paradigm Representative",
    icon: AcademicCapIcon,
  },
  {
    title: "Procurement Management",
    description: "Paradigm Representative",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Asset Management",
    description: "Paradigm Representative",
    icon: ChartPieIcon,
  },
  {
    title: "Clubs & Competition",
    description: "Paradigm Representative",
    icon: RectangleGroupIcon,
  },
  {
    title: "Inventory & Supplies Management",
    description: "Paradigm Representative",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Career & university guidance",
    description: "Paradigm Representative",
    icon: StarIcon,
  },
  {
    title: "Fee Management",
    description: "Paradigm Representative",
    icon: BanknotesIcon,
  },
  {
    title: "Facilities Management",
    description: "Paradigm Representative",
    icon: BoltIcon,
  },
];
</script>
