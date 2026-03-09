export default defineNuxtPlugin(() => {
  const router = useRouter()

  window._paq = window._paq || []
  const _paq = window._paq

  _paq.push(['setTrackerUrl', 'https://analytics.kafoo.dev/matomo.php'])
  _paq.push(['setSiteId', '3'])
  _paq.push(['enableLinkTracking'])

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://analytics.kafoo.dev/matomo.js'
  document.head.appendChild(script)

  _paq.push(['trackPageView'])

  router.afterEach(() => {
    _paq.push(['setCustomUrl', window.location.href])
    _paq.push(['setDocumentTitle', document.title])
    _paq.push(['trackPageView'])
  })
})
