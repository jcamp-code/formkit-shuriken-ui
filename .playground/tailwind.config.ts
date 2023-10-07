/* eslint-disable @typescript-eslint/no-require-imports */
// https://v3.nuxtjs.org/api/configuration/nuxt.config

import animate from '@jcamp/tailwindcss-plugin-animate'
import colors from 'tailwindcss/colors'
import icons from '@jcamp/tailwindcss-plugin-icons'

export default {
  plugins: [
    icons({ extraCssProperties: { display: 'flex' } }),
    // @ts-expect-error animate is a function
    animate(),
  ],
  darkMode: 'class',
  theme: {
    /**
     * Customize fonts
     *
     * You must load them yourself
     * (ex: with unplugin-fonts)
     */
    fontFamily: {
      sans: ['Roboto Flex', 'sans-serif'],
      heading: ['Inter', 'sans-serif'],
      alt: ['Karla', 'sans-serif'],
      mono: ['ui-monospace', 'monospace'],
    },
    extend: {
      /**
       * Customize colors
       *
       * Use tailwind predefined colors,
       * or generate your own with tools like https://tailwindshades.com
       */
      colors: {
        // Define only the ones you want to override
        muted: colors.slate,
        primary: colors.violet,
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },
    },
  },
}
