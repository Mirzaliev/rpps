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

<style lang="sass" src="./assets/sass/components/App.sass"></style>
<!--https://antonreshetov.github.io/vue-eva-icons/-->
<!--https://medium.com/@modex13/vue-js-2-%D0%BA%D0%B0%D0%BA-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-8f029ba5a60c-->
<!--//http://preview.codecanyon.net/item/albedo-material-buttons/full_screen_preview/18060152?_ga=2.157239483.1480635742.1551689157-1698737743.1549097545
 https://blog.fullstackdigital.com/how-to-create-a-flawless-responsive-post-grid-with-flexbox-e5c7cc9d28e
 https://madewithnetwork.ams3.cdn.digitaloceanspaces.com//spatie-space-production/1292/laravel-media-manager-1.jpg
 -->