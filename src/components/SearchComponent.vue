<template>
  <div class="search-block">
    <div class="search-block__center">
      <div class="search-block__title">
        <h2>Search through more than 11 million social media profiles</h2>
      </div>
      <div class="search-block__subtitle">
        <p>Heepsy’s search filters help you find exactly what you’re looking for, and our influencer reports provide you
          with the metrics</p>
      </div>
      <div class="search-block__list">
        <search-number :number="2260" text="Satisfied Brands"/>
        <search-number :number="1324" text="Satisfied Clients"/>
        <search-number :number="3453" text="Sponsored"/>
        <search-number :number="9786" text="Completed"/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchNumber from "@/components/search/SearchNumber.vue";

export default {
  name: "SearchComponents",
  components: { SearchNumber }
}
</script>

<style lang="scss" scoped>
.search-block {
  background: #231A36;
  padding-top: 122px;

  &__title  h2{
    font-size: 40px;
    line-height: 50px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    max-width: 740px;
    margin: 0 auto 18px;
  }

  &__subtitle {
    max-width: 740px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    text-align: center;
    color: #7B9292;
  }

  &__center {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 120px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 140px;
    max-width: 855px;
    margin: 112px auto 0;
  }
}
</style>