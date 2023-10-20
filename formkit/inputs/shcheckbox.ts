import { createInput } from '../utils'
import Checkbox from '../vue/Checkbox.vue'

/**
 * Input definition for a Shuriken UI Checkbox.
 * @public
 */
export const shcheckbox = createInput(
  Checkbox,
  {
    props: ['options', 'trueValue', 'falseValue', 'optionsLoader', 'shape', 'color'],
  },
  false
)
