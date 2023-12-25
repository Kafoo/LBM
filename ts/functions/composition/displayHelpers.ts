import { useDisplay } from 'vuetify';

export const isMobile = () =>
  computed(() => {
    const breakpoint = useDisplay().name.value
    return breakpoint === 'xs'
  })

export const isSm = () =>
  computed(() => {
    const breakpoint = useDisplay().name.value
    return breakpoint === 'sm'
  })

export const windowWidth = () =>
  computed(() => {
    return useDisplay().width.value
  })
