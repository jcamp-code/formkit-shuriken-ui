import Switch from '../vue/Switch.vue'
import { createInput } from '../utils'

/**
 * Input definition for a Shuriken UI Toggle (switch).
 * @public
 */
export const shtoggle = createInput(
  Switch,
  {
    props: ['color', 'sublabel', 'thin'],
  },
  false,
)
