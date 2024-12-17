<template>
  <div :class="cn('grid gap-2', className)">
    <div class="grid grid-cols-[3fr,2fr,1fr] gap-2">
      <div>
        <Select
          v-model="model.city"
          class="w-full"
          :options="cityOptions"
          :invalid="Boolean(errors?.city)"
          optionLabel="label"
          optionValue="value"
          placeholder="Select a city"
          @change="onCityChange"
        />
        <Message
          v-show="Boolean(errors?.city)"
          severity="error"
          variant="simple"
          size="small"
        >
          {{ errors?.city }}
        </Message>
      </div>
      <div>
        <Select
          :key="model.city"
          v-model="model.district"
          class="w-full"
          :options="districtOptions"
          :disabled="!model.city"
          :invalid="Boolean(errors?.district)"
          optionLabel="label"
          optionValue="value"
          @change="onDistrictChange"
        />
        <Message
          v-show="Boolean(errors?.district)"
          severity="error"
          variant="simple"
          size="small"
        >
          {{ errors?.district }}
        </Message>
      </div>
      <div>
        <InputText
          v-model="model.zipCode"
          class="w-full"
          :invalid="Boolean(errors?.zipCode)"
        />
        <Message
          v-show="Boolean(errors?.zipCode)"
          severity="error"
          variant="simple"
          size="small"
        >
          {{ errors?.zipCode }}
        </Message>
      </div>
    </div>
    <div>
      <InputText
        v-model="model.address"
        class="w-full"
        :invalid="Boolean(errors?.address)"
      />
      <Message
        v-show="Boolean(errors?.address)"
        severity="error"
        variant="simple"
        size="small"
      >
        {{ errors?.address }}
      </Message>
    </div>
  </div>
</template>

<script lang="ts">
interface AddressSelectorModel {
  city?: string
  district?: string
  zipCode?: string
  address?: string
}
</script>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { CITY } from '@/constants/city'
import { cn } from '@/libs/class-name'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Select from 'primevue/select'
import { computed } from 'vue'

const { class: className, errors } = defineProps<{
  class?: HTMLAttributes['class']
  errors?: {
    city?: string
    district?: string
    zipCode?: string
    address?: string
  }
}>()

const model = defineModel<AddressSelectorModel>({
  default: {
    city: undefined,
    district: undefined,
    zipCode: undefined,
    address: undefined,
  },
})

const cityOptions = computed(() => {
  return CITY.map(({ name }) => ({
    label: name,
    value: name,
  }))
})

const districtOptions = computed(() => {
  if (!model.value.city) return []
  const districtList = CITY.find(({ name }) => name === model.value.city)?.districts || []
  if (!districtList.length) return []
  return districtList.map(item => ({
    label: item,
    value: item,
  }))
})

const onCityChange = () => {
  model.value.district = undefined
  model.value.zipCode = undefined
  model.value.address = undefined
}

const onDistrictChange = () => {
  model.value.zipCode = undefined
  model.value.address = undefined
}
</script>
