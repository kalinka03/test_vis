<template>
  <div class="main">
    <div class="main__content">
      <div class="main__text">
        <button class="btn">Netbook community</button>
        <h1>Your Solutions For Community!</h1>
        <p>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
        <div class="buttons">
          <button class="primary">About More</button>
          <button class="primary-full">Invite Friend</button>
        </div>
      </div>
      <div class="main__picture">
        <picture>
          <img src="@/assets/images/picture.png" alt="Picture">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainComponent"
}
</script>

<style lang="scss" scoped>
.main {
  padding-bottom: 78px;
  background: linear-gradient(-135deg, rgb(255, 255, 255), rgb(212, 231, 254));
  padding-top: 160px;
  @media (max-width: 1440px) {
    padding: 160px 20px;
  }

  &__content {
    display: flex;
    gap: 75px;
    max-width: 1172px;
    margin: 0 auto;
  }

  &__picture {
    width: 590px;

    img {
      max-width: 100%;
    }
  }

  &__text {
    width: 515px;
    margin-top: 55px;

    h1 {
      color: #0A093D;
      font-size: 56px;
      line-height: 66px;
      font-weight: 700;
      margin: 20px 0 18px 0;
      @media (max-width: 1440px) {
        font-size: 52px;

      }
    }

    p {
      color: #656464;
      font-size: 18px;
      line-height: 28px;
      font-weight: 400;
    }
  }
}

.buttons {
  margin-top: 42px;
  display: flex;
  gap: 18px;
}

</style>