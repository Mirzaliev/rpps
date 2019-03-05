<template>
  <div id="app">
    <header class="header">
      <div class="header-logo">
        <a class="header-logo__siteName" href="/">Рейтинг ППС</a>
      </div>
      <Nav></Nav>
      <UserActions></UserActions>
    </header>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/menu/Nav.vue";
import UserActions from "@/components/menu/UserActions.vue";

export default {
  name: "App",
  components: {
    Nav,
    UserActions
  },
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style lang="sass">
.header
  display: flex
  justify-content: space-between
  padding: 15px 50px
  border-bottom: 1px solid #eaecef
  align-items: center
  font-size: 16px
  &-logo
    padding: 0 10px
    &__siteName
      white-space: nowrap
      font-weight: bold
      font-size: em(25)
  &-user
    padding: 0 em(10)
</style>
<!--https://antonreshetov.github.io/vue-eva-icons/-->
<!--//http://preview.codecanyon.net/item/albedo-material-buttons/full_screen_preview/18060152?_ga=2.157239483.1480635742.1551689157-1698737743.1549097545-->
