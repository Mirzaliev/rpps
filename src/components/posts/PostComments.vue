<template>
  <div>
    <a
      href="#"
      class="post-content-link"
      @click="$modal.show('example-adaptive', { postId: thisPostId })"
    >
    </a>
    <a href="#" class="post-content-link" @click="openDynamic">
      <i class="users icon"></i>
    </a>
  </div>
</template>

<script>
import MyComponent from "@/components/posts/ViewCommentsModal.vue";

export default {
  name: "PostComments",
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      thisPostId: this.postId
    };
  },
  methods: {
    openDynamic() {
      this.$modal.show(
        MyComponent,
        { postId: this.thisPostId },
        {
          width: "80%",
          height: "auto",
          clickToClose: false,
          scrollable: true
        }
      );
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>
