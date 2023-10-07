import { replaceShurikenFormKitConfig } from '../formkit'
import { genesisIcons } from '@formkit/icons'
import { createMultiStepPlugin } from '@formkit/addons'
import { defineFormKitConfig } from '@formkit/vue'

// import { createProPlugin, inputs } from '@formkit/pro'
// const proPlugin = createProPlugin('<FORMKIT PRO KEY>', inputs)

const shConfig = replaceShurikenFormKitConfig()

// how to delete an input you don't want
// delete shConfig.inputs?.shfile

export default defineFormKitConfig({
  ...shConfig,
  plugins: [
    // proPlugin,
    createMultiStepPlugin(),
  ],
  icons: {
    ...genesisIcons,
  },
  iconLoader: (iconName: string) => {
    return `<span class="${iconName} iconTw"></span>`
  },
})
