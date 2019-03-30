<template>
  <div class="example-modal-content">
    <spinner v-if="loading" message="Подождите..." />

    <div class="ui fluid action input">
      <input type="text" placeholder="Search...">
      <div class="ui button">Search</div>
    </div>

    <div class="ui fluid action input">
      <input type="text" placeholder="Search...">
      <div @click="openFileManager()" class="ui button">Search</div>
    </div>

    <div class="ui fluid action input">
      <input type="text" placeholder="Search...">
      <div class="ui button">Search</div>
    </div>


    <a role="button" @click="success" class="example-modal-content-link green"
      >Все хорошо</a
    >
    <a role="button" @click="$emit('close')" class="example-modal-content-link grey"
      >Закрыть</a
    >
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import FileManager from "@/components/posts/FileManager.vue";

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
      this.$emit('close');
      console.log("close");
    },
    openFileManager: function () {
      this.$modal.show(
          FileManager,
          {postId: this.thisPostId},
          {
            width: "80%",
            height: "100%",
            clickToClose: false,
            scrollable: true
          }
      );
    }
  }
};
</script>

<style lang="sass" scoped>
.example-modal-content
  padding: 10px 20px
.example-modal-content-link
  display: block
  width: 100%
  padding: 20px
  text-align: center
  color: white
  background-color: #00bff3
  margin-top: 10px
  cursor: pointer
</style>
