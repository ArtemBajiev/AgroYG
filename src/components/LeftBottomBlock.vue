<template>
    <div class="left-bottom-block">
        <transition name="anim-bottom" v-show="$store.state.loading">
            <TextBottom><slot name="header"></slot></TextBottom>
        </transition>
        <transition name="anim-bottom-btn" v-show="$store.state.loading">
            <MoreDetailButton @click.prevent="this.$emit('ClickBtn')">
              <slot name="btn"></slot>
            </MoreDetailButton>
        </transition>
        <MenuBottom></MenuBottom>
    </div>
</template>
<script>
import MenuBottom from './MenuBottom.vue';
import TextBottom from './TextBottom.vue';
import MoreDetailButton from './MoreDetailButton.vue';

export default {
  components: { MenuBottom, TextBottom, MoreDetailButton },
};
</script>
<style>
.left-bottom-block{
    position: absolute;
    left: 5vw;
    bottom: 4vh;
    z-index: 3;
}
/* anim-bottom block */
.anim-bottom-enter-from{
transform: translateY(70px);
opacity: 0;
}
.anim-bottom-enter-active{
  transition: all 2s cubic-bezier(0.525, 0.900, 0.490, 0.960);
  transition-delay: 1.5s;
}
.anim-bottom-enter-to{
  transform: translateY(0px);
  opacity: 1;
}
.anim-bottom-leave-from{
  transform: translateY(0px);
  opacity: 1;
}
.anim-bottom-leave-active{
  transition: all 1s cubic-bezier(0.525, 0.900, 0.490, 0.960);
  transition-delay: 1s;
}
.anim-bottom-leave-to{
  transform: translateY(70px);
  opacity: 0;
}

/* anim btn */
.anim-bottom-btn-enter-from{
transform: translateY(50px);
opacity: 0;
}
.anim-bottom-btn-enter-active{
  transition: all 2s cubic-bezier(0.525, 0.900, 0.490, 0.960);
  transition-delay: 1.7s;
}
.anim-bottom-btn-enter-to{
  transform: translateY(0px);
  opacity: 1;
}
.anim-bottom-btn-leave-from{
  transform: translateY(0);
  opacity: 1;
}
.anim-bottom-btn-leave-active{
  transition: all 1s cubic-bezier(0.525, 0.900, 0.490, 0.960);
}
.anim-bottom-btn-leave-to{
  transform: translateY(50px);
  opacity: 0;
}
</style>
