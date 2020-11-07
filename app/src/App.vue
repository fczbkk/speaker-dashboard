<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './global.scss';
  @import 'variables';

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
