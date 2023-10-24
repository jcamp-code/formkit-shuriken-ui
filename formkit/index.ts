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
import ShurikenFile from './vue/File.vue'

import './css/multistep.css'
import '@vuepic/vue-datepicker/dist/main.css'
import './css/vuedatepicker.css'

import { addClasses, replaceClasses } from './formkit.config.shuriken'

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

function replaceShurikenFormKitConfig(): DefaultConfigOptions {
  return {
    config: {
      classes: generateClasses(replaceClasses),
    },
    inputs: {
      ...createInputs(''),
    },
  }
}

function addShurikenFormKitConfig(): DefaultConfigOptions {
  return {
    config: {
      classes: generateClasses(addClasses),
    },
    inputs: {
      ...createInputs('sh'),
      shfile: createInput(ShurikenFile, {
        props: ['shape'],
      }),
    },
  }
}

export {
  addShurikenFormKitConfig,
  replaceShurikenFormKitConfig,
  mergeClasses,
  removeClasses,
  createInput,
  sendEvents,
}
