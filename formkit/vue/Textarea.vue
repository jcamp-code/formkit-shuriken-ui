<script setup lang="ts">
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

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
    :rows="context?.rows"
    :shape="context?.shape"
    :error="context?.state.validationVisible && !context?.state.valid"
    :classes="context?.inputClasses"
    :autogrow="context?.autogrow"
    :addon="context?.addon"
    :resize="context?.addon"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
