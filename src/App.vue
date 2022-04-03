<template>
  <div class="container">
    <MenuComp />
    <div>
      <router-view />
    </div>
    <FooterComp />
  </div>
</template>
<script>
import MenuComp from "@/components/MenuComp.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "App",
  components: {
    MenuComp,
    FooterComp,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
.container {
  animation-name: loead;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes loead {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
