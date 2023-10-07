<script setup lang="ts">
import { FormKitIcon } from '@formkit/vue'

const props = defineProps<{
  icon?: string
  name?: string
}>()

const iconName = props.icon || props.name
const useTwIcon = iconName?.match(/^(?:i|icon)-\[(.*)\]$/) ?? false
const useNuxtIcon = iconName?.match(':') ?? false
</script>

<template>
  <span v-if="useTwIcon" :class="iconName" class="iconTw"></span>
  <Icon v-else-if="useNuxtIcon" :name="iconName!"></Icon>
  <FormKitIcon v-else-if="iconName" :icon="iconName"></FormKitIcon>
</template>
