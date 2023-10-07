import { casts } from '@formkit/inputs'
import Text from '../vue/Text.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Text.
 * @public
 */
export const shtext = createInput(Text, {
  props: ['colorFocus', 'shape', 'icon', 'inputClasses', 'suffixButton'],
  features: [casts],
})
