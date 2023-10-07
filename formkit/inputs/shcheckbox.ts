import Checkbox from '../vue/Checkbox.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Checkbox.
 * @public
 */
export const shcheckbox = createInput(
  Checkbox,
  {
    props: ['options', 'trueValue', 'falseValue', 'optionsLoader', 'shape', 'color'],
    forceTypeProp: 'checkbox',
  },
  false,
)
