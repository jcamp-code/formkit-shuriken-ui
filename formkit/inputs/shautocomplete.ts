import Autocomplete from '../vue/Autocomplete.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Autocomplete.
 * @public
 */
export const shautocomplete = createInput(Autocomplete, {
  props: [
    'colorFocus',
    'shape',
    'icon',
    'clearable',
    'options',
    'multiple',
    'items',
    'inputClasses',
  ],
})
