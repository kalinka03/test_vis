<template>
  <div class="home-page">
    <main-component/>
    <form-component/>
    <search-components/>
    <achievement-component/>
  </div>
</template>

<script>
import MainComponent from "@/components/MainComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import SearchComponents from "@/components/SearchComponent.vue";
import AchievementComponent from "@/components/AchievementComponent.vue";

export default {
  name: 'HomeView',
  components: {
    AchievementComponent,
    SearchComponents,
    FormComponent,
    MainComponent
  },
}

</script>

<style lang="scss" scoped>

</style>
