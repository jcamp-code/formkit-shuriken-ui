import { generateClasses } from '@formkit/themes'
import type { DefaultConfigOptions } from '@formkit/vue'

import {
  shautocomplete,
  shcheckbox,
  shcolor,
  shdatepicker,
  shdropdown,
  shradio,
  shtext,
  shtextarea,
  shtoggle,
} from './inputs'
import { createInput, mergeClasses, removeClasses, sendEvents } from './utils'

import './css/multistep.css'
import '@vuepic/vue-datepicker/dist/main.css'
import './css/vuedatepicker.css'

import { shurikenClasses } from './formkit.config.shuriken'

// defineFormKitConfig() will not work here for some reason; it wipes the inputs
function createInputs(prefix: string = 'sh') {
  return {
    [`${prefix}text`]: shtext,
    [`${prefix}email`]: shtext,
    [`${prefix}color`]: shcolor,
    [`${prefix}date`]: shtext,
    [`${prefix}datetimeLocal`]: shtext,
    [`${prefix}month`]: shtext,
    [`${prefix}number`]: shtext,
    [`${prefix}password`]: shtext,
    [`${prefix}search`]: shtext,
    [`${prefix}tel`]: shtext,
    [`${prefix}time`]: shtext,
    [`${prefix}url`]: shtext,
    [`${prefix}week`]: shtext,
    [`${prefix}range`]: shtext,
    [`${prefix}textarea`]: shtextarea,
    [`${prefix}checkbox`]: shcheckbox,
    [`${prefix}autocomplete`]: shautocomplete,
    [`${prefix}dropdown`]: shdropdown,
    [`${prefix}datepicker`]: shdatepicker,
    [`${prefix}toggle`]: shtoggle,
    [`${prefix}radio`]: shradio,
  }
}

function shurikenFormKitConfig(prefix?: string): DefaultConfigOptions {
  return {
    config: {
      classes: generateClasses(shurikenClasses),
    },
    inputs: {
      ...createInputs(prefix ?? ''),
    },
  }
}

export { shurikenFormKitConfig, mergeClasses, removeClasses, createInput, sendEvents }
