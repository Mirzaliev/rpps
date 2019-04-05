<template>
  <div class="fm-whiteboard-details details">
    <div class="details__title">
      ДЕТАЛИ
    </div>
    <div class="details-wrapper">
      <div class="file-details fd">
        <!--fd = File Details-->
        <div class="fd-image-bg" style="background-image: url(https://st3.depositphotos.com/4468607/15532/v/1600/depositphotos_155321070-stock-illustration-seamless-loopable-abstract-chess-or.jpg)">
          <a class="fd-image" @click="example()" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKKzFKSFh4NcdQsAQv_DCl2FSQtbgOzRqX5psJzeix-4Y0dAQig)"></a>
        </div>
        <div class="fd-name-rename">
          <span class="fd-name-rename__title">Название файла</span>
          <!--<small class="fd-name-rename__error">Поле пустое</small>&ndash;&gt;-->
          <!--fd-name-rename__input_error-->
          <textarea class="fd-name-rename__input" name="fghfg"></textarea>
        </div>
        <div class="fd-info-list">
          <div class="fd-info-item">
            <span class="fd-info-item__title">Расширение:</span>
            <span class="fd-info-item__value">.docx</span>
          </div>
          <div class="fd-info-item">
            <span href="#" class="fd-info-item__title">Размер:</span>
            <span class="fd-info-item__value">3 КБ</span>
          </div>
          <div class="fd-info-item">
            <span class="fd-info-item__title">Путь:</span>
            <button class="fd-info-item__link">
              <i class="icon linkify"></i>
              <span>Ссылка</span>
            </button>
          </div>
        </div>
      </div>
      <div class="file-actions">
        <button class="fluid small ui button">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FMDetails",
  methods: {
    example() {
      console.log('sdfsdfd');
    }
  },
};
</script>

<style lang="sass" src="./FMDetails.sass"></style>
