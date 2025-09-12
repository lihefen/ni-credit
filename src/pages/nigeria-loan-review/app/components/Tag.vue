<template>
  <span :class="['inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border', colorClass]">
    <svg v-if="level === 'high'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
    </svg>
    <svg v-else-if="level === 'med'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    level: {
      type: String,
      default: 'low',
      validator: value => ['low', 'med', 'high'].includes(value)
    }
  },
  computed: {
    colorClass() {
      const colors = {
        high: 'bg-red-50 text-red-700 border-red-200',
        med: 'bg-amber-50 text-amber-700 border-amber-200',
        low: 'bg-emerald-50 text-emerald-700 border-emerald-200'
      }
      return colors[this.level]
    }
  }
}
</script>