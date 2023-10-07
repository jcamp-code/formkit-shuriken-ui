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
  <BaseInputFile
    :id="context?.id"
    v-model="context!._value"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :list="attrs.list"
    :style="attrs.style"
    :icon="context?.icon"
    :shape="context?.shape"
    :error="context?.state.validationVisible && !context?.state.valid"
    :classes="context?.inputClasses"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :aria-labelledby="attrs.ariaLabelledby"
    :placeholder="attrs.placeholder"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
