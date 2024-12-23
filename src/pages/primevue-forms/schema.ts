import * as y from 'yup'
import { CITY_LIST } from './constants'

export const schema = y.object({
  title: y.string().required('required'),
  city: y.string().required('required').oneOf(CITY_LIST),
})

export type FormValues = y.InferType<typeof schema>
