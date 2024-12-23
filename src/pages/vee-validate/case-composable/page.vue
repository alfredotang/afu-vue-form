<template>
  <form
    class="space-y-6"
    novalidate
    @submit="onSubmit"
  >
    <div>
      <Select
        v-model="protocol"
        v-bin="protocolAttrs"
        class="block w-full"
        :options="protocolOptions"
        :invalid="Boolean(errors?.protocol)"
        optionLabel="label"
        optionValue="value"
      />
      <Message
        v-show="Boolean(errors?.protocol)"
        severity="error"
        variant="simple"
        size="small"
      >
        {{ errors?.protocol }}
      </Message>
    </div>
    <AddressSelector
      v-model="contactAddress"
      class="mb-8"
      :errors="{
        city: errors?.['contactAddress.city'],
        district: errors?.['contactAddress.district'],
        zipCode: errors?.['contactAddress.zipCode'],
        address: errors?.['contactAddress.address'],
      }"
    />
    <section
      class="rounded-md border p-4"
      :class="{ 'border-red-500': Boolean(errors?.personList) }"
    >
      <div class="flex justify-end">
        <Button @click="onAddPerson">
          <i class="pi pi-plus" />
        </Button>
      </div>
      <div
        v-for="(field, idx) in fields"
        :key="field.key"
        class="divide-y-2"
      >
        <div class="flex items-center gap-2 pt-4">
          <!-- errors typings has a bug -->
          <!-- @see https://github.com/logaretm/vee-validate/issues/4721 -->
          <NameAndAgeField
            v-model="field.value"
            class="mb-8"
            :errors="{
              name: errors?.[`personList[${idx}].name`],
              age: errors?.[`personList[${idx}].age`],
            }"
          />

          <Button
            v-if="fields.length > 1"
            severity="danger"
            size="small"
            @click="onRemovePerson(idx)"
          >
            <i class="pi pi-trash" />
          </Button>
        </div>
      </div>
      <Message
        v-show="Boolean(errors?.personList)"
        severity="error"
        variant="simple"
        size="small"
      >
        {{ errors?.personList }}
      </Message>
    </section>
    <Button
      label="Submit"
      type="submit"
    />
  </form>
  <FormResultDialog
    v-if="dialogConfig.visible"
    :data="dialogConfig.data"
    @close="onCloseDialog"
  />
</template>

<script lang="ts" setup>
import AddressSelector from '@/components/address-selector.vue'
import FormResultDialog from '@/components/form-result-dialog.vue'
import NameAndAgeField from '@/components/name-and-age-field.vue'
import { toTypedSchema } from '@vee-validate/yup'
import Button from 'primevue/button'
import Message from 'primevue/message'
import Select from 'primevue/select'
import {
  useField,
  useFieldArray,
  useForm,
} from 'vee-validate'
import { computed, ref } from 'vue'
import { PROTOCOL_LIST } from './constants'
import {
  type FormValues,
  schema,
} from './schema'

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: toTypedSchema(schema),
})

/**
 * @note
 *  const { value: contactAddress } = useField('contactAddress')
 *  will make errors?.['contactAddress.xxx'] not working QQ
 *  and form validation will not reactive
 */
const contactAddress = ref({
  city: useField<string>('contactAddress.city').value,
  district: useField<string>('contactAddress.district').value,
  zipCode: useField<string>('contactAddress.zipCode').value,
  address: useField<string>('contactAddress.address').value,
})

const [protocol, protocolAttrs] = defineField('protocol')

const protocolOptions = computed(() => {
  return PROTOCOL_LIST.map(item => ({
    label: item,
    value: item,
  }))
})

const { fields, push, remove: onRemovePerson } = useFieldArray<FormValues['personList'][number]>('personList')

const dialogConfig = ref<{
  visible: boolean
  data: any
}>({
  visible: false,
  data: null,
})

const onAddPerson = () => {
  push({
    name: undefined as unknown as string,
    age: undefined as unknown as number,
  })
}

const onSubmit = handleSubmit((values) => {
  dialogConfig.value = {
    visible: true,
    data: values,
  }
})

const onCloseDialog = () => {
  dialogConfig.value = {
    visible: false,
    data: null,
  }
}
</script>
