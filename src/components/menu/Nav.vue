<template>
  <nav class="header-nav">
    <div class="header-nav-item">
      <a href="#" class="header-nav-item__link">Длинное название</a>
    </div>
    <div class="header-nav-item">
      <a href="#" class="header-nav-item__link">Топ 100</a>
    </div>
    <div class="header-nav-item">
      <div
        class="dropdown"
        @mouseover="showDropdown"
        @mouseleave="hideDropdown"
      >
        <a class="header-nav-item__link dropdown_link">
          <span class="title">Классификаторы</span>
        </a>
        <ul class="dropdown-list">
          <li class="dropdown-list-item">
            <a href="#" class="dropdown-list-item__link">Ссылка 1</a>
          </li>
          <li class="dropdown-list-item">
            <a href="#" class="dropdown-list-item__link">Ссылка 2</a>
          </li>
          <li class="dropdown-list-item">
            <a href="#" class="dropdown-list-item__link">Ссылка 3 Длинная</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-nav-item">
      <div
        class="dropdown"
        @mouseover="showDropdown"
        @mouseleave="hideDropdown"
      >
        <a class="header-nav-item__link dropdown_link">
          <span class="title">Кафедры</span>
        </a>
        <ul class="dropdown-list">
          <li class="dropdown-list-item">
            <a href="#" class="dropdown-list-item__link">Ссылка 2-1</a>
          </li>
          <li class="dropdown-list-item">
            <a href="#" class="dropdown-list-item__link">Ссылка 2-2</a>
          </li>
          <li class="dropdown-list-item">
            <a href="#" class="dropdown-list-item__link">Ссылка 2-3 Длинная</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    showDropdown(event) {
      let dropdownList = event.currentTarget.getElementsByClassName(
        "dropdown-list"
      );
      dropdownList[0].classList.add("dropdown-list_active");
    },
    hideDropdown(event) {
      let dropdownList = event.currentTarget.getElementsByClassName(
        "dropdown-list"
      );
      dropdownList[0].classList.remove("dropdown-list_active");
    }
  }
};
</script>

<style lang="sass">
.header
  &-nav
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    color: black
    &-item
      position: relative
      margin-left: em(20)
      &:first-child
        margin-left: 0
      &__link
        padding: 10px 0
        font-size: em(14)
        font-weight: 600
        line-height: 1.4
        transition: color ease .5s
        &:hover
          color: $linkHover
    .dropdown
      cursor: pointer
      &_link
        display: flex
        align-items: center
        .eva-hover
          width: 18px
          height: 18px
        &:hover
          color: black
      .dropdown-list
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        box-sizing: border-box
        position: absolute
        top: 100%
        left: 50%
        transform: translateX(-50%)
        pointer-events: none
        z-index: 1000
        background-color: #ccc
        padding: em(15)
        border-radius: 6px
        white-space: nowrap
        margin: 0
        opacity: 0
        &-item
          padding: em(5) 0
          &__link
            font-size: em(14)
            font-weight: 600
            color: black
            &:hover
              color: $linkHover
        &_active
          opacity: 1
          transition: opacity .7s ease
          pointer-events: all
</style>
