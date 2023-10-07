import Checkbox from '../vue/Checkbox.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Checkbox.
 * @public
 */
export const shcheckbox = createInput(Checkbox, {
  props: ['options', 'onValue', 'offValue', 'optionsLoader', 'shape', 'color'],
  forceTypeProp: 'checkbox',
})
