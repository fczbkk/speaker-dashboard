<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './global.scss';
  @import 'variables';

  body {
    padding: 0;
    margin: 0;
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
