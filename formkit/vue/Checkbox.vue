<script setup lang="ts">
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs
const labelSlot = context!.slots.label
</script>

<template>
  <BaseCheckbox
    :id="context?.id"
    v-model="context!._value"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :color="context?.color"
    :style="attrs.style"
    :shape="context?.shape"
    :label="context?.label"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :aria-labelledby="attrs.ariaLabelledby"
    @input="context?.node.input(!context?.value)"
    @blur="context?.handlers.blur()"
  >
    <component :is="context!.slots.default || labelSlot" />
  </BaseCheckbox>
</template>
