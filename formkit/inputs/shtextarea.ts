import { createInput } from '../utils'
import Textarea from '../vue/Textarea.vue'

/**
 * Input definition for a Shuriken UI Textarea.
 * @public
 */
export const shtextarea = createInput(Textarea, {
  props: [
    'colorFocus',
    'rounded',
    'autogrow',
    'addon',
    'resize',
    'inputClasses',
    'rows',
  ],
})
