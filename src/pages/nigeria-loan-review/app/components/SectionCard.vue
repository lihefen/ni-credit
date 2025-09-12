<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
    <div class="flex items-center justify-between mb-2">
      <div class="text-sm font-semibold text-gray-700">{{ title }}</div>
      <chip v-if="right" :icon="right.icon" :text="right.text" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Chip from './Chip.vue'

export default {
  name: 'SectionCard',
  components: {
    Chip
  },
  props: {
    title: {
      type: String,
      required: true
    },
    right: {
      type: Object,
      default: null
    }
  }
}
</script>