<template>
  <div class="fm-toolbar">
    <div class="fm-toolbar-buttons">
      <div class="file-actions">
        <button @click="show('success')" class="ui mini __blue button">
          <i class="upload icon"></i>
          Загрузить
        </button>
        <button @click="show('warn')" class="ui mini __blue button">
          <i class="folder icon"></i>
          Новая папка
        </button>

        <button @click="show('error')" class="ui mini __red button">
          <i class="trash icon"></i>
          Удалить
        </button>

        <div class="ui mini __blue icon buttons">
          <button class="ui button"><i class="file icon"></i></button>
          <button class="ui button"><i class="save icon"></i></button>
          <button class="ui button"><i class="upload icon"></i></button>
          <button class="ui button active">
            <i class="download icon"></i>
          </button>
        </div>
      </div>
      <div class="modal-actions"></div>
    </div>
    <div class="fm-toolbar-notify">
      <progress-bar
        class="fm-toolbar-notify-bar"
        size="medium"
        bar-color="#76ff03"
        val="60"
        text="60%"
        title="60%"
      ></progress-bar>
      <notifications
        width="100%"
        max="1"
        class="fm-toolbar-notify_custom"
        position="left"
        group="fm-notify"
      ></notifications>
    </div>
  </div>
</template>

<script>
import ProgressBar from "vue-simple-progress";

export default {
  name: "FMToolbar",
  components: {
    ProgressBar
  },
  methods: {
    show(type) {
      this.$notify({
        group: "fm-notify",
        type: type,
        title: "Important message",
        text: "Hello user! This is a notification!",
        duration: 600000
      });
    }
  }
};
</script>

<style lang="sass" src="./FMToolbar.sass"></style>
