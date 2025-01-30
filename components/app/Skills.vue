<template>
  <div class="skills">
    <div>
      <b>UX/UI Design:</b>
      <ul>
        <li>User research</li>
        <li>Wireframing and Prototyping</li>
        <li>Interaction design</li>
        <li>Usability testing</li>
      </ul>
    </div>
    <div>
      <b>Tools:</b>
      <ul>
        <li>Figma</li>
        <li>Tilda</li>
      </ul>
    </div>
    <div class="skills-soft">
      <b>Soft Skills:</b>
      <ul>
        <li>Problem-solving</li>
        <li>Empathy</li>
        <li>Collaboration</li>
        <li>Attention to detail</li>
        <li>Time management</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: column;
  gap: $unit;

  @include bp-s {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &-soft {
    @include bp-xs {
      display: none;
    }
  }
}
</style>
