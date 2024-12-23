<template>
  <header class="flex items-center px-8 py-6">
    <RouterLink to="/">
      <h1 class="text-2xl">
        Afu Vue Form
      </h1>
    </RouterLink>
    <nav class="flex items-center justify-between gap-4">
      <RouterLink
        v-for="category in ROUTER_CATEGORIES"
        :key="category.name"
        class="text-green-500 hover:text-green-400 hover:underline"
        :class="{ 'font-bold': isActiveChecker(category.path) }"
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
import useRouteChecker from '@/composables/use-route-checker'
import { ROUTER_CATEGORIES } from './router'

const { isActiveChecker } = useRouteChecker()
</script>
