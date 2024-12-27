import * as y from 'yup'

export const schema = y.object({
  hello: y.object({
    world: y.object({
      title: y.string().required('required'),
    }),
  }),
  links: y.array(
    y.string().required('required'),
  )
    .required('required')
    .min(1, 'required')
    .required('required')
    .strict(),
})

export type FormValues = y.InferType<typeof schema>
