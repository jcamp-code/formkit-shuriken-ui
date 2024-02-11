<script setup lang="ts">
const props = defineProps({
  context: Object,
})

const context = props.context

function handleBlur(e: any) {
  context?.handlers.blur(e.target.value)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}
</script>

<template>
  <BaseTextarea
    v-bind="context?.attrs"
    :id="context?.id"
    v-model="context!._value"
    type="textarea"
    :color-focus="context?.colorFocus ?? true"
    :rows="context?.rows"
    :rounded="context?.rounded"
    :error="context?.state.validationVisible && !context?.state.valid"
    :classes="context?.inputClasses"
    :autogrow="context?.autogrow"
    :addon="context?.addon"
    :resize="context?.resize"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
