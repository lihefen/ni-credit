<template>
  <div class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black bg-opacity-40" @click="$emit('close')"></div>
    <div class="absolute inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center">
      <div class="bg-white md:rounded-2xl md:max-w-lg w-full p-4 md:shadow-xl">
        <div class="flex items-center justify-between mb-3">
          <div class="text-base font-semibold">{{ title }}</div>
          <button class="p-1 rounded-lg hover:bg-gray-100" @click="$emit('close')">
            <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="space-y-3 mb-4">
          <slot></slot>
        </div>
        <div class="flex gap-2 justify-end">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>