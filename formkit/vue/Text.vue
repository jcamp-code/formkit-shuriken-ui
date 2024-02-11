<script setup lang="ts">
import { sendEvents } from '../utils'
import BaseInputWithIcons from '../../components/BaseInputIcons.vue'

const props = defineProps({
  context: Object,
})

const context = props.context

const inputType = (context?.type as string).startsWith('sh')
  ? context?.type.substr(2)
  : context?.type

function handleBlur(e: any) {
  context?.handlers.blur(e.target.value)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}
</script>

<template>
  <BaseInputWithIcons
    :id="context?.id"
    v-model="context!._value"
    :type="inputType"
    :icon="context?.prefixIcon || context?.icon"
    :suffix-icon="context?.suffixIcon"
    :suffix-button="context?.suffixButton"
    :rounded="context?.rounded"
    :color-focus="context?.colorFocus ?? true"
    :error="context?.state.validationVisible && !context?.state.valid"
    :input-classes="context?.inputClasses"
    v-bind="context?.attrs"
    @input="handleInput"
    @blur="handleBlur"
    @suffix-icon-click="(e) => sendEvents(e, context, 'suffixIconClick', 'actionClick')"
    @prefix-icon-click="(e) => sendEvents(e, context, 'prefixIconClick')"
  >
  </BaseInputWithIcons>
</template>
