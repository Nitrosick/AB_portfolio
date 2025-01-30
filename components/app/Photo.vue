<template>
  <div class="photo">
    <img
      src="/images/photo/me.webp"
      alt="photo"
      loading="lazy"
      :style="{ width: `${size}rem` }"
    >
  </div>
</template>

<script setup>
const props = defineProps({
  size: { type: Number, required: true }
})
</script>

<style lang="scss" scoped>
.photo {
  align-self: center;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
