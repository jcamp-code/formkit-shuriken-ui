import { createInput } from '../utils'
import Color from '../vue/Color.vue'

/**
 * Input definition for a Shuriken UI Native Color.
 * @public
 */
export const shcolor = createInput(Color, {
  props: ['colorFocus', 'shape', 'icon', 'inputClasses', 'suffixButton'],
})
