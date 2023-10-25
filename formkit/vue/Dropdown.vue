<script setup lang="ts">
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function events(e: Event, name1: string, name2?: string) {
  function sendEvent(name: string) {
    const clickHandlerProp = `on${name.charAt(0).toUpperCase()}${name.slice(1)}`

    const handlerFunction =
      context!.attrs[clickHandlerProp] || context![clickHandlerProp]
    if (handlerFunction && typeof handlerFunction === 'function')
      return handlerFunction(context?.node, e)
  }
  sendEvent(name1)
  if (name2) sendEvent(name2)
}

function handleBlur(e: any) {
  context?.handlers.blur(e.value)
}
function handleInput(e: any) {
  context?.node.input(props.context?._value)
}

// this type is generated to show you all possible values
type PropertiesData =
  | {
      value?: string | undefined
      label?: string | undefined
      sublabel?: string | undefined
      media?: string | undefined
      icon?: string | undefined
    }
  | undefined

const options = computed(() => {
  if (context?.options) return context.options
  return context?.attrs?.items
})

const isString = computed(() => {
  if (context?.strings) return true
  if (
    Array.isArray(options.value) &&
    options.value.length > 0 &&
    typeof options.value[0] === 'string'
  )
    return true
  return false
})

const properties = computed(() => {
  if (isString.value) return {}
  if (context?.properties) return context.properties
  return {
    value: context?.optionValue ?? 'value',
    label: context?.optionLabel ?? 'label',
  }
})
</script>

<template>
  <BaseListbox
    :id="context?.id"
    v-model.prop="context!._value"
    :multiple="context?.multiple"
    :items="options"
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
    :properties="properties"
    :fixed="context?.fixed"
    :placement="context?.placement"
    @update:model-value="handleInput"
    @blur="handleBlur"
  >
    <template v-if="context?.prefixIcon || context?.icon" #icon>
      <IconTw
        :name="context?.prefixIcon || context?.icon"
        class="nui-icon-box-inner"
        @click="(e) => events(e, 'prefixIconClick')"
      />
    </template>
  </BaseListbox>
</template>

<style lang="postcss">
.nui-listbox.nui-has-icon.nui-listbox-md .nui-listbox-button {
  padding-inline-start: 1rem;
}
.nui-listbox.nui-listbox-default .nui-listbox-button {
  @apply dark:bg-opacity-75;
}

.nui-listbox.nui-listbox-default .nui-listbox-button {
  @apply dark:group-focus-within:border-primary-500 group-focus-within:border-primary-500;
}
</style>
