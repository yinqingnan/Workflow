<!--
 * @Descripttion: 
 * @Autor: yqn
 * @Date: 2021-07-20 17:50:57
 * @LastEditTime: 2021-07-21 09:30:05
 * @FilePath: \src\App.vue
 * @LastEditors: yqn
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
