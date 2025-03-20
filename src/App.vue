<template>
  <div>
    <header-component/>
    <main>
      <router-view></router-view>
    </main>
<footer-component/>
  </div>
</template>


<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";

export default {
  components: {FooterComponent, HeaderComponent}

}
</script>

<style lang="scss">

body {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  max-width: 1920px;
  margin: 0 auto;

}

.auth-block__info {
  display: flex;
  justify-content: center;
}

.user {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  img {
    width: 30px;
    height: 30px;
  }
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

#app {
  font-family: Intel, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
