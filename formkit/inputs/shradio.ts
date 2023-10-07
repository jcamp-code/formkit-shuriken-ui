import { options } from '@formkit/inputs'
import Radio from '../vue/Radio.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Raddio.
 * @public
 */
export const shradio = createInput(Radio, {
  props: ['colorFocus', 'shape', 'options'],
  features: [options],
  forceTypeProp: 'radio',
})
