import { useRoute } from 'vue-router'

export default function useRouteChecker() {
  const route = useRoute()

  const isActiveChecker = (path: string) => route.path.includes(path)

  return {
    isActiveChecker,
  }
}
