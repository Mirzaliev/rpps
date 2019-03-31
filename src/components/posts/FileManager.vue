<template>
  <div class="file-manager ff">
    <div class="ff-toolbar">
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
    <div class="ff-whiteboard">
      <div class="ff-whiteboard-display display">
          <div class="display__title">
            Панель
          </div>
          <ul class="display-filters">
            <li class="display-filters__item">
              <a href="#" class="display-filters__link">
                  <i class="folder outline icon"></i>
                  Документы
              </a>
            </li>
             <li class="display-filters__item active">
              <a href="#" class="display-filters__link ">
                  <i class="file image outline icon"></i>
                  Фотграфии
              </a>
            </li>
          </ul>
      </div>
      <div class="ff-whiteboard-library library"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileManager",
  props: {
    hash: {
      type: String
    }
  }
};
</script>

<style
  lang="sass"
  src="./../../assets/sass/components/FileManager/FileManager.sass"
></style>
