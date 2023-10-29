<template>
  <div class="overflow-hidden">
      <transition name="anim-page" mode="out-in">
        <router-view></router-view>
      </transition>
      </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap");
* {
  font-family: "Roboto", sans-serif !important;
}
a {
  text-decoration: none;
  outline: none;
  color: #c9c9c9;
  font-size: 18px;
  list-style: none;
  transition: all 0.3s ease-in;
}
a:hover {
  text-decoration: none;
  outline: none;
  color: #fff;
  list-style: none;
}
.overflow-hidden {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
/* animation */
.anim-page-enter-from {

  opacity: 0;
}
.anim-page-enter-active {
  transition: all 1s ease-in;
}
.anim-page-enter-to {
  opacity: 1;
}
.anim-page-leave-from {
  opacity: 1;
}
.anim-page-leave-active {
  transition: all 1s ease-in;
}
.anim-page-leave-to {

  opacity: 0;
}
</style>
