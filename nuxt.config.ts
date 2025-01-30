const title = 'A·B Portfolio'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-29',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      title: title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [{ children: 'JavaScript is required' }]
    }
  },
  components: {
    dirs: [
      'components/ui',
      'components/app',
      'components/section'
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['import'],
          additionalData: '@import "@/assets/style/variables.scss";'
        },
      },
    },
  },
  css: [
    '@/assets/style/normalize.scss',
    '@/assets/style/main.scss'
  ],
  imports: {
    dirs: ['store']
  }
})
