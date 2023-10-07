<script setup lang="ts">
import BaseTextInput from './BaseTextInput.vue'

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
  <BaseTextInput
    v-model="context!._value"
    :context="context"
    :type="inputType"
    @input="handleInput"
    @blur="handleBlur"
  >
  </BaseTextInput>
</template>
