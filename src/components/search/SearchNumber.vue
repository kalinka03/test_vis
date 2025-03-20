<template>
  <div class="search-block__item">
    <div class="number">
      {{ number }}
    </div>
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchNumber",
  props: {
    number: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search-block__item{
  .number{
    color: #fff;
    font-size: 40px;
    line-height: 40px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .text{
    color: #7B9292;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
  }
}
</style>