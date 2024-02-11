<script setup lang="ts">
import { sendEvents } from '../utils'
import BaseInputWithIcons from '../../components/BaseInputIcons.vue'

const props = defineProps({
  context: Object,
})

const context = props.context

const classes = ref(context?.inputClasses)
if (classes.value?.input) {
  classes.value.input += ' appearance-none'
} else if (classes.value) {
  classes.value.input = ' appearance-none'
} else {
  classes.value = { input: ' appearance-none' }
}

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
    type="color"
    :icon="context?.prefixIcon || context?.icon"
    :suffix-icon="context?.suffixIcon"
    :rounded="context?.rounded"
    :color-focus="context?.colorFocus"
    :error="context?.state.validationVisible && !context?.state.valid"
    :classes="classes"
    v-bind="context?.attrs"
    @input="handleInput"
    @blur="handleBlur"
    @suffix-icon-click="(e) => sendEvents(e, context, 'suffixIconClick', 'actionClick')"
    @prefix-icon-click="(e) => sendEvents(e, context, 'prefixIconClick')"
  >
  </BaseInputWithIcons>
</template>
