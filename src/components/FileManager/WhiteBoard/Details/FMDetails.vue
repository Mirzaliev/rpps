<template>
  <div class="fm-whiteboard-details">
    <div v-show="false" class="details">
      <div class="details__title">
        ДЕТАЛИ
      </div>
      <div class="details-wrapper">
        <div class="file-details fd">
          <!--fd = File Details-->
          <div
            class="fd-image-bg"
            style="background-image: url(https://st3.depositphotos.com/4468607/15532/v/1600/depositphotos_155321070-stock-illustration-seamless-loopable-abstract-chess-or.jpg)"
          >
            <div
              class="fd-image"
              @click="example()"
              style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKKzFKSFh4NcdQsAQv_DCl2FSQtbgOzRqX5psJzeix-4Y0dAQig)"
            ></div>
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
              <a class="fd-info-item__value fd-info-item__value_link">
                <i class="download icon"></i>
                <span>Ссылка</span>
              </a>
            </div>
            <div class="fd-info-item">
              <span class="fd-info-item__title">Путь:</span>
              <a class="fd-info-item__value fd-info-item__value_link">
                https://www.youtube.com/watch?v=K4lmen7XlTc&list=RDK4lmen7XlTc&start_radio=1
              </a>
            </div>
          </div>
        </div>
        <div class="file-actions">
          <button class="fluid small ui button mb-10">Сохранить</button>
        </div>
      </div>
    </div>
    <div class="create-folder">
      <div class="create-folder__title">
        СОЗДАНИЕ НОВОЙ ПАПКИ
      </div>
      <div class="create-folder-input">
        <span class="input__name">Название папки</span>
        <!--<small class="input__error">Поле пустое</small>&ndash;&gt;-->
        <!--input__textarea_error-->
        <textarea class="input__textarea" rows="5"></textarea>
      </div>
      <div class="create-folder-actions">
        <button class="fluid mini positive ui button">Создать</button>
        <button class="fluid mini ui button">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FMDetails",
  methods: {
    example() {
      console.log("sdfsdfd");
    }
  }
};
</script>

<style lang="sass" src="./FMDetails.sass"></style>
