<template>
  <div
    class="content"
    :class="{ cropped: loading }"
  >
    <Loader :on="loading" />
    <Main />
    <AboutMe />
    <Projects @open-details="openDetails" />
    <Contacts />
    <ProjectDetails
      :id="projectId"
      :opened="detailsOpened"
      @close-details="closeDetails"
    />
  </div>
</template>

<script setup>
const loading = ref(true)
const projectId = ref(0)
const detailsOpened = ref(false)

onMounted(() => loading.value = false)

const openDetails = (id) => {
  projectId.value = id
  detailsOpened.value = true
  document.body.style.overflow = 'hidden'
}

const closeDetails = () => {
  projectId.value = 0
  detailsOpened.value = false
  document.body.style.overflow = ''
}
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
