<script setup lang="ts">
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}

const radios = attrs.items ?? context?.options ?? []

function label(option: any) {
  if (typeof option === 'string') return option
  return option.label
}
function value(option: any) {
  if (typeof option === 'string') return option
  return option.value
}
</script>

<template>
  <div :class="attrs.options_class" class="mb-2">
    <div v-for="option in radios" :key="option" :class="attrs.option_class">
      <BaseRadio
        v-model="context!._value"
        :color="context?.color"
        :label="label(option)"
        :name="attrs.name"
        :value="value(option)"
        :input-style="attrs.style"
        @click="handleChange"
        @change="handleChange"
      />
    </div>
  </div>
</template>
