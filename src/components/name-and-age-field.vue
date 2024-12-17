<template>
  <div :class="cn('grid grid-cols-2 gap-4', className)">
    <div class="grid gap-1">
      <label :for="nameId">
        Name
      </label>
      <InputText
        :id="nameId"
        v-model="modal.name"
        :invalid="Boolean(errors?.name)"
      />
      <Message
        v-show="Boolean(errors?.name)"
        severity="error"
        variant="simple"
        size="small"
      >
        {{ errors?.name }}
      </Message>
    </div>
    <div class="grid gap-1">
      <label :for="ageId">
        Age
      </label>
      <InputNumber
        :id="ageId"
        v-model="modal.age"
        :invalid="Boolean(errors?.age)"
      />
      <Message
        v-show="Boolean(errors?.name)"
        severity="error"
        variant="simple"
        size="small"
      >
        {{ errors?.name }}
      </Message>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useId from '@/composables/use-id'
import { cn } from '@/libs/class-name'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import { computed, type HTMLAttributes } from 'vue'

const { class: className, errors } = defineProps<{
  class?: HTMLAttributes['class']
  errors?: {
    name?: string
    age?: string
  }
}>()

const modal = defineModel<{
  name?: string
  age?: number
}>({
  default: {
    name: undefined,
    age: undefined,
  },
})

const fieldId = useId()

const nameId = computed(() => `${fieldId.value}-name`)
const ageId = computed(() => `${fieldId.value}-age`)
</script>
