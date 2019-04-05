<template>
  <div class="fm-whiteboard-display display">
    <div class="display__title">
      ПАНЕЛЬ
    </div>
    <div class="display-filters">
      <a href="#" class="display-filters__link">
        <i class="folder outline icon"></i>
        <span class="display-filters__title">Документы</span>
      </a>
      <a href="#" class="display-filters__link active">
        <i class="file image icon"></i>
        <span class="display-filters__title">Фотографии</span>
      </a>
      <a href="#" class="display-filters__link">
        <i class="file word icon"></i>
        <span class="display-filters__title">Word файлы</span>
      </a>
      <a href="#" class="display-filters__link">
        <i class="file excel icon"></i>
        <span class="display-filters__title">Excel файлы</span>
      </a>
      <a href="#" class="display-filters__link">
        <i class="file pdf icon"></i>
        <span class="display-filters__title">PDF файлы</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Display.vue"
};
</script>

<style lang="sass" src="./FMDisplay.sass"></style>
