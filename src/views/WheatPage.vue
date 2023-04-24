<!-- eslint-disable no-irregular-whitespace -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
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
            Закупка и продажа пшеницы
          </template>
          <template v-slot:btn>
            Подробнее о пшенице
          </template>
        </LeftBottomBlock>
      </div>
      <transition name="anim-right-window">
        <RightWindow v-if="openMoreDetailed" @CloseWindow="openMoreDetailed = false">
          <template v-slot:header> Пшеница </template>
          <template v-slot:text>
            Предлагаем Пшеницу нового урожая, качество ГОСТ 13634-90
  Протеин- 12.5-12.6% <br>
  Влажность- 13.2% <br>
  Сорная примесь- 1.5% <br>
  Зерновая примесь- 5%<br>
  Крахмал- 76.6-78.9% (подтвеждающие документы вышлем по запросу)<br>

  Код ТН ВЭД ЕАЭС: 1005900000
  Партия: из 19 000 т. осталось 9000 тонн.
  Наличие ГМО и микотоксинов не обнаружено.
  Декларация продовольственная<br>
  <strong>​E-mal: istobnoe@avs.ru</strong><br>
  <strong>8-903-852-48-40 Ольга<br>
  ​8-906-580-27-80 Дмитрий</strong><br>

  <strong> Цена: по согласованию</strong><br>

  Самовывоз: с. Истобное, Репьевский район, Воронежская область.
  Можем отгужать до 40 машин в сутки.
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
      document.body.style.overflow = 'auto';
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
  background: url('@/img/kolosya.jpg') no-repeat center center;
  background-size: cover;
}
</style>
