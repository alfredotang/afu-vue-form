<template>
  <!-- v-slot="{ val }" -->
  <Form
    v-slot="{ errors }"
    class="grid gap-4"
    :validationSchema="schema"
    @submit="onSubmit"
  >
    <section>
      <!-- <Field
        :as="InputText"
        name="hello.world.title"
        fluid
        :invalid="Boolean(errors?.title)"
      /> -->
      <Field
        v-slot="{ field }"
        name="hello.world.title"
      >
        <InputText
          v-bind="field"
          fluid
          :invalid="Boolean(errors?.title)"
        />
      </Field>
      <ErrorMessage
        v-slot="{ message }"
        name="hello.world.title"
        as="div"
      >
        <Message
          severity="error"
          variant="simple"
          size="small"
        >
          {{ message }}
        </Message>
      </ErrorMessage>
    </section>
    <section
      class="grid gap-4 rounded-md border p-4"
      :class="{ 'border-red-500': Boolean(errors?.links) }"
    >
      <FieldArray
        v-slot="{ fields, push, remove }"
        name="links"
      >
        <div class="flex justify-end">
          <Button
            type="button"
            @click="push(undefined)"
          >
            Add
          </Button>
        </div>
        <div
          v-for="(field, idx) in fields"
          :key="field.key"
        >
          <div class="flex gap-2">
            <Field
              :name="`links[${idx}]`"
              type="url"
              :invalid="Boolean(errors?.[`links[${idx}]`])"
              :as="InputText"
              fluid
            />
            <Button
              type="button"
              @click="remove(idx)"
            >
              Remove
            </Button>
          </div>
          <ErrorMessage
            v-slot="{ message }"
            :name="`links[${idx}]`"
            as="div"
          >
            <Message
              severity="error"
              variant="simple"
              size="small"
            >
              {{ message }}
            </Message>
          </ErrorMessage>
        </div>
      </FieldArray>
    </section>
    <Button
      label="submit"
      type="submit"
    />
  </Form>
</template>

<script lang="ts" setup>
import { usePanelStore } from '@/stores/panel'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import { ErrorMessage, Field, FieldArray, Form, type SubmissionHandler } from 'vee-validate'
import { schema } from './schema'

const { show: onShowDialog } = usePanelStore()

const onSubmit: SubmissionHandler = (values) => {
  onShowDialog(values)
}
</script>
