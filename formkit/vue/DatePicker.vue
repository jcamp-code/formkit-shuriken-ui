<script setup lang="ts">
import { DatePicker as vDatePicker } from 'v-calendar'
import BaseTextInput from './BaseTextInput.vue'

const props = defineProps({
  context: Object,
})

const context = props.context

const inputDate = computed({
  get() {
    return context!._value
  },
  set(newValue) {
    context?.node.input(newValue)
  },
})
</script>

<template>
  <vDatePicker v-model="inputDate" mode="date">
    <template #default="{ inputValue, inputEvents }">
      <BaseTextInput
        :context="context"
        :model-value="inputValue"
        type="text"
        v-on="inputEvents ?? {}"
      >
      </BaseTextInput>
    </template>
  </vDatePicker>
</template>
