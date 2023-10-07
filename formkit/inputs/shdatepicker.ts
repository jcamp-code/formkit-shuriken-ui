import DatePicker from '../vue/DatePicker.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Datepicker.
 * @public
 */
export const shdatepicker = createInput(DatePicker, {
  props: ['colorFocus', 'shape', 'icon'],
})
