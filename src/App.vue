<template>
  <div id="app">
    <header class="header">
      <div class="header-logo">
        <a class="header-logo__siteName" href="/">Рейтинг ППС</a>
      </div>
      <nav class="header-nav">
        <div class="header-nav-item">
          <a href="#" class="header-nav-item__link">Длинное название</a>
        </div>
        <div class="header-nav-item">
          <a href="#" class="header-nav-item__link">Топ 100</a>
        </div>
        <div class="header-nav-item">
          <div class="dropdown-wrapper">
            <a class="dropdown-wrapper__title">
              <span class="title">Классификаторы</span>
              <eva-icon name="arrow-down" width="18" height="18" fill="#ccc"></eva-icon>
            </a>
            <ul class="nav-dropdown">
              <li class="nav-dropdown-item"><a href="#" class="nav-dropdown-item__link">Ссылка 1</a></li>
              <li class="nav-dropdown-item"><a href="#" class="nav-dropdown-item__link">Ссылка 2</a></li>
              <li class="nav-dropdown-item"><a href="#" class="nav-dropdown-item__link">Ссылка 3 Длинная</a></li>
            </ul>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="dropdown-wrapper">
            <a class="dropdown-wrapper__title">
              <span class="title">Кафедры</span>
              <eva-icon name="chevron-down" width="18" height="18" fill="#ccc"></eva-icon>
            </a>
            <!--<ul>-->
            <!--<li><a href="#">Ссылка 1</a></li>-->
            <!--<li><a href="#">Ссылка 2</a></li>-->
            <!--<li><a href="#">Ссылка 3 Длинная</a></li>-->
            <!--</ul>-->
          </div>
        </div>
        <!--<router-link to="/" class="header-nav__link">Home</router-link> |-->
        <!--<router-link to="/about" class="header-nav__link">About</router-link>-->
      </nav>
      <div class="header-user">
        <a href="" class="button button_radius_40 button_withborder_blue">
          Вход
        </a>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="sass">
.header
  display: flex
  justify-content: space-between
  padding: 15px 50px
  border-bottom: 1px solid #eaecef
  align-items: center
  &-logo
    padding: 0 10px
    &__siteName
      white-space: nowrap
      font-weight: 600
      font-size: em(25)
  &-nav
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    color: black
    &-item
      position: relative
      margin-left: em(20)
      &__link
        display: block
        font-size: em(14)
        line-height: 1.4
        transition: color ease .5s
        &:hover
          color: $linkHover
      .dropdown-wrapper
        cursor: pointer
        font-size: em(14)
        &__title
          display: flex
          align-items: center
          padding: 5px 0
          svg
            margin-top: em(3)
            margin-left: em(3)
          &:hover
            color: #F43F3B
            .nav-dropdown
              display: none!important
        .nav-dropdown
          height: auto!important
          box-sizing: border-box
          max-height: calc(100vh - 2.7rem)
          overflow-y: auto
          position: absolute
          top: 100%
          right: 0
          background-color: white
          padding: .6rem 1em
          white-space: nowrap
          margin: 0
          border-radius: 3px
          border: 1px solid #ccc
  &-user
    padding: 0 em(10)
</style>
<!--https://antonreshetov.github.io/vue-eva-icons/-->
<!--//http://preview.codecanyon.net/item/albedo-material-buttons/full_screen_preview/18060152?_ga=2.157239483.1480635742.1551689157-1698737743.1549097545-->
