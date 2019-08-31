<template>
  <div v-if="isActive" class="modal is-active">
    <div class="modal-background" @click.self="$emit('onClose')"></div>
    <div class="modal-content">
      <div class="box">
        <slot />
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('onClose')"></button>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
</style>
