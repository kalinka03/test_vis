<template>
  <header ref="header" :class="{ 'header': true, 'scroll': isScrolled }">
    <div class="header-container">
      <div class="header__left">
        <div class="header__logo">
          <router-link :to="{ name: 'home' }">
            <img src="@/assets/images/logo.svg" alt="Logo">
          </router-link>
        </div>
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
            </li>
            <li class="menu__item">
              <router-link :to="{ name: 'community' }" class="nav-link">
                Community
                <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.3125 1.375L3.5 4.1875L0.6875 1.375" stroke="#656464" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </router-link>
            </li>
            <li class="menu__item">
              <router-link :to="{ name: 'blog' }" class="nav-link">Blog</router-link>
            </li>
            <li class="menu__item">
              <router-link :to="{ name: 'events' }" class="nav-link">Events</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__right">
        <div class="header-actions">
          <img src="@/assets/images/glass.svg" alt="Logo">
          <input
              type="text"
              v-model="searchQuery"
              placeholder="Search here"
              class="search-input"
          >
        </div>
        <button class="login-btn primary">Login</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isScrolled: false,
      headerHeight: 0,
      searchQuery: ''
    };
  },
  mounted() {
    if (this.$refs.header) {
      this.headerHeight = this.$refs.header.offsetHeight;
    } else {
      console.error('Header ref is undefined');
      this.headerHeight = 0;
    }
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > this.headerHeight;
    },
  },
}
</script>
<style lang="scss">
.header.scroll {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.header {
  border-bottom: 1px solid rgba(33, 123, 244, 0.1);
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 22px 0 17px;

  &__right {
    gap: 42px;
    display: flex;
  }

  &__left {
    display: flex;
    gap: 72px;
    align-items: center;
  }

  &__logo {
    width: 143px;
    height: 34px;
  }
}

.menu {
  &__list {
    display: flex;
    gap: 32px;
    padding-left: 0;
    list-style: none;
  }

  &__item {
    color: #656464;
    font-weight: 500;
    font-size: 14px;
    svg{
      margin-left: 5px;
    }
  }
}

nav {
  a {
    &.router-link-exact-active {
      color: #2B2B39;
      font-weight: 600;
    }
  }
}

.login-btn {
  background: #217BF4;
  height: 50px;
  padding: 18px 44px;
  font-weight: 600;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  border: 0;
  border-radius: 14px;
}

.header-actions {
  width: 105px;
  height: 50px;
  border-bottom: 1px solid #E5E5E5;
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    left: 0;
    top: 19px;
  }

  input {
    border: 0;
    width: 105px;
    background: inherit;
    height: 32px;
    padding: 3px 5px 0 20px;
    &:focus-visible{
      outline: inherit;
    }
  }
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 15px;
}

.logo-img {
  height: 40px;
}

.navigation {
  flex-grow: 1;
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 0 1rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-link:hover {
  color: #007bff;
}

</style>