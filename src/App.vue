<template>
  <div>
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
*{
  box-sizing: border-box;
}
</style>
