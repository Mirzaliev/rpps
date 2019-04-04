<template>
  <div class="fm-toolbar">
    <div class="fm-toolbar-buttons">
      <div class="file-actions">
        <button class="ui mini __blue button">
          <i class="upload icon"></i>
          Загрузить
        </button>
        <button class="ui mini __blue button">
          <i class="folder icon"></i>
          Новая папка
        </button>

        <button class="ui mini __red button">
          <i class="trash icon"></i>
          Удалить
        </button>

        <div class="ui mini __blue icon buttons">
          <button class="ui button"><i class="file icon"></i></button>
          <button class="ui button"><i class="save icon"></i></button>
          <button class="ui button"><i class="upload icon"></i></button>
          <button class="ui button active"><i class="download icon"></i></button>
        </div>
      </div>
      <div class="modal-actions">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FMToolbar"
  };
</script>

<style lang="sass" src="./FMToolbar.sass"></style>
