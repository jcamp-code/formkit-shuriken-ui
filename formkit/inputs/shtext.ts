import { casts } from '@formkit/inputs'

import { createInput } from '../utils'
import Text from '../vue/Text.vue'

/**
 * Input definition for a Shuriken UI Text.
 * @public
 */
export const shtext = createInput(Text, {
  props: ['colorFocus', 'rounded', 'icon', 'inputClasses', 'suffixButton'],
  features: [casts],
})
