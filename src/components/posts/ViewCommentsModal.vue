<template>
  <div class="example-modal-content">
    <spinner v-if="loading" message="Подождите..." />
    <span v-if="!loading">{{ comments }}</span>

    <a role="button" @click="success" class="example-modal-content-link green"
      >Все хорошо</a
    >
    <a role="button" @click="close" class="example-modal-content-link grey"
      >Закрыть</a
    >
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";

export default {
  name: "ViewCommentsModal",
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      comments: null,
      thidId: this.postId,
      loading: true
    };
  },
  components: {
    Spinner
  },
  created() {
    this.$http
      .get(`http://www.somaku.com/posts/${this.postId}/comments`)
      .then(response => {
        this.comments = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    success: () => {
      console.log("success");
    },
    close: () => {
      console.log("close");
    }

  }
};
</script>

<style lang="sass" scoped>
.example-modal-content-link
  width: 100%
  padding: 20px
  text-align: center
  color: white
</style>
