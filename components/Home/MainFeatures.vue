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
      Our solution helps you keep up-to-date with the progress of your students
      and staff, manage the institute efficiently, and provide a better
      education with an easy-to-use interface.
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
          <h2 class="mt-6 text-lg font-semibold text-gray-900">
            {{ feature.title }}
          </h2>

          <dd class="mt-5 text-sm leading-7 text-gray-600">
            {{ feature.description }}
          </dd>
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
      "You can easily record attendance to the system with multiple options.",
    icon: UsersIcon,
  },
  {
    title: "Employee Management",
    description:
      "You can manage your employees based on their roles and permissions, and maintain all information in one place for easy access.",
    icon: UserIcon,
  },
  {
    title: "Campus Management",
    description:
      "Easy to use for managing, booking, and transacting with different campus institutions and facilities.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Student Management",
    description:
      "Keep all student information in one place for easy access where and when needed to make informed decisions.",
    icon: AcademicCapIcon,
  },
  {
    title: "Time Table Management",
    description:
      "Easily schedule & manage multiple subjects, and notify students & teachers when schedules changed.",
    icon: CalendarIcon,
  },
  {
    title: "Course Management",
    description:
      "Efficiently manage courses or subjects for your educational institute with just a few click.",
    icon: BookmarkSquareIcon,
  },
  {
    title: "Parent Portal",
    description:
      "Keep parents and school in touch and provide all the information parents need to track their children's progress.",
    icon: UsersIcon,
  },
  {
    title: "Report Card",
    description:
      "You can easily and rapidly analyze and generate report cards based on student data using your institute's template.",
    icon: ClipboardIcon,
  },
  {
    title: "ID Cards Integrations",
    description:
      "Provide ID cards for all students & staff, so you can use to record attendance or for other purposes.",
    icon: IdentificationIcon,
  },
  {
    title: "Gradebook / Assessment",
    description:
      "You can manage your student's grades and track their online progress all from a centralized location in the system.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "System Management",
    description:
      "One system can handle all of your education institutes needs, ensuring your institutes run smoothly and efficiently.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Admin Dashboard",
    description:
      "You can easily view and modify your dashboard and reports to fit your specific business needs, and make decisions based on the data.",
    icon: Squares2X2Icon,
  },
  // {
  //   title: "Finance status for Students",
  //   description: "Paradigm Representative",
  //   icon: BuildingLibraryIcon,
  // },
  {
    title: "Event Management",
    description:
      "You can easily announce events and track attendees who registered to the events. Students & parents can view all events that have been published.",
    icon: CalendarDaysIcon,
  },
  {
    title: "Mobile Application",
    description:
      "Provide students & parents with an efficient and convenient way to access information about their classes, homeworks, grades, and events.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Email, App Notification",
    description:
      "Provide an easy approach to alert the announcement and information about their schedules, exam dates, homework deadlines, and events through email and notification.",
    icon: BellAlertIcon,
  },
];
</script>
