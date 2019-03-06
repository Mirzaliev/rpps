<template>
  <div class="post">
    <div class="post__id post-content">{{ thisPost.id }}</div>
    <div class="post-user post-content">
      <a href="#" class="post-content-link">{{ thisPost.userId }}</a>
    </div>
    <div class="post-title post-content">
      <span>
        {{ thisPost.title }}
      </span>
    </div>
    <div class="post-body post-content">
      <span>{{ thisPost.body }}</span>
    </div>
    <div class="post-comments post-content">
      <post-comments :postId="thisPost.id"></post-comments>
    </div>
  </div>
</template>

<script>
import PostComments from "@/components/posts/PostComments.vue";

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    PostComments
  },
  data: function() {
    return {
      thisPost: this.post
    };
  }
};
</script>

<style lang="sass">
.posts
  .post
    display: flex
    background-color: white
    border-radius: 6px
    padding: 10px
    font-size: 16px
    margin-bottom: 10px
    &:last-child
      margin-bottom: 0
    &__id
      width: 5%
    &-user
      width: 5%
    &-title
      width: 35%
    &-body
      width: 50%
    &-comments
      width: 5%
    &-content
      display: flex
      align-items: center
      justify-content: center
      padding: 5px 15px
      border-right: 1px solid #ccc
      &:last-child
        border: none
      &-link
        color: $blue
        .eva-hover
          svg
            fill: $blue
        &:hover
          color: #F43F3B
</style>
