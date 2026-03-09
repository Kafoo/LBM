declare global {
  interface Window {
    _paq: any[]
  }
}

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach((to) => {
    if (typeof window._paq === 'undefined') return
    window._paq.push(['setCustomUrl', to.fullPath])
    window._paq.push(['setDocumentTitle', document.title])
    window._paq.push(['trackPageView'])
  })
})
