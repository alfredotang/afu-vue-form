import * as y from 'yup'
import { PROTOCOL_LIST } from './constants'

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
  protocol: y.string().required('required').oneOf(PROTOCOL_LIST),
})

export type FormValues = y.InferType<typeof schema>
