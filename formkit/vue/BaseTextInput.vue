<script setup lang="ts">
import IconTw from '../components/IconTw.vue'

const props = defineProps({
  context: Object,
})

const context = props.context

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
</script>

<template>
  <BaseInput
    v-bind="context?.attrs"
    :id="context?.id"
    :icon="context?.prefixIcon || context?.icon"
    :shape="context?.shape"
    :color-focus="context?.colorFocus"
    :error="context?.state.validationVisible && !context?.state.valid"
    :classes="context?.inputClasses"
  >
    <template v-if="context?.prefixIcon || context?.icon" #icon>
      <IconTw
        :name="context?.prefixIcon || context?.icon"
        class="nui-input-icon-inner"
        @click="(e) => events(e, 'prefixIconClick')"
      />
    </template>
    <template v-if="context?.suffixIcon" #action>
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <IconTw
          :name="context?.suffixIcon"
          class="text-muted-400 dark:text-muted-500 h-5 w-5"
          @click="(e) => events(e, 'suffixIconClick', 'actionClick')"
        />
      </div>
    </template>
  </BaseInput>
</template>
