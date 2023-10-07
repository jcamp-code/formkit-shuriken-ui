import Textarea from '../vue/Textarea.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Textarea.
 * @public
 */
export const shtextarea = createInput(Textarea, {
  props: ['colorFocus', 'shape', 'autogrow', 'addon', 'resize', 'inputClasses'],
})
