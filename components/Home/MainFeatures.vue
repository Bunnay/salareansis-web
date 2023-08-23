<template>
  <div class="mx-5 my-16 lg:mx-32 xl:mx-32">
    <h2
      class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-center"
    >
      Powerful features fitting your needs
    </h2>
    <p
      class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 text-center"
    >
      Enhance your school's effectiveness and communication using a collection
      of integrated instruments crafted to improve diverse facets of educational
      administration.
    </p>

    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-24"
    >
      <li
        v-for="feature in features"
        :key="feature.email"
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl bg-white text-center border border-1 shadow-sm"
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
  EnvelopeIcon,
  UsersIcon,
  UserIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  CalendarIcon,
  BookmarkSquareIcon,
  ClipboardIcon,
  IdentificationIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  Square2StackIcon,
  Squares2X2Icon,
  DevicePhoneMobileIcon,
  BellAlertIcon,
  CalendarDaysIcon,
  BuildingLibraryIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    title: "Attendance",
    description:
      "Efficiently monitor and manage student presence with our attendance tracking system.",
    icon: UsersIcon,
  },
  {
    title: "Employee Management",
    description: "Paradigm Representative",
    icon: UserIcon,
  },
  {
    title: "Campus Management",
    description: "Paradigm Representative",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Student Management",
    description: "Paradigm Representative",
    icon: AcademicCapIcon,
  },
  {
    title: "Time Table Management",
    description: "Paradigm Representative",
    icon: CalendarIcon,
  },
  {
    title: "Course Management",
    description: "Paradigm Representative",
    icon: BookmarkSquareIcon,
  },
  {
    title: "Parent Portal",
    description: "Paradigm Representative",
    icon: UsersIcon,
  },
  {
    title: "Report Card",
    description: "Paradigm Representative",
    icon: ClipboardIcon,
  },
  {
    title: "ID Cards Integrations",
    description: "Paradigm Representative",
    icon: IdentificationIcon,
  },
  {
    title: "Gradebook / Assessment",
    description: "Paradigm Representative",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "System Management",
    description: "Paradigm Representative",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Admin Dashboard",
    description: "Paradigm Representative",
    icon: Squares2X2Icon,
  },
  {
    title: "Finance status for Students",
    description: "Paradigm Representative",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Event Management",
    description: "Paradigm Representative",
    icon: CalendarDaysIcon,
  },
  {
    title: "Mobile App",
    description: "Paradigm Representative",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Email, App Notification",
    description: "Paradigm Representative",
    icon: BellAlertIcon,
  },
];
</script>
