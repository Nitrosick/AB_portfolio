<template>
  <Component
    :is="href ? 'a' : 'button'"
    :href="href"
    :download="download"
    :target="target"
    class="button"
  >
    {{ text }}
  </Component>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: null },
  href: { type: String, default: undefined },
  download: { type: [String, Boolean], default: undefined }
})

const target = computed(() => {
  const { href } = props
  if (!href || href.startsWith('#')) return undefined
  return '_blank'
})
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-block;
  outline: none;
  border: none;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: $violet;
  background-color: var(--color-white);
  border-radius: 100rem;
  border: 1px solid $violet;
  padding: $unit calc($unit * 3);
  transition: all $transition-time;
  white-space: nowrap;
  z-index: 5;
  cursor: pointer;

  &:hover,
  &:active {
    color: $violet-light;
    background-color: $violet-super-light;
    border-color: $violet-light;
  }

  &:active {
    background-color: var(--color-violet-light-2);
  }

  &:focus {
    outline: 0.5rem solid $violet-super-light;
  }
}
</style>
