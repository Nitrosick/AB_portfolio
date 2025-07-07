<template>
  <div
    class="project-details"
    :class="{ opened }"
  >
    <div
      class="project-details-bg"
      @click="emits('closeDetails')"
    />
    <button
      v-if="opened"
      class="project-details-close"
      @click.prevent="emits('closeDetails')"
    >
      <img
        src="/icons/close.svg"
        alt="Close button"
        loading="lazy"
        width="40"
        height="40"
      >
    </button>
    <div class="project-details-content">
      <div
        v-if="id"
        class="content"
      >
        <div class="content-head">
          <img
            v-if="project.details.logo"
            :src="`/images/projects/details/${id}/logo.svg`"
            alt="Project logo"
            loading="lazy"
            width="250"
            height="100"
            class="content-head-logo"
          >
          <h2 v-html="project.details.title" />
        </div>

        <div
          v-for="(block, i) in project.details.blocks"
          :key="`block:${i}`"
          class="content-block"
        >
          <div>
            <b class="content-block-title">
              {{ block.title }}
            </b>
            <b
              v-if="block.subtitle"
              class="content-block-subtitle"
            >
              {{ block.subtitle }}
            </b>
          </div>
          <div
            class="content-block-flex"
            :class="{ horizontal: block.horizontal }"
          >
            <p
              class="content-block-text"
              v-html="block.text"
            />
            <div
              v-if="block.images"
              class="content-block-images"
            >
              <img
                v-for="image in block.images"
                :key="`image:${image}`"
                :src="`/images/projects/details/${id}/${image}.webp`"
                alt="Project image"
                loading="lazy"
                width="800"
                height="400"
                class="content-block-image"
              >
            </div>
          </div>
        </div>

        <Button
          :text="project.linkLabel"
          :href="project.link"
          class="outer-link"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from '@/const/projects'

const props = defineProps({
  id: { type: Number, required: true },
  opened: { type: Boolean, default: false }
})
const emits = defineEmits(['closeDetails'])

const project = computed(() => {
  if (!projects || !props.id) return {}
  return projects.find(p => p.id === props.id) ?? {}
})
</script>

<style lang="scss" scoped>
.project-details {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 8;
  pointer-events: none;

  &-bg {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity calc($transition-time * 2);
  }

  &-content {
    position: absolute;
    right: 0;
    top: 0;
    width: 75rem;
    height: 100%;
    max-width: 100vw;
    padding: calc(var(--unit) * 3);
    border-left: 2px solid var(--color-white);
    background: var(--gradient-violet-5);
    transform: translateX(100%);
    transition: transform ease-in-out calc($transition-time * 3);
    overflow-y: auto;

    @include bp-l {
      width: 100%;
      border: none;
    }
  }

  &.opened {
    pointer-events: all;

    .project-details-bg {
      opacity: 1;
    }

    .project-details-content {
      transform: translateX(0);
    }
  }

  &-close {
    position: fixed;
    top: calc(var(--unit) * 1.5);
    right: calc(var(--unit) * 1.5);
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 9;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit) * 2);

  &-head {
    display: flex;
    align-items: center;
    gap: calc(var(--unit) * 3);
    padding-bottom: calc(var(--unit) * 3);
    border-bottom: 2px solid var(--color-white);

    &-logo {
      max-width: 17.5rem;
      max-height: 6.25rem;
      object-fit: contain;
    }
  }

  &-block {
    padding-bottom: calc(var(--unit) * 3);
    border-bottom: 2px solid var(--color-white);

    &-images {
      display: flex;
      flex-direction: column;
      gap: var(--unit);
    }

    &-title,
    &-subtitle {
      display: block;
      margin-bottom: calc(var(--unit) * 1.5);
    }

    &-subtitle {
      font-size: 0.9em;
    }

    &-image {
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }

    &-flex {
      display: flex;
      flex-direction: column;
      gap: calc(var(--unit) * 1.5);

      &.horizontal {
        flex-direction: row;
        gap: calc(var(--unit) * 3);

        .content-block-images {
          order: 1;
        }

        .content-block-text {
          order: 2;
          max-width: 23rem;
        }

        @include bp-m {
          flex-direction: column;

          .content-block-images {
            order: 2;
          }

          .content-block-text {
            order: 1;
            max-width: none;
          }
        }
      }
    }
  }
}

.outer-link {
  align-self: flex-end;
}
</style>
