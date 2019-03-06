<template>
  <div class="home">
    <spinner v-if="loading" message="Подождите..." />
    <div v-if="!loading" class="posts">
      <post-item v-for="post in posts" :key="post.id" :post="post"></post-item>
    </div>
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import PostItem from "@/components/posts/PostItem.vue";
import ViewCommentsModal from "@/components/posts/ViewCommentsModal";

export default {
  name: "home",
  components: {
    Spinner,
    PostItem,
    ViewCommentsModal
  },
  data: function() {
    return {
      posts: null,
      loading: true
    };
  },
  created: function() {
    this.$http
      .get("http://www.somaku.com/posts")
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style lang="sass">
.posts
  background-color: #e7e7e7
  padding: em(30) em(40)
</style>
