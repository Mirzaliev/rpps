<template>
  <div class="fm-whiteboard-display display">
    <div class="display__title">
      Панель
    </div>
    <div class="display-filters">
      <a href="#" class="display-filters__link">
        <i class="folder outline icon"></i>
        Документы
      </a>
      <a href="#" class="display-filters__link active">
        <i class="file image outline icon"></i>
        Фотографии
      </a>
      <a href="#" class="display-filters__link">
        <i class="file word outline icon"></i>
        WORD файлы
      </a>
      <a href="#" class="display-filters__link">
        <i class="file excel outline icon"></i>
        Excel файлы
      </a>
      <a href="#" class="display-filters__link">
        <i class="file pdf outline icon"></i>
        PDF файлы
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Display.vue"
  }
</script>

<style lang="sass" src="./FMDisplay.sass"></style>
