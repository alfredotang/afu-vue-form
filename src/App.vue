<template>
  <header class="flex items-center justify-between">
    <RouterLink
      class="flex-1"
      to="/"
    >
      <h1 class="text-2xl">
        Afu Vue Form
      </h1>
    </RouterLink>
    <nav class="flex items-center justify-between">
      <RouterLink
        v-for="category in ROUTER_CATEGORIES"
        :key="category.name"
        class="text-green-400 hover:text-green-500 hover:underline"
        :to="category.path"
      >
        {{ category.name }}
      </RouterLink>
    </nav>
  </header>
  <main class="mx-auto max-w-screen-sm p-8">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { ROUTER_CATEGORIES } from './constants/router'
</script>
