<template>
  <div class="main-box">
    <main
      class="main noise"
      id="main"
    >
      <Header />
      <div class="main-content">
        <Photo :size="10.75" />
        <h1>Hey! I’m&nbsp;Aleksandra&nbsp;Buzhinskaia, Junior&nbsp;UX/UI&nbsp;Designer</h1>
        <span class="main-content-text">And this is my portfolio</span>
      </div>
      <Button
        text="CV"
        href="/docs/cv.pdf"
        download="CV Buzhinskaia Aleksandra"
        class="cv"
      />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.main-box {
  position: relative;
  height: calc(100vh - ($unit * 8));
  background: $block-stroke;
  padding: 2px;
  border-radius: $block-radius;
  box-shadow: $block-shadow;
  z-index: 4;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--gradient-pearl);
  border-radius: calc($block-radius - 2px);
  height: 100%;
  position: relative;

  &-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: calc($unit * 5);

    @include bp-m {
      position: static;
      height: auto;
    }

    @include bp-s {
      padding: calc($unit * 1.5);
    }

    h1 {
      margin-top: calc($unit * 3);
      margin-bottom: $unit;
      text-align: center;
      line-height: 1;

      @include bp-s {
        margin-top: calc($unit * 4);
        margin-bottom: calc($unit * 2);
      }
    }

    &-text {
      font-size: var(--font-size-xs);
      font-weight: 700;

      @include bp-m {
        font-size: var(--font-size-xl);
      }

      @include bp-s {
        font-size: var(--font-size-xl);
      }
    }
  }
}

.photo {
  width: 10.75rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.cv {
  display: none;

  @include bp-m {
    display: inline-block;
    margin-bottom: calc($unit * 6);
  }

  @include bp-m {
    margin-bottom: calc($unit * 4);
  }
}
</style>
