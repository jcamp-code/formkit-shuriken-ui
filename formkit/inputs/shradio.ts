import { options } from '@formkit/inputs'

import { createInput } from '../utils'
import Radio from '../vue/Radio.vue'

/**
 * Input definition for a Shuriken UI Raddio.
 * @public
 */
export const shradio = createInput(Radio, {
  props: ['colorFocus', 'shape', 'options'],
  features: [options],
  forceTypeProp: 'radio',
})
