<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
        <section id="hero-section">
          <div class="backgraund-intro">

            <div class="intro">
              <div class="video">
                <video class="video__media video__desc" src="@/assets/img/video.mp4"
                 autoplay muted loop></video>
                <div class="video__media img-media-main"></div>
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
               Компания имеет прямые контакты с производителями сельхозпродукции в ключевых аграрных
          регионах России</template>
        <template v-slot:btn>
          Подробнее о компании
        </template>
        </LeftBottomBlock>
    </div>
    <transition name="anim-right-window">
      <RightWindow v-if="openMoreDetailed" @CloseWindow="openMoreDetailed = false">
        <template v-slot:header> О компании </template>
        <template v-slot:text>
          Компания имеет прямые контакты с производителями сельхозпродукции в ключевых аграрных
          регионах России. «АгроЮГ» активно сотрудничает с агрохолдингами и сельхозпроизводителями в
          части предоставления им финансовых инструментов, создания глобальных рамочных программ
          развития торгового и логистического партнерства в регионах. Главная ценность «АгроЮГ» -
          это наши партнеры на внутреннем рынке и покупатели за рубежом. Залогом успеха для нас
          являются долговременные деловые отношения и высокое качество поставляемой продукции.
          Профессионально организованная поставка, использование разных видов транспорта
          (автомобильного и железнодорожного). Наработаны собственные логистические схемы.
          Неизменное следование договорным обязательствам, точное соблюдение сроков оплаты.
          Сопровождение сделки на всех этапах. Постоянная консультационная и информационная
          поддержка. Конкурентные цены, готовность к диалогу. Гибкие условия поставок зерна.
        </template>
        <template v-slot:middle-text>
          Компания имеет прямые контакты с производителями сельхозпродукции в ключевых аграрных
          регионах России. «АгроЮГ» активно сотрудничает с агрохолдингами и сельхозпроизводителями в
          части предоставления им финансовых инструментов, создания глобальных рамочных программ
          развития торгового и логистического партнерства в регионах. Главная ценность «АгроЮГ» -
          это наши партнеры на внутреннем рынке и покупатели за рубежом. Залогом успеха для нас
          являются долговременные деловые отношения и высокое качество поставляемой продукции.
          Профессионально организованная поставка, использование разных видов транспорта
          (автомобильного и железнодорожного). Наработаны собственные логистические схемы.
          Неизменное следование договорным обязательствам, точное соблюдение сроков оплаты.
          Сопровождение сделки на всех этапах. Постоянная консультационная и информационная
          поддержка. Конкурентные цены, готовность к диалогу. Гибкие условия поставок зерна.
          Компания имеет прямые контакты с производителями сельхозпродукции в ключевых аграрных
          регионах России. «АгроЮГ» активно сотрудничает с агрохолдингами и сельхозпроизводителями в
          части предоставления им финансовых инструментов, создания глобальных рамочных программ
          развития торгового и логистического партнерства в регионах. Главная ценность «АгроЮГ» -
          это наши партнеры на внутреннем рынке и покупатели за рубежом. Залогом успеха для нас
          являются долговременные деловые отношения и высокое качество поставляемой продукции.
          Профессионально организованная поставка, использование разных видов транспорта
          (автомобильного и железнодорожного). Наработаны собственные логистические схемы.
          Неизменное следование договорным обязательствам, точное соблюдение сроков оплаты.
          Сопровождение сделки на всех этапах. Постоянная консультационная и информационная
          поддержка. Конкурентные цены, готовность к диалогу. Гибкие условия поставок зерна.
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
  methods: {

  },
  mounted() {
    this.$store.commit('loadingMut');
    setTimeout(() => {
      document.querySelector('.animated').style.transform = 'scale(2)';
    }, (1600));
    setTimeout(() => {
      document.querySelector('.intro').style.left = '0px';
    }, (200));

    setTimeout(() => {
      document.querySelector('.animated').style.opacity = '1';
    }, (2000));
    setTimeout(() => {
      document.querySelectorAll('.line-anim-item')[0].style.width = '50px';
      document.querySelectorAll('.line-anim-item')[1].style.width = '50px';
      const mediaQuery = window.matchMedia('(max-width: 576px)');
      if (mediaQuery.matches) {
        document.querySelectorAll('.line-anim-item')[0].style.width = '15px';
        document.querySelectorAll('.line-anim-item')[1].style.width = '15px';
      }
    }, (2500));
  },
  beforeUnmount() {
    this.$store.commit('loadingMut');
  },
};
</script>
<style>

.intro {
    max-height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    position: relative;

    background-size: cover;
    transition: left 1.6s ease-in-out;
    left: 100vw;
}

.intro:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;

    background: linear-gradient(to bottom, rgba(0,0,30,0.7) 0%,
    rgba(0,0,30,0.45) 15%,rgba(0,0,30,0.5) 85%,rgba(0,0,30,0.75) 100%);

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}

.intro__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 3;
    height: 100vh;
    width: 100vw;

}

.backgraund-intro {
    position: relative;
    background-color: #3d484b;
    /* top: -120px; */

}

.line-animated-all {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0vh;
    top: 22px;
}

.line-anim-item {
    width: 2px;
    height: 2px;
    z-index: 30;
    background-color: white;
    position: relative;

    transition: width 1.5s ease-in-out;
}

.animated {
    position: absolute;
    display: inline;
    transition: all 1.5s;
    transform: scale(0);
    opacity: 0;
    width: 50vw;
    max-width: 580px;
    height: 100px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    top: 20vh;
}

.header-intro {
    letter-spacing: 10px;
    font-weight: 300;
    position: relative;

    padding: 2px 2px 2px 10px;
}

.intro__title {
    margin: 0;

    font-size: 45px;
    color: #fff;
    text-align: center;
}
.shadow-intro {
    position: absolute;
    top: 0px;
    width: 9px;
    left: 160vw;
    height: 80vh;
    z-index: 20;
    transition: left 1.5s;
    background-color: rgba(255, 0, 0, 0);
    box-shadow: 140px 0px 80px 40px rgba(255, 255, 255, 0.253);
}
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

}

.video {
    position: relative;
    z-index: 1;
    padding-bottom: 56.25%;

}

.video__media {
    min-width: 100%;
    min-height: 100vh;
    top: 0px;
    position: absolute;

    left: 0;
}
/* animation */
.anim-right-window-enter-from{
transform: translateX(700px);
opacity: 0;
}
.anim-right-window-enter-active{
  transition: all 1s cubic-bezier(0.525, 0.900, 0.490, 0.960);
}
.anim-right-window-enter-to{
  transform: translateX(0vw);
  opacity: 1;
}
.anim-right-window-leave-from{
  transform: translateX(0vw);
  opacity: 1;
}
.anim-right-window-leave-active{
  transition: all 1s cubic-bezier(0.525, 0.900, 0.490, 0.960);
}
.anim-right-window-leave-to{
  transform: translateX(700px);
  opacity: 0;
}
/* media */
.img-media-main
{
  display: none;
}
@media (max-width: 512px) {
  .video__desc
  {
    display: none;
  }
  .img-media-main
{
  display: block;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/kombayn.jpg') no-repeat center center;
  background-size: cover;
}

}
</style>
