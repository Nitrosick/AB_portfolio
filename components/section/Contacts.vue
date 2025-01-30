<template>
  <section>
    <div
      class="contacts"
      id="contacts"
    >
      <h2>Contact Me</h2>
      <p>
        Let’s chat and bring your ideas to life!<br>
        If you're looking for collaboration or have any questions, feel free to reach out.
      </p>
      <div class="contacts-links">
        <a
          href="mailto:buzhinskaiaa@gmail.com"
          class="contacts-links-mail"
        >
          Email: buzhinskaiaa@gmail.com
        </a>
        <SocialLink
          v-for="link in social"
          :key="link.id"
          :icon="link.icon"
          :href="link.link"
          type="footer-link"
        />
      </div>
      <p>
        Excited to start creating together!
      </p>
    </div>
  </section>
</template>

<script setup>
import social from '@/const/social'
</script>

<style lang="scss" scoped>
.contacts {
  background: var(--gradient-violet-3);
  border-radius: calc($block-radius - 2px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  flex-direction: column;
  gap: calc($unit * 2);
  padding: calc($unit * 10);
  padding-top: calc($unit * 10 + $block-radius);
  padding-bottom: calc($unit * 18);

  @include bp-m {
    padding: calc($unit * 5);
    padding-top: calc($unit * 5 + $block-radius);
  }

  @include bp-s {
    padding: calc($unit * 1.5);
    padding-top: calc($unit * 4 + $block-radius);
    padding-bottom: calc($unit * 10);
  }

  &-links {
    align-self: flex-start;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(3, auto);
    gap: 0 calc($unit * 2.5);

    &-mail {
      grid-column: 1/-1;
      color: var(--color-white);
      text-shadow: $text-shadow;
      transition: opacity $transition-time;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
