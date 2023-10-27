import { createResolver } from '@nuxt/kit'

import formkitPlugin from '@formkit/themes/tailwindcss'

// import { withShurikenUI } from '@shuriken-ui/tailwind'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['@shuriken-ui/nuxt'],
  modules: ['@formkit/nuxt', 'nuxt-icon-tw'],
  tailwindcss: {
    config: {
      content: [
        resolve('./formkit/**/*.{js,vue,ts}'),
        resolve('./components/*.vue'),
      ],
      plugins: [formkitPlugin],
    },
  },
})
