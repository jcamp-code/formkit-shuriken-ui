import { createInput } from '../utils'
import Switch from '../vue/Switch.vue'

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
