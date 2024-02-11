import { createInput } from '../utils'
import Combobox from '../vue/Combobox.vue'

/**
 * Input definition for a Shuriken UI Autocomplete.
 * @public
 */
export const shcombobox = createInput(Combobox, {
  props: [
    'colorFocus',
    'rounded',
    'icon',
    'clearable',
    'options',
    'multiple',
    'inputClasses',
    'filterItems',
    'displayValue',
    'filterDebounce',
    'allowCreate',
    'hideCreatePrompt',
    'itemComp',
    'fixed',
    'placement',
    'properties',
  ],
})
