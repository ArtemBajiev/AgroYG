<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
    <section id="hero-section">
      <div class="backgraund-intro">
        <div class="intro">
          <div class="video">
            <div class="video__media img-media"></div>
          </div>

          <div class="intro__content">
            <div class="animated">
              <div class="logo-anim">
                <h1 class="header-intro" @click="$store.commit('loadingMut')">АГРОЮГ</h1>
                <div class="line-animated-all">
                  <div class="line-anim-item"></div>
                  <div class="line-anim-item"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-intro"></div>
        </div>
        <LeftBottomBlock @ClickBtn="openMoreDetailed = true">
          <template v-slot:header>
            Контактные данные
          </template>
          <template v-slot:btn>
            Все контакты
          </template>
        </LeftBottomBlock>
      </div>
      <transition name="anim-right-window">
        <RightWindow v-if="openMoreDetailed" @CloseWindow="openMoreDetailed = false">
          <template v-slot:header> Контакты </template>
          <template v-slot:text>
           Кукуруза - <a class="right-window__link" href="tel:89282731712">8(9282731712)</a>
           <br>
           <br>
           Пшеница - <a class="right-window__link" href="tel:89282731712">8(9282731713)</a>
           <br>
           <br>
           По другим вопросам обращаться по номеру - <a class="right-window__link" href="tel:89282731712">8(9282731713)</a>
          </template>
          <template v-slot:middle-text>

            </template>
        </RightWindow>
      </transition>
    </section>
  </template>
<script>
import LeftBottomBlock from '@/components/LeftBottomBlock.vue';
import RightWindow from '@/components/RightWindow.vue';

export default {
  components: { LeftBottomBlock, RightWindow },
  data() {
    return {
      openMoreDetailed: false,
    };
  },
  methods: {},
  mounted() {
    this.$store.commit('loadingMut');
    setTimeout(() => {
      document.querySelector('.animated').style.transform = 'scale(2)';
    }, 1600);
    setTimeout(() => {
      document.querySelector('.intro').style.left = '0px';
    }, 200);

    setTimeout(() => {
      document.querySelector('.animated').style.opacity = '1';
    }, 2000);
    setTimeout(() => {
      document.querySelectorAll('.line-anim-item')[0].style.width = '50px';
      document.querySelectorAll('.line-anim-item')[1].style.width = '50px';
      const mediaQuery = window.matchMedia('(max-width: 576px)');
      if (mediaQuery.matches) {
        document.querySelectorAll('.line-anim-item')[0].style.width = '15px';
        document.querySelectorAll('.line-anim-item')[1].style.width = '15px';
      }
    }, 2500);
  },
  beforeUnmount() {
    this.$store.commit('loadingMut');
  },
};
</script>
<style scoped>
.img-media
{
  width: 100%;
  height: 100%;
  background: url('@/assets/img/support.jpg') no-repeat center center;
  background-size: cover;
}
</style>
