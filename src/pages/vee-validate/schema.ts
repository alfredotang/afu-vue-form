import * as y from 'yup'

export const schema = y.object({
  personList: y.array(
    y.object({
      name: y.string().required('required'),
      age: y.number().required('required'),
    }),
  )
    .min(1, 'required')
    .required('required')
    .strict(),
  contactAddress:
  y.object({
    city: y.string().required('required'),
    district: y.string().required('required'),
    zipCode: y.string().required('required'),
    address: y.string().required('required'),
  })
    .required('required')
    .strict(),
})

export type FormValues = y.InferType<typeof schema>
