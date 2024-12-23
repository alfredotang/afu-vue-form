<template>
  <h1 class="mb-8 text-3xl">
    vee validation
  </h1>
  <nav class="mb-8 flex items-center gap-4">
    <RouterLink
      v-for="item in children"
      :key="item.path"
      class="text-blue-500 hover:text-blue-400 hover:underline"
      :class="{ 'font-bold': isActiveChecker(item.path) }"
      :to="`/${baseRoute}/${item.path}`"
    >
      {{ item.path }}
    </RouterLink>
  </nav>
  <router-view />
</template>

<script lang="ts" setup>
import useRouteChecker from '@/composables/use-route-checker'
import {
  ROUTES,
} from '@/router'
import { computed } from 'vue'

const { isActiveChecker } = useRouteChecker()

const baseRoute = 'vee-validate'

const children = computed(() => ROUTES[0].children.find(item => item.path === baseRoute)?.children || [])
</script>
