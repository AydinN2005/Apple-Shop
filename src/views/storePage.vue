<template>
  <div>
    <iphonecomp />
    <ipadComp />
    <watchComp />
    <airpodComp />
    <macComp />
  </div>
</template>

<script>
import iphonecomp from "../components/iphoneComp.vue";
import ipadComp from "../components/ipadComp.vue";
import watchComp from "../components/watchComp.vue";
import airpodComp from "../components/airpodComp.vue";
import macComp from "../components/macComp.vue";
export default {
  name: "storePage",
  components: {
    iphonecomp,
    ipadComp,
    watchComp,
    airpodComp,
    macComp,
  },
};
</script>

<style>
</style>