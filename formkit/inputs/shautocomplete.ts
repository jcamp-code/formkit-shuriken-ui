import { createInput } from '../utils'
import Autocomplete from '../vue/Autocomplete.vue'

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
    'inputClasses',
    'filterItems',
    'displayValue',
    'dropdown',
    'filterDebounce',
    'allowCustom',
    'hideCustomPrompt',
    'itemComp',
    'fixed',
    'placement',
    'properties',
    'modelProp',
  ],
})
