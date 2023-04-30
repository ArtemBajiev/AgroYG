<!-- eslint-disable max-len -->
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
          Предлагаем кукурузу нового урожая
        </template>
        <template v-slot:btn>
          Подробнее о кукурузе
        </template>
      </LeftBottomBlock>
    </div>
    <transition name="anim-right-window">
      <RightWindow v-if="openMoreDetailed" @CloseWindow="openMoreDetailed = false">
        <template v-slot:header> Кукуруза </template>
        <template v-slot:text>
          Предлагаем кукурузу нового урожая, качество ГОСТ 13634-90
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
        <template v-slot:middle-text>
          Кукуруза - однолетнее травянистое растение семейства злаковых высотой до 1—3 м. Стебель толстый, полый. Листья кукурузы широкие, линейно-ланцетные. Цветет в июле — августе. Соцветия раздельнополые. Мужские цветки собраны в крупную метелку на концах стеблей, женские — в початок, развивающийся в пазухах тех же особей. Початки снабжены листообразной зеленой оберткой. Плод — желтая или зелено-желтая сжатая зерновка округлой или почковидной формы. Созревает в сентябре—октябре.

Кукуруза, которую называют маисом, - самое древнее хлебное растение на Земле. Ученые установили, что кукуруза росла еще 60 000 лет назад. Продукты из кукурузы – источник углеводов, белков, микроэлементов (калий, фосфор, железо, никель), витаминов Е, В1, В2, РР. Поэтому кукуруза полезна для нормальной работы сердечно-сосудистой системы и пищеварительного тракта.
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
  background: url('@/assets/img/kukuruza.jpg') no-repeat center center;
  background-size: cover;
}
</style>
