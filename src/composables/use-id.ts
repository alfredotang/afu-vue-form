import { customAlphabet } from 'nanoid'
import { computed } from 'vue'

export default function useId() {
  const id = computed(() => customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890')(6))
  return id
}
