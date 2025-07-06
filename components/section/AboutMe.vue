<template>
  <section>
    <div
      class="aboutme noise desktop"
      id="aboutme"
    >
      <div class="aboutme-column">
        <div class="aboutme-block">
          <h2>Personal Introduction</h2>
          <Introduction />
        </div>
        <div class="aboutme-block">
          <h2>Education</h2>
          <Education />
        </div>
      </div>
      <div class="aboutme-column center-column">
        <div class="aboutme-block">
          <h2>Skills</h2>
          <Skills />
        </div>
      </div>
      <div class="aboutme-column">
        <div class="aboutme-block">
          <h2>What I do</h2>
          <Responsibilities />
        </div>
      </div>
    </div>
    <div
      class="aboutme noise tablet"
      id="aboutme"
    >
      <div class="aboutme-column">
        <div class="aboutme-block">
          <h2>Skills</h2>
          <Skills />
        </div>
      </div>
      <div class="aboutme-column right-column">
        <div class="aboutme-block">
          <h2>Who am I</h2>
          <Introduction />
        </div>
        <div class="aboutme-block">
          <h2>Education</h2>
          <Education />
        </div>
        <div class="aboutme-block">
          <h2>What I do</h2>
          <Responsibilities />
        </div>
      </div>
    </div>
    <div
      class="aboutme noise mobile"
      id="aboutme"
    >
      <div class="aboutme-column">
        <div class="aboutme-block">
          <h2>Who am I</h2>
          <Introduction />
        </div>
      </div>
      <div class="aboutme-column center-column">
        <div class="aboutme-block">
          <h2>Education</h2>
          <Education />
        </div>
      </div>
      <div class="aboutme-column">
        <div class="aboutme-block">
          <h2>Skills</h2>
          <Skills />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  z-index: 3;
}

.aboutme {
  background: var(--gradient-violet-1);
  border-radius: calc($block-radius - 2px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: grid;
  grid-template-columns: 10fr 9fr 10fr;
  gap: calc($unit * 3);
  padding: calc($unit * 10);
  padding-top: calc($unit * 10 + $block-radius);

  @include bp-l {
    grid-template-columns: 1fr 2fr;
  }

  @include bp-m {
    padding: calc($unit * 5);
    padding-top: calc($unit * 5 + $block-radius);
  }

  @include bp-s {
    flex-direction: column;
    padding: calc($unit * 1.5);
    padding-top: calc($unit * 4 + $block-radius);
    padding-bottom: calc($unit * 4);
  }

  &-column {
    display: flex;
    flex-direction: column;
    gap: calc($unit * 2);
  }

  &-block {
    display: flex;
    flex-direction: column;
    gap: $unit;
  }
}

.center-column {
  padding: 0 calc($unit * 3);
  border: 2px solid var(--color-white);
  border-top: none;
  border-bottom: none;

  @include bp-s {
    padding: calc($unit * 2) 0;
    border: 2px solid var(--color-white);
    border-left: none;
    border-right: none;
  }
}

.right-column {
  padding-left: calc($unit * 3);
  border-left: 2px solid var(--color-white);
}

.desktop {
  @include bp-l {
    display: none;
  }
}

.tablet {
  display: none;

  @include bp-l {
    display: grid;
  }

  @include bp-s {
    display: none;
  }
}

.mobile {
  display: none;

  @include bp-s {
    display: flex;
  }
}
</style>
