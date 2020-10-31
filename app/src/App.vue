<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'variables';

  * {
    font-size: $baseSize;
    line-height: $baseSize * 1.5;
  }

  body {
    background: $colorDark;
    color: $colorLight;
    font-family: helvetica, arial, sans-serif;
  }

  a {
    color: $colorTernary;
  }

  button.actionPrimary {
    background: $colorPrimary;
  }
  button.actionSecondary {
    background: $colorSecondary;
  }

</style>
