<template>
  <div
    class="content"
    :class="{ cropped: loading }"
  >
    <Loader :on="loading" />
    <Main />
    <AboutMe />
    <Projects />
    <Contacts />
  </div>
</template>

<script setup>
const loading = ref(true)

onMounted(() => loading.value = false)
</script>

<style lang="scss" scoped>
.content {
  max-width: $xl;
  margin: 0 auto;
  padding: calc($unit * 4) calc($unit * 5);

  @include bp-m {
    padding: calc($unit * 2) calc($unit * 3);
  }

  @include bp-s {
    padding: calc($unit * 1.5);
  }
}

.cropped {
  max-height: 100vh;
  overflow: hidden;
}
</style>
