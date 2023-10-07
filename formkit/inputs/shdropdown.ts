import Dropdown from '../vue/Dropdown.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Dropdown (Listbox).
 * @public
 */
export const shdropdown = createInput(Dropdown, {
  props: ['colorFocus', 'shape', 'icon', 'clearable', 'options', 'multiple', 'inputClasses'],
})
