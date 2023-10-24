import { createMultiStepPlugin } from '@formkit/addons'
import { genesisIcons } from '@formkit/icons'
// import { createProPlugin, inputs } from '@formkit/pro'
import { defineFormKitConfig } from '@formkit/vue'

import { shurikenFormKitConfig } from '../formkit'

//const proPlugin = createProPlugin('<FORMKIT-KEY-HERE>', inputs)

const shConfig = shurikenFormKitConfig()

export default defineFormKitConfig({
  ...shConfig,
  plugins: [
    //    proPlugin,
    createMultiStepPlugin(),
  ],
  icons: {
    ...genesisIcons,
  },
  iconLoader: (iconName: string) => {
    return `<span class="${iconName} iconTw"></span>`
  },
})
