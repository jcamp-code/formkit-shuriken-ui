<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import IconTw from './IconTw.vue'

const props = defineProps<{
  icon?: string
  prefixIcon?: string
  suffixIcon?: string
  inputClasses?: any
  suffixButton?: boolean
}>()

const emit = defineEmits(['prefixIconClick', 'actionClick', 'suffixIconClick'])

const inputRef = ref<HTMLInputElement>()
defineExpose({
  /**
   * The underlying HTMLInputElement element
   */
  el: inputRef,
})

const suffixButtonClass = computed(() =>
  twMerge('absolute inset-y-0 right-0 flex items-center pr-3', props?.inputClasses?.suffixButton),
)
const suffixIconClass = computed(() =>
  twMerge('text-muted-400 dark:text-muted-500', props?.inputClasses?.suffixIcon),
)

function emitSuffixClick(e: Event) {
  emit('suffixIconClick', e)
  emit('actionClick', e)
}
</script>

<template>
  <BaseInput ref="inputRef" :classes="props.inputClasses" :icon="props.prefixIcon || props.icon">
    <template v-if="props.prefixIcon || props.icon" #icon>
      <IconTw
        :name="props.prefixIcon || props.icon"
        class="nui-input-icon-inner"
        :class="props.inputClasses?.icon"
        @click="(e: Event) => emit('prefixIconClick', e)"
      />
    </template>
    <template v-if="props.suffixIcon" #action>
      <Component
        :is="props.suffixButton ? 'button' : 'div'"
        :class="suffixButtonClass"
        @click.prevent="emitSuffixClick"
      >
        <IconTw :name="props.suffixIcon" :class="suffixIconClass" />
      </Component>
    </template>
  </BaseInput>
</template>
