<script setup lang="ts">
import { BaseSwitchBall, BaseSwitchThin } from '#components'

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs
</script>

<template>
  <component
    :is="context?.thin ? BaseSwitchThin : BaseSwitchBall"
    :id="context?.id"
    v-model="context!._value"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :color="context?.color"
    :style="attrs.style"
    :label="context?.label"
    :sublabel="context?.sublabel"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :aria-labelledby="attrs.ariaLabelledby"
    @input="context?.node.input(!context?.value)"
    @blur="context?.handlers.blur()"
  />
</template>
