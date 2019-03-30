<template>
  <div class="header-user">
    <a
      v-show="!auth"
      href=""
      class="button button_radius_40 button_withborder_blue"
    >
      Вход
    </a>
    <a
      v-show="auth"
      href="#"
      class="header-user-auth"
      :class="{ showDropdown: isDropdownActive }"
      @mouseover="isDropdownActive = true"
      @mouseleave="isDropdownActive = false"
    >
      <span class="name">Валерия</span>
      <div
        class="avatar"
        style="background-image: url(https://consequenceofsound.files.wordpress.com/2018/10/screen-shot-2018-10-30-at-11-56-46-am.png)"
      ></div>
      <ul class="dropdown-list" :class="{ showDropdown: isDropdownActive }">
        <li class="dropdown-list-item">
          <a href="#" class="dropdown-list-item__link">Мой аккаунт</a>
        </li>
        <li class="dropdown-list-item">
          <a href="#" class="dropdown-list-item__link">Мои анкеты</a>
        </li>
        <li class="dropdown-list-item">
          <a href="#" class="dropdown-list-item__link">Факультет</a>
        </li>
      </ul>
    </a>
  </div>
</template>
<script>
export default {
  name: "UserActions",
  data: function() {
    return {
      auth: true,
      isDropdownActive: false
    };
  },
  methods: {}
};
</script>
<style lang="sass">
.header
    &-user
        padding: 0 em(10)
.header-user-auth
  display: flex
  position: relative
  justify-content: center
  align-items: center
  background-color: $blue
  border-radius: 30px
  padding: em(5) em(10) em(5) em(15)
  cursor: pointer
  transition: all .5s
  .name
    line-height: em(16)
    color: white
  .eva-hover
    width: 24px
    height: 24px
  .avatar
    width: 35px
    height: 35px
    background-color: #F43F3B
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    border-radius: 50%
  .dropdown-list
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    box-sizing: border-box
    position: absolute
    min-width: 100%
    top: 100%
    right: 0
    pointer-events: none
    z-index: 1000
    background-color: $blue
    padding: em(15)
    white-space: nowrap
    margin: 0
    opacity: 0
    &-item
      padding: em(5) 0
      &__link
        font-size: em(14)
        font-weight: 600
        color: white
        &:hover
          color: #F43F3B
    &.showDropdown
      opacity: 1
      transition: opacity .7s
      pointer-events: all

  &.showDropdown
    border-radius: 0
</style>
