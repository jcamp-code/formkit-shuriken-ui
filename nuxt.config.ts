import { createResolver } from '@nuxt/kit'
import formkitPlugin from '@formkit/themes/tailwindcss'
import { withShurikenUI } from '@shuriken-ui/tailwind'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['@jcamp/shuriken-ui-nuxt'],
  modules: ['@formkit/nuxt'],
  tailwindcss: {
    config: {
      content: [resolve('./formkit/**/*.{js,vue,ts}')],
      plugins: [formkitPlugin],
    },
  },
  hooks: {
    // @ts-expect-error - hook is handled by nuxtjs/tailwindcss
    'tailwindcss:config': function (config: Config) {
      withShurikenUI(config)
      // remove outdated aspect ratio plugin
      // https://github.com/shuriken-ui/nuxt/issues/95
      // once this is removed, this whole section can be removed
      if (config?.presets) {
        // not sure why these are set the way they are, they break some min-h min-w variants
        // monly uses I can find are in the demo, where the classes are duplicated by lg: variants
        // can also be done by built in utilities
        // tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation
        // md:max-lg:portrait
        // md:max-lg:landscape
        /*
        screens: {
          xs: { max: '639px' },
          lg: '1025px',
          ptablet: {
            raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)',
          },
          ltablet: {
            raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
          },
        },
        if (config.presets[0].theme?.extend?.screens) {
          delete config.presets[0].theme?.extend?.screens
        }
        */
        const index = config.presets[0].plugins.findIndex((element: any) => {
          return element.config?.theme?.aspectRatio
        })
        if (index !== undefined && index > -1) {
          config.presets[0].plugins.splice(index, 1)
        }
      }
    },
  },
})
