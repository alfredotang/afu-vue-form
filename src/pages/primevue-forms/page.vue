<template>
  <h1 class="mb-8 text-3xl">
    primevue forms not working
  </h1>
  <Form
    class="space-y-6"
    :resolver="yupResolver(schema)"
    @submit="onSubmit"
  >
    <div>
      <FormField
        v-slot="$field"
        name="title"
      >
        <InputText
          :invalid="$field.invalid"
          class="block w-full"
        />
        <Message
          v-show="$field.invalid"
          severity="error"
          variant="simple"
          size="small"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>
    </div>
    <div>
      <FormField
        v-slot="$field"
        name="city"
      >
        <Select
          class="block w-full"
          :options="cityOptions"
          :invalid="$field.invalid"
          optionLabel="label"
          optionValue="value"
        />
        <Message
          v-show="$field.invalid"
          severity="error"
          variant="simple"
          size="small"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>
    </div>
    <Button
      label="Submit"
      type="submit"
    />
  </Form>
  <FormResultDialog
    v-if="dialogConfig.visible"
    :data="dialogConfig.data"
    @close="onCloseDialog"
  />
</template>

<script lang="ts" setup>
import FormResultDialog from '@/components/form-result-dialog.vue'
import Form, { type FormSubmitEvent } from '@primevue/forms/form'
import FormField from '@primevue/forms/formfield'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Select from 'primevue/select'
import { computed, ref } from 'vue'
import { CITY_LIST } from './constants'
import {
  type FormValues,
  schema,
} from './schema'

const dialogConfig = ref<{
  visible: boolean
  data: any
}>({
  visible: false,
  data: null,
})

const cityOptions = computed(() => {
  return CITY_LIST.map(item => ({
    label: item,
    value: item,
  }))
})

const onSubmit = ({ valid, values: _values }: FormSubmitEvent) => {
  const values = _values as FormValues
  if (!valid) return
  dialogConfig.value = {
    visible: true,
    data: values,
  }
}

const onCloseDialog = () => {
  dialogConfig.value = {
    visible: false,
    data: null,
  }
}
</script>
