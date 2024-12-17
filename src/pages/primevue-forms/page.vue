<template>
  <h1 class="mb-8 text-3xl">
    primevue forms not working
  </h1>
  <Form
    v-slot="$form"
    class="space-y-6"
    :resolver="yupResolver(schema)"
    :initial-values="{
      personList: [
        {
          name: 'John',
          age: 20,
        },
      ],
      contactAddress: {
        city: '新北市',
        district: '板橋區',
        zipCode: '10001',
        address: '123 Main St',
      },
    }"
    @submit="onSubmit"
  >
    <AddressSelector
      v-model="$form.contactAddress"
      class="mb-8"
      :errors="{
        city: $form.error?.contactAddress?.city,
        district: $form.error?.contactAddress?.district,
        zipCode: $form.error?.contactAddress?.zipCode,
        address: $form.error?.contactAddress?.address,
      }"
    />
    <section class="rounded-md border p-4">
      <div class="flex justify-end">
        <Button @click="onAddField">
          <i class="pi pi-plus" />
        </Button>
      </div>
      <div class="divide-y-2">
        <div
          v-for="(_, index) in $form.personList"
          :key="index"
          class="flex items-center gap-2 pt-4"
        >
          <NameAndAgeField
            v-model="$form.personList[index]"
            :errors="{
              name: $form.error?.personList?.[index]?.name,
              age: $form.error?.personList?.[index]?.age,
            }"
            class="mb-8"
          />
          <Button
            severity="danger"
            size="small"
            @click="$form.personList.splice(index, 1)"
          >
            <i class="pi pi-trash" />
          </Button>
        </div>
      </div>
    </section>
    <Button label="Submit" />
  </Form>
  <FormResultDialog
    v-if="dialogConfig.visible"
    :visible="dialogConfig.visible"
    :data="dialogConfig.data"
    @close="onCloseDialog"
  />
</template>

<script lang="ts" setup>
import AddressSelector from '@/components/address-selector.vue'
import FormResultDialog from '@/components/form-result-dialog.vue'
import NameAndAgeField from '@/components/name-and-age-field.vue'
import Form, { type FormSubmitEvent } from '@primevue/forms/form'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import Button from 'primevue/button'
import { ref } from 'vue'
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

const onAddField = () => {

}

const onSubmit = (event: FormSubmitEvent) => {
  const values = event.values as FormValues
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
