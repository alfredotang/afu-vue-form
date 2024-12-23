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
  <FormResultDialog
    v-if="panelStore.visible"
    :data="panelStore.data"
    @close="panelStore.hide"
  />
</template>

<script lang="ts" setup>
import useRouteChecker from '@/composables/use-route-checker'
import FormResultDialog from './components/form-result-dialog.vue'
import { ROUTER_CATEGORIES } from './router'
import { usePanelStore } from './stores/panel'

const { isActiveChecker } = useRouteChecker()

const panelStore = usePanelStore()
</script>
