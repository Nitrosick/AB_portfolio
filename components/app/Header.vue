<template>
  <header class="header">
    <Button
      text="CV"
      href="/docs/cv.pdf"
      download="CV Buzhinskaia Aleksandra"
      class="cv"
    />

    <div class="social">
      <SocialLink
        v-for="link in social"
        :key="link.id"
        :icon="link.icon"
        :href="link.link"
      />
    </div>
  </header>
</template>

<script setup>
import social from '@/const/social'
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc($unit * 3) calc($unit * 10);
  width: 100%;
  z-index: 1;

  @include bp-m {
    padding: calc($unit * 2) calc($unit * 10);
  }

  @include bp-s {
    padding: calc($unit * 1.5) calc($unit * 3);
  }
}

.social {
  display: flex;
  align-items: center;
  gap: calc($unit * 6);

  @include bp-m {
    width: 100%;
    justify-content: space-around;
  }

  @include bp-s {
    gap: calc($unit * 2);
  }

  @include bp-xs {
    justify-content: space-between;
  }
}

.cv {
  @include bp-m {
    display: none;
  }
}
</style>
