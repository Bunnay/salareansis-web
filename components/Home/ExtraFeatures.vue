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
    description:
      "Efficiently oversee staff operations, payroll, and performance designed specifically for schools.",
    icon: UserIcon,
  },
  {
    title: "Lecture Notes",
    description:
      "Access and organize lecture notes effortlessly, ensuring easy retrieval and enhanced learning experiences for students.",
    icon: PencilSquareIcon,
  },
  {
    title: "Transcript & Academic Record",
    description:
      "Maintain academic records, including transcripts to support student progress tracking and administrative efficiency.",
    icon: ClipboardDocumentListIcon,
  },
  {
    title: "Learning Reminder",
    description:
      "Enhance student engagement and retention with our learning reminder feature, designed to keep students informed and on track with their class work.",
    icon: ClockIcon,
  },
  {
    title: "Alumni Management",
    description:
      "Efficiently manage your school's alumni network and strengthen your institution's relationships with former students.",
    icon: AcademicCapIcon,
  },
  {
    title: "Procurement Management",
    description:
      "Streamline the procurement process, ensuring efficient purchasing, budget management, and vendor relations.",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Asset Management",
    description:
      "Effectively track and manage school assets, from equipment to resources, ensuring optimal utilization and maintenance.",
    icon: ChartPieIcon,
  },
  {
    title: "Clubs & Competition",
    description:
      "Provide Clubs and Competition information to the system from Bright Consultant Education and Travel.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Inventory & Supplies Management",
    description:
      "Optimize inventory and supplies management to ensure timely availability of resources and efficient budget utilization.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Career & University Guidance",
    description:
      "Empower students with comprehensive career and university guidance, enabling informed decisions and successful transitions to higher education and beyond.",
    icon: StarIcon,
  },
  {
    title: "Fee Management",
    description:
      "Efficiently handle and track student fees, payments, and financial transactions with our user-friendly fee management system designed to simplify school financial operations.",
    icon: BanknotesIcon,
  },
  {
    title: "Facilities Management",
    description:
      "Streamline the management of school facilities, including classrooms, libraries, and sports areas, for optimal resource utilization and a conducive learning environment.",
    icon: BoltIcon,
  },
];
</script>
