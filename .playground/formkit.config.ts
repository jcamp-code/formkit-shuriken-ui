import { createMultiStepPlugin } from '@formkit/addons'
import { genesisIcons } from '@formkit/icons'
import { createProPlugin, inputs } from '@formkit/pro'
import { defineFormKitConfig } from '@formkit/vue'

import { shurikenFormKitConfig } from '../formkit'

const proPlugin = createProPlugin('fk-384daa4457', inputs)

const shConfig = shurikenFormKitConfig()

export default defineFormKitConfig({
  ...shConfig,
  plugins: [proPlugin, createMultiStepPlugin()],
  icons: {
    ...genesisIcons,
  },
  iconLoader: (iconName: string) => {
    return `<span class="${iconName}"></span>`
  },
})
