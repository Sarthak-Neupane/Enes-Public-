
<script setup lang="ts">
defineProps({
  title: String,
  content: String,
  backgroundColor: String,
})
</script>

<template>
  <div class="w-full h-full flex text-light items-center justify-center font-['Inter']" :class="[backgroundColor]">
    <h1 class="text-7xl font-bold">
      {{ title }} 👋
    </h1>
    <p class="text-2xl font-semibold"> {{ content }} </p>

  </div>
</template>
