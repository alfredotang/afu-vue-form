<template>
  <Dialog
    :visible="true"
    header="Form Result"
    :style="{ width: '25rem' }"
    @update:visible="onClose"
  >
    <pre>{{ data }}</pre>
  </Dialog>
</template>

<script lang="ts" setup>
import Dialog from 'primevue/dialog'

const { data } = defineProps<{
  data: any
}>()

const emit = defineEmits<{ (e: 'close'): void }>()

const onClose = (value: boolean) => {
  if (value) return
  emit('close')
}
</script>
