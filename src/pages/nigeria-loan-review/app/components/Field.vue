<template>
  <div class="flex justify-between text-sm py-1">
    <div class="text-gray-500">{{ label }}</div>
    <div :class="['text-gray-900 font-medium', mono ? 'font-mono' : '']">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    mono: {
      type: Boolean,
      default: false
    }
  }
}
</script>