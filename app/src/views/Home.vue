<template>
  <div>
    <h1>This is main headline</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a>ullamco laboris nisi</a> ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div>
      <button class="actionPrimary">Primary action</button>
      <button class="actionSecondary">Secondary action</button>
    </div>


    <div class="colorSample colorPrimary"></div>
    <div class="colorSample colorSecondary"></div>
    <div class="colorSample colorTernary"></div>
    <div class="colorSample colorLight"></div>
    <div class="colorSample colorMedium"></div>
    <div class="colorSample colorDark"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss">
  @import '../variables';

  .colorPrimary {
    background: $colorPrimary;
  }

  .colorSecondary {
    background: $colorSecondary;
  }

  .colorTernary {
    background: $colorTernary;
  }

  .colorLight {
    background: $colorLight;
  }

  .colorMedium {
    background: $colorMedium;
  }

  .colorDark {
    background: $colorDark;
  }

  .colorSample {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
</style>
