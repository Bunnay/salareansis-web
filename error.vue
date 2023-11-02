<template>
  <div class="flex justify-center h-screen w-full items-center">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"
        >
          Error: {{ error.statusCode }}
        </h1>

        <p class="mb-4 text-lg font-light text-white dark:text-white">
          {{ error.message }}
        </p>
        <button @click="handleError" class="button">Back to homepage</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError();

if (+error.value.statusCode === 404) {
  error.value.message = "Oops! The page you are looking for does not exist.";
} else if (+error.value.statusCode === 403) {
  error.value.message = "Oops! You are not authorized to visit this page.";
} else {
  error.value.message = "Whoops, Something went wrong";
}

// clear error and redirect to home page
const handleError = () => clearError({ redirect: "/" });
</script>
