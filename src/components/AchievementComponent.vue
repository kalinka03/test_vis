<template>
  <div class="achievement">
    <div class="achievement__list">
      <div class="achievement__items">
        <div
            v-for="(item, index) in achievements"
            :key="index"
            class="achievement__item"
            :class="{ 'secondary-style': index === 1 }"
        >
          <div class="achievement__top">
            <div class="icon">
              <img :src="item.icon" :alt="item.iconAlt">
            </div>
            <p>{{ item.title }}</p>
          </div>
          <div class="achievement__picture-block">
            <div class="achievement__picture">
              <div
                  v-for="(img, imgIndex) in item.images"
                  :key="imgIndex"
                  class="achievement__img"
              >
                <img :src="img" alt="achievement">
              </div>
            </div>
            <div class="achievement__members">
              <p><span>{{ item.membersCount }}</span>{{ item.membersText }}</p>
            </div>
          </div>
          <div class="achievement__text">{{ item.description }}</div>
          <div class="achievement__join" @click="handleJoinClick(item.link)">
            <span>{{ item.actionText }}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5625 5H8.4375" stroke="#217BF4" stroke-width="1.2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M5.625 2.1875L8.4375 5L5.625 7.8125" stroke="#217BF4" stroke-width="1.2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="achievement__discover">
        <div class="subtitle">{{ discover.subtitle }}</div>
        <p>{{ discover.title }}</p>
        <div class="text">{{ discover.text }}</div>
        <button class="primary" @click="handleDiscoverClick">
          {{ discover.buttonText }}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5625 5H8.4375" stroke="#217BF4" stroke-width="1.2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M5.625 2.1875L8.4375 5L5.625 7.8125" stroke="#217BF4" stroke-width="1.2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import StarIcon from '@/assets/images/star.svg'
import TrophyIcon from '@/assets/images/Trophy.svg'
import PictureImg from '@/assets/images/picture.jpg'
import IconImg from '@/assets/images/icon.png'

export default {
  name: "AchievementComponent",

  props: {
    achievements: {
      type: Array,
      default: () => [
        {
          icon: StarIcon,
          iconAlt: 'star',
          title: '4.8 Rating',
          images: [PictureImg, PictureImg, PictureImg],
          membersCount: '+836k',
          membersText: 'Members',
          description: 'More than 2 billion people over countries use socibooks to stay in touch with friends.',
          actionText: 'Join Our Community',
          link: '#community'
        },
        {
          icon: TrophyIcon,
          iconAlt: 'Trophy',
          title: 'Awwwards',
          images: [IconImg],
          membersCount: '2021',
          membersText: 'Best of 2021 on Github',
          description: 'More than 2 billion people over countries use socibooks to stay in touch with friends.',
          actionText: 'Go To Awards',
          link: '#awards'
        }
      ]
    },
    discover: {
      type: Object,
      default: () => ({
        subtitle: 'Our Achievement',
        title: 'We are Connecting You The Digital Life.',
        text: 'The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.',
        buttonText: 'Discover me'
      })
    }
  },

  methods: {
    handleJoinClick(link) {
      this.$router.push(link)
    },
    handleDiscoverClick() {
      this.$emit('discover-clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #217BF4;
$text-color: #0A093D;
$secondary-text: #656464;

.achievement {
  background: #fff;
  padding: 126px 0 118px;

  &__list {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }

  &__items {
    display: flex;
    gap: 21px;
  }

  &__item {
    padding: 29px 18px 18px 44px;
    border-radius: 14px;
    background: #fff;
    max-width: 336px;
    border: 1px solid linear-gradient(rgba(184,184,184,0.4399999976158142), rgba(93,93,93,0.5799999833106995));
    border: 14px;
    box-shadow: 0px 43px 80px rgba(0.6878038048744202, 0.6878038048744202, 0.6878038048744202, 0.20000000298023224);

    &.secondary-style {
      .achievement__join {
        span {
          color: #4A4A56;
        }

        svg path {
          stroke: #4A4A56;
        }
      }
    }
  }

  &__discover {
    width: 381px;

    .subtitle {
      color: $primary-color;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    p {
      color: $text-color;
      font-size: 36px;
      line-height: 48px;
      font-weight: 700;
      margin-bottom: 18px;
    }

    .text {
      color: $secondary-text;
      font-size: 16px;
      line-height: 28px;
    }

    button {
      margin-top: 38px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0px 26px 49px #92a5b724;

      svg path {
        stroke: #fff;
      }
    }
  }

  &__top {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 27px;

    p {
      color: $text-color;
      font-size: 20px;
    }
  }

  &__picture {
    display: flex;
  }

  &__picture-block {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 40px;
  }

  &__text {
    color: #8C8C8C;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 40px;
  }

  &__join {
    display: flex;
    align-items: center;
    color: $primary-color;
    font-size: 16px;
    font-weight: 500;
    gap: 11px;
    cursor: pointer;

    svg {
      width: 10px;
      height: 10px;
    }
  }

  &__img {
    border: 1px solid #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;

    &:not(:first-child) {
      margin-left: -5px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 1px;
    }
  }

  &__members {
    p {
      font-size: 16px;
      line-height: 18px;
      color: #5D5B70;

      span {
        color: $primary-color;
        font-weight: 600;
        margin-right: 5px;
      }
    }
  }
}
</style>