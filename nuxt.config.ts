import formkitPlugin from '@formkit/themes/tailwindcss'
import { createResolver } from '@nuxt/kit'

// import { withShurikenUI } from '@shuriken-ui/tailwind'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['@shuriken-ui/nuxt'],
  modules: ['@formkit/nuxt'],
  tailwindcss: {
    config: {
      content: [resolve('./formkit/**/*.{js,vue,ts}'), resolve('./components/*.vue')],
      plugins: [formkitPlugin],
    },
  },
})
