<template>
  <section>
    <div
      class="projects noise"
      id="projects"
    >
      <h2>Selected Projects</h2>
      <Project
        v-for="project in projects"
        :key="project.id"
        :data="project"
        @open-details="id => emits('openDetails', id)"
      />

    </div>
  </section>
</template>

<script setup>
import projects from '@/const/projects'

const emits = defineEmits(['openDetails'])
</script>

<style lang="scss" scoped>
section {
  z-index: 2;
}

.projects {
  background: var(--gradient-violet-2);
  border-radius: calc($block-radius - 2px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  flex-direction: column;
  gap: calc($unit * 3);
  padding: calc($unit * 10) calc($unit * 5);
  padding-top: calc($unit * 10 + $block-radius);

  @include bp-m {
    padding: calc($unit * 3);
    padding-top: calc($unit * 5 + $block-radius);
    padding-bottom: calc($unit * 5);
  }

  @include bp-s {
    gap: calc($unit * 2);
    padding: calc($unit * 1.5);
    padding-top: calc($unit * 4 + $block-radius);
    padding-bottom: calc($unit * 4);
  }

  h2 {
    padding-left: calc($unit * 5);

    @include bp-m {
      padding-left: calc($unit * 2);
    }

    @include bp-s {
      padding: 0;
    }
  }
}
</style>
