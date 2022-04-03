<template>
  <div class="container">
    <h1 class="icon icon-animate"><Icon icon="carbon:face-dissatisfied" /></h1>
    <h1 class="text">
      <span class="hmm">Hmmmmmm !</span>
      <br />
      We are sorry but <span class="hmm">page not found !</span>
      <br />
      Please make sure your address is valid .
    </h1>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "404Comp",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.icon {
  font-size: 5rem;
  display: block;
  margin: 60px auto;
  width: max-content;
  align-self: center;
  /* margin-top: 60px; */
  /* text-align: center; */
}
.hmm{
  color: red;
}
.text {
  line-height: 1.5;
  text-align: center;
}
.icon-animate{
  animation-name : iconanimate;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}
@keyframes iconanimate {
  0%{
    scale: 1;
    padding-top: 0;
  }
  100%{
    scale: 1.2;
    padding-top: 40px;
    color: black;
    rotate: 360deg;
  }
}
</style>