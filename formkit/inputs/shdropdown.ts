import { createInput } from '../utils'
import Dropdown from '../vue/Dropdown.vue'

/**
 * Input definition for a Shuriken UI Dropdown (Listbox).
 * @public
 */
export const shdropdown = createInput(Dropdown, {
  props: [
    'colorFocus',
    'shape',
    'icon',
    'clearable',
    'options',
    'multiple',
    'inputClasses',
    'optionLabel',
    'optionValue',
    'strings',
    'portal',
  ],
})
