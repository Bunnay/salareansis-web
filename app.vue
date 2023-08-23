<template>
  <Html>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </Html>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | SALAREAN SIS` : "SALAREAN SIS";
  },
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
