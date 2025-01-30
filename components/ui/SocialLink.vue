<template>
  <a
    :href="href"
    target="_blank"
    :class="`social-link ${type}`"
  >
    <img
      :src="`/icons/${icon}.svg`"
      alt="social link"
      loading="lazy"
    >
  </a>
</template>

<script setup>
const props = defineProps({
  icon: { type: String, required: true },
  href: { type: String, required: true },
  type: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.social-link {
  cursor: pointer;

  img {
    height: calc($unit * 2);
    transition: opacity $transition-time;
  }

  &:hover,
  &:focus {
    img {
      opacity: 0.5;
    }
  }
}

.footer-link {
  img {
    // height: calc($unit * 2.5);
    height: auto;
    width: 100%;
    filter: grayscale(1) brightness(1.9) drop-shadow($text-shadow);
  }
}
</style>
