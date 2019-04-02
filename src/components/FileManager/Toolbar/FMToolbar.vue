<template>
  <div class="fm-toolbar">
    <div class="fm-toolbar-actions">
      <div class="ui blue tiny buttons">
        <button class="ui button">
          <i class="upload icon"></i>
          Загрузить
        </button>
        <button class="ui button">
          <i class="folder icon"></i>
          Создать папку
        </button>
      </div>
      <button class="ui tiny icon button blue basic ml-10 mr-10">
        <i class="sync icon"></i>
      </button>

      <div class="ui tiny  buttons">
        <button class="ui blue basic button">
          <i class="arrow left icon"></i>
          Назад
        </button>
        <button class="ui red button">
          <i class="trash icon"></i>
          Удалить
        </button>
      </div>
      <div class="ui tiny blue basic icon buttons ml-10">
        <button class="ui button">
          <i class="th icon"></i>
        </button>
        <button class="ui button">
          <i class="list icon"></i>
        </button>
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
