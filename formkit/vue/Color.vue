<script setup lang="ts">
import BaseTextInput from './BaseTextInput.vue'

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
  <BaseTextInput
    v-model="context!._value"
    :context="context"
    type="color"
    :classes="classes"
    @input="handleInput"
    @blur="handleBlur"
  >
  </BaseTextInput>
</template>
