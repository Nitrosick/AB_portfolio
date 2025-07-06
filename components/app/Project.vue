<template>
  <div class="project">
    <div class="project-name">
      <b>{{ data.name }}</b> -
      <span>{{ data.category }}</span>
    </div>
    <div class="project-info">
      <h3 class="project-category">
        {{ data.category }}
      </h3>
      <div>
        <h2>{{ data.name }}</h2>
        <p class="description">{{ data.description }}</p>
        <Button
          text="About Project"
          @click="emits('openDetails', data.id)"
        />
      </div>
    </div>
    <div
      class="project-preview"
      :class="{ focused }"
      ref="preview"
    >
      <div
        v-if="!data.single"
        class="screenshots"
      >
        <div class="screenshots-item">
          <img
            :src="`/images/projects/${data.name.replaceAll(' ', '_').toLowerCase()}_d.webp`"
            alt="project screenshot"
            loading="lazy"
            class="image"
          >
        </div>
        <div class="screenshots-item mobile">
          <img
            :src="`/images/projects/${data.name.replaceAll(' ', '_').toLowerCase()}_m.webp`"
            alt="project screenshot"
            loading="lazy"
            class="image"
          >
        </div>
      </div>
      <div
        v-else
        class="screenshot"
      >
        <img
          :src="`/images/projects/${data.name.replaceAll(' ', '_').toLowerCase()}.png`"
          alt="project screenshot"
          loading="lazy"
          class="image"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true }
})
const emits = defineEmits(['openDetails'])

const preview = ref(null);
const focused = ref(false);

const checkPosition = () => {
  if (!preview.value) return

  const rect = preview.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  focused.value = rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2
}

onMounted(() => {
  window.addEventListener('scroll', checkPosition)
  checkPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkPosition)
})
</script>

<style lang="scss" scoped>
.project {
  border: none;
  border-top: 2px solid var(--color-white);
  padding: calc($unit * 3) calc($unit * 5);
  padding-bottom: 0;
  background-color: transparent;
  display: grid;
  grid-template-columns: 39% 61%;

  @include bp-l {
    display: flex;
    flex-direction: column;
    gap: calc($unit * 2);
  }

  @include bp-m {
    padding: calc($unit * 3) calc($unit * 2);
    padding-bottom: 0;
  }

  @include bp-s {
    padding: calc($unit * 2) 0 0 0;
    gap: calc($unit * 1.5);
  }

  &-name {
    position: relative;
    display: none;
    text-transform: capitalize;
    padding-left: calc($unit * 2);

    @include bp-l {
      display: inline;
    }

    &::before {
      position: absolute;
      top: calc($unit / 2);
      left: 0;
      content: '';
      width: calc($unit * 1.3);
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: $purple;
    }
  }

  &-info {
    border-right: 2px solid var(--color-white);
    margin-right: calc($unit * 3);
    padding-right: calc($unit * 3);
    display: flex;
    flex-direction: column;
    gap: calc($unit * 3);
    justify-content: space-between;

    @include bp-l {
      order: 2;
      border: none;
      margin: 0;
      padding: 0;
    }
  }

  &-category {
    position: relative;
    text-transform: capitalize;
    padding-left: calc($unit * 2);

    &::before {
      position: absolute;
      top: calc($unit / 2);
      left: 0;
      content: '';
      width: calc($unit * 1.3);
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: $purple;
    }
  }

  &-preview {
    position: relative;
    background-color: var(--color-white);
    border-radius: calc($block-radius / 3);
    width: 100%;
    aspect-ratio: 3/2;
    display: flex;
    flex-direction: column;
    z-index: 5;

    @include bp-l {
      order: 1;
    }

    @include bp-s {
      background-color: transparent;
      border-radius: 0;
    }
  }

  h2, h3 {
    @include bp-l {
      display: none;
    }
  }
}

.description {
  margin: calc($unit * 2) 0;

  @include bp-l {
    margin-top: 0;
  }

  @include bp-s {
    margin-bottom: calc($unit * 1.5);
  }
}

.screenshots {
  margin: calc($unit * 2);
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  gap: calc($unit * 2);

  @include bp-s {
    margin: 0;
    gap: calc($unit * 1.5);
  }

  &-item {
    border-radius: $unit;
    overflow: hidden;
    flex-grow: 1;
  }

  .mobile {
    margin-top: calc($unit * 3);
  }
}

.image {
  width: 100%;
  height: 100%;
  filter: grayscale(1) contrast(0.5) brightness(1.35);
  transition: filter calc($transition-time * 2);
}

.screenshot {
  margin: calc($unit * 2);
  flex-grow: 1;
  border-radius: $unit;
  overflow: hidden;
  display: flex;
  align-items: center;

  @include bp-s {
    margin: 0;
  }

  .image {
    height: auto;
  }
}

.focused .image {
  filter: grayscale(0) contrast(1) brightness(1);
}
</style>
