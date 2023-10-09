import { createInput } from '../utils'
import DatePicker from '../vue/DatePicker.vue'

/**
 * Input definition for a Shuriken UI Datepicker.
 * @public
 */
export const shdatepicker = createInput(DatePicker, {
  props: ['colorFocus', 'shape', 'icon', 'inputClasses'],
})
