<template>
  <div id="app">
    <header class="header">
      <div class="header-logo">
        <a class="header-logo__siteName" href="/">Рейтинг ППС</a>
      </div>
      <nav class="header-nav">
        <router-link to="/" class="header-nav__link">Home</router-link> |
        <router-link to="/about" class="header-nav__link">About</router-link>
      </nav>
      <div class="header-user">
        <a href="" class="header-user__logout">Вход</a>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="sass">
.header
  display: flex
  justify-content: space-between
  background: cornsilk
  padding: 10px
</style>
