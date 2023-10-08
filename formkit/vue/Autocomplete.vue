<script setup lang="ts">
import IconTw from '../../components/IconTw.vue'

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function events(e: Event, name1: string, name2?: string) {
  function sendEvent(name: string) {
    const clickHandlerProp = `on${name.charAt(0).toUpperCase()}${name.slice(1)}`

    const handlerFunction = context!.attrs[clickHandlerProp] || context![clickHandlerProp]
    if (handlerFunction && typeof handlerFunction === 'function') {
      return handlerFunction(context?.node, e)
    }
  }
  sendEvent(name1)
  if (name2) sendEvent(name2)
}

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}

function handleBlur(e: any) {
  context?.handlers.blur(e.target.value)
}
</script>

<template>
  <BaseAutocomplete
    :id="context?.id"
    v-model="context!._value"
    :multiple="context?.multiple"
    :items="context?.options || context?.attrs?.items"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :style="attrs.style"
    :icon="context?.prefixIcon || context?.icon"
    :shape="context?.shape"
    :error="context?.state.validationVisible && !context?.state.valid"
    :classes="context?.inputClasses"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :aria-labelledby="attrs.ariaLabelledby"
    :placeholder="attrs.placeholder"
    dropdown
    :clearable="context?.clearable"
    @update:model-value="handleChange"
    @blur="handleBlur"
  >
    <template v-if="context?.prefixIcon || context?.icon" #icon>
      <IconTw
        :name="context?.prefixIcon || context?.icon"
        class="nui-autocomplete-icon-inner"
        @click="(e) => events(e, 'prefixIconClick')"
      />
    </template>
  </BaseAutocomplete>
</template>

<style>
.nui-autocomplete.nui-autocomplete-default .nui-autocomplete-input {
  @apply dark:group-focus-within:border-primary-500 group-focus-within:border-primary-500;
}
</style>
