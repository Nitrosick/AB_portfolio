<template>
  <div
    class="loader noise"
    :class="{ hidden: !on }"
  >
    <img
      src="/icons/loader.svg"
      alt="loader"
    >
  </div>
</template>

<script setup>
const props = defineProps({
  on: { type: Boolean, required: true }
})
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: $violet-super-light;
  opacity: 1;
  transition: opacity calc($transition-time * 2), transform 0s calc($transition-time * 2);
  z-index: 10;

  img {
    width: 5rem;
  }
}

.hidden {
  opacity: 0;
  transform: scale(0, 0);
}
</style>
