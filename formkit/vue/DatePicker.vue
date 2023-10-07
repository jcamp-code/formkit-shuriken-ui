<script setup lang="ts">
import { DatePicker as vDatePicker } from 'v-calendar'
import { sendEvents } from '../utils'
import BaseInputIcons from '../../components/BaseInputIcons.vue'

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
      <BaseInputIcons
        :id="context?.id"
        :model-value="inputValue"
        type="text"
        :icon="context?.prefixIcon || context?.icon"
        :suffix-icon="context?.suffixIcon"
        :shape="context?.shape"
        :color-focus="context?.colorFocus"
        :error="context?.state.validationVisible && !context?.state.valid"
        :classes="context?.inputClasses"
        v-bind="context?.attrs"
        v-on="inputEvents ?? {}"
        @suffix-icon-click="(e) => sendEvents(e, context, 'suffixIconClick', 'actionClick')"
        @prefix-icon-click="(e) => sendEvents(e, context, 'prefixIconClick')"
      >
      </BaseInputIcons>
    </template>
  </vDatePicker>
</template>
