<template>
  <div class="footer__top-subscribe">
    <div class="title">Subscribe Cirkle Newsletter</div>
    <div class="subtitle">
      Subscribe to be the first one to know about updates. Enter your email
    </div>
    <form class="footer__form" @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email Address" v-model="email">
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FooterSubscribe',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleSubmit() {
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  &__top-subscribe {
    .title {
      color: #fff;
      font-size: 20px;
      line-height: 32px;
      padding-right: 110px;
      margin-bottom: 14px;
      font-weight: 500;
    }

    .subtitle {
      color: #fff;
      font-size: 18px;
      line-height: 28px;
      font-weight: 400;
    }
  }

  &__form {
    width: 339px;
    height: 48px;
    border: 1px solid #fff;
    border-radius: 12px;
    position: relative;
    margin-top: 32px;

    input {
      background: inherit;
      border-radius: 0;
      border: 0;
      padding: 16px 24px;
      color: #fff;

      &::placeholder {
        color: #717179;
        font-size: 14px;
        line-height: 12px;
      }
    }

    button {
      width: 126px;
      height: 50px;
      background: #fff;
      border-radius: 12px;
      color: #2B2B39;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      line-height: 16px;
      position: absolute;
      top: -2px;
      right: -1px;
      transition: 0.5s;

      &:hover {
        cursor: pointer;
        background: #217BF4;
        border-color: #217BF4;
        color: #fff;
      }
    }
  }
}

</style>
