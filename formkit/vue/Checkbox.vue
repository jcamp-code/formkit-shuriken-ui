<script setup lang="ts">
const props = defineProps({
  context: Object,
})

const context = props.context
const labelSlot = context!.slots.label
</script>

<template>
  <BaseCheckbox
    :id="context?.id"
    v-model="context!._value"
    v-bind="context?.attrs"
    :true-value="context?.trueValue ?? true"
    :false-value="context?.trueValue ?? false"
    :error="context?.state.validationVisible && !context?.state.valid"
    :color="context?.color"
    :rounded="context?.rounded"
    :label="context?.label"
    @input="context?.node.input(!context?.value)"
    @blur="context?.handlers.blur()"
  >
    <component :is="context!.slots.default || labelSlot" />
  </BaseCheckbox>
</template>
