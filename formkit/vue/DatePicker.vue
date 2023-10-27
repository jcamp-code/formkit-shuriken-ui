<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { format } from 'date-fns'

import { sendEvents } from '../utils'

const props = defineProps({
  context: Object,
})

const context = props.context

const textRef = ref()
const inputDate = computed({
  get() {
    return context!._value
  },
  set(newValue) {
    context?.node.input(newValue)
  },
})

const formatDate = computed({
  get() {
    try {
      if (context!._value instanceof Date) {
        if (Number.isNaN((context!._value as Date).getTime())) return ''
        return format(context!._value, 'MM/dd/yyyy')
      }
    } catch {}
    return context!._value
  },
  set(newValue) {
    context?.node.input(newValue)
  },
})

const datePickerRef = ref()
</script>

<template>
  <VueDatePicker
    ref="datePickerRef"
    v-model="inputDate"
    :teleport="true"
    :auto-apply="true"
    :text-input="{ openMenu: false, enterSubmit: true, tabSubmit: true }"
    :clearable="false"
    :month-change-on-scroll="false"
    :enable-time-picker="false"
    week-start="0"
  >
    <template #calendar-header="{ day }">
      {{ day[0] }}
    </template>
    <template
      #dp-input="{ isMenuOpen, onKeyPress, onInput, onBlur, onEnter, onTab }"
    >
      <BaseInput
        :id="context?.id"
        ref="textRef"
        v-model="formatDate"
        type="text"
        :shape="context?.shape"
        :color-focus="context?.colorFocus ?? true"
        :error="context?.state.validationVisible && !context?.state.valid"
        v-bind="context?.attrs"
        @keydown.enter="onEnter"
        @keydown.tab="onTab"
        @keypress="onKeyPress"
        @input="onInput"
        @blur="onBlur"
      >
        <template v-if="context?.prefixIcon || context?.icon" #icon>
          <Icon
            :name="context?.prefixIcon || context?.icon"
            class="nui-input-icon-inner"
            :class="context?.inputClasses?.icon"
            @click="(e) => sendEvents(e, context, 'prefixIconClick')"
          />
        </template>
        <template #action>
          <div
            tabindex="-1"
            class="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            @click="
              (e) =>
                isMenuOpen
                  ? datePickerRef.closeMenu()
                  : datePickerRef.openMenu()
            "
          >
            <Icon
              :name="context?.suffixIcon ?? 'ph:calendar-duotone'"
              class="text-muted-400 dark:text-muted-500 group-focus-within:!text-primary-500"
            />
          </div>
        </template>
      </BaseInput>
    </template>
  </VueDatePicker>
</template>
