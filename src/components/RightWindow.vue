<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="all-window__container">
    <div class="left-window__container" @click="this.$emit('CloseWindow')"><div class="close-window-img"></div></div>
    <div class="right-window__container">
      <div class="more-detailed-top">
        <div class="close-wind-mob"  @click="this.$emit('CloseWindow')"><img src="@/assets/img/plusBlack.svg" class="plus-black" alt=""></div>
        <h2><slot name="header"></slot></h2>
        <p class="about-text">
          <slot name="text"></slot>
        </p>
      </div>
      <div class="more-detailed-middle"><slot name="middle-text"></slot></div>
      <div class="more-detailed-footer"><div class="foot">© 2023 ООО "АгроЮГ"</div><div class="foot-dev">Сделано в <div class="CDT">CDT</div></div></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.all-window__container {
  position: absolute;
  display: flex;
  justify-content: end;
  z-index: 10;
  top: 0;
  width: 100vw;
  height: 100vh;
  color: black;
}
.left-window__container {
  background-color: #0000009a;
  height: 100vh;
  flex: 1 1 auto;
  box-shadow: 0px 0px 0px 100vw #0000009a;
}
.right-window__container {
  max-width: 700px;
  background-color: #e7e7e7;
  height: 100vh;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}
.more-detailed-top {
  background-color: rgba(248, 249, 250, 1);
  width: 100%;
  padding: 40px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.26);
}
.about-text {
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 300;
}
.close-window-img
{
    background-image: url('@/assets/img/exit.svg');
    height: 30px;
    width: 30px;
    background-position: center;
    background-size: contain;
    position: absolute;
    left: 5vw;
    bottom: 3vw;
    fill: black;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.068);
    transform: rotate(180deg);
    transition: transform .5s ease;
}
.left-window__container:hover .close-window-img{
    transform: rotate(180deg) scale(1.2) translateX(15px);
}
.more-detailed-middle
{
  width: 100%;
  padding: 20px 40px;
  font-size: 14px;
  font-weight: 300;
}
.more-detailed-footer
{
  background-color: rgba(50, 50, 75, 1);
    padding: 40px 20px;
    height: 20px;
    width: 100%;
    color: #adadad;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
.plus-black{
  transform: rotate(45deg);
  width: 30px;
  box-sizing:content-box;
  padding: 10px;
  display: none;
}

.CDT
{
  color: #e4e4e4;
  transition: color 1s ease;
  display: inline-block;
  cursor: pointer;
  letter-spacing: 2px;
}
.CDT:hover
{
  color: #ffffff;
}
.close-wind-mob
{
  position: absolute;
  right: 10px;
  top: 10px;
}
.right-window__link
{
  color: #3a4052;
  font-weight: 500;
}
.right-window__link:hover
{
  color: #6e6e6e;
}
@media (max-width: 812px){
  .plus-black
  {
    display: block;
  }
  .close-window-img
  {
    display: none;
  }
  .right-window__container {
  max-width: 600px;
  }
}

</style>
