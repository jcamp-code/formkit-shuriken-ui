import { createInput } from '../utils'
import Combobox from '../vue/Combobox.vue'

/**
 * Input definition for a Shuriken UI Autocomplete.
 * @public
 */
export const shcombobox = createInput(Combobox, {
  props: [
    'colorFocus',
    'shape',
    'icon',
    'clearable',
    'options',
    'multiple',
    'inputClasses',
    'filterItems',
    'displayValue',
    'filterDebounce',
    'allowCustom',
    'hideCustomPrompt',
    'itemComp',
    'fixed',
    'placement',
    'properties',
  ],
})
