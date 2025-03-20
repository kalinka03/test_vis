<template>
  <div class="footer__menu-col">
    <ul class="footer__menu-list">
      <li v-for="(item, index) in menuItems" :key="index" class="footer__menu-item">
        <router-link
            :to="item.to || '#'"
            class="nav-link"
        >
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.footer {
  &__bottom {
    background: #20202D;
    padding: 31px 0;
  }
  &__menu-list {
    list-style: none;
    padding: 0;
    .footer__menu-item:first-child {
      a {
        font-size: 20px;
        line-height: 20px;
        color: #fff;
        font-weight: 500;
        display: block;
        margin-bottom: 23px;
      }
    }
  }

  &__menu-item a {
    color: #fff;
    font-size: 16px;
    line-height: 46px;
    font-weight: 400;
  }

  &__menu {
    display: flex;
  }
}
</style>