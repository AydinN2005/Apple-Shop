<template>
  <div class="container">
    <!-- airpod slideshow -->
    <h1 class="title">
      Airpod.Small , great , and with loudly sounds , is very prety !
    </h1>
    <carousel
      pauseAutoplayOnHover
      :itemsToShow="3"
      :snapAlign="start"
      :autoplay="3000"
      :wrap-around="true"
      class="carousel-container"
    >
      <slide v-for="(slide, index) in Airpodimages" :key="index" class="slide">
        <div class="carousel__item items-container">
          <h1>{{ slide.title }}</h1>
          <h3>{{ slide.content }}</h3>
          <router-link
            :to="{ name : 'airpodProdoctPage' , params: { id : slide.id , title : slide.title , content : slide.content , image : slide.image } }"
            class="link"
            >SHOW MORE
          </router-link>
          <br />
          <router-link to="/showmore" class="link">BUY</router-link>
          <br />
          <img :src="slide.image" alt="" class="slideshow-img" />
        </div>
      </slide>
      <template #addons> </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "airpodPage",
  data() {
    return {
      Airpodimages: [
        {
          image: require("../assets/images/airpods-2.jpg"),
          title: "Apple Airpod 2",
          content: "Best thing for your music !",
          id : 1 ,
        },
        {
          image: require("../assets/images/airpod.jpg"),
          title: "Apple Airpod ",
          content: "white color is very great !",
          id : 2 ,
        },
        {
          image: require("../assets/images/airpodblack.jpg"),
          title: "Apple Airpod ",
          content: "Now with blak color !",
          id : 3 ,
        },
        {
          image: require("../assets/images/airpodwireless.jpg"),
          title: "Apple Airpod",
          content: "Now with wireless charging !",
          id : 4 ,
        },
      ],
    //   id : 3 ,
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
.container {
  animation-name: load;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.carousel-container {
  width: 100%;
  margin: 55px auto 0;
  display: flex;
  justify-content: space-between;
}
.slide {
  margin-bottom: 40px;
  background-color: black;
  padding: 15px 0;
}
.items-container {
  border-radius: 15px;
  width: 100%;
  height: 100%;
  margin: 10px 40px;
  box-shadow: 5px 5px 60px 5px rgb(255, 169, 236) inset;
  transition: 0.3s;
}
.items-container:hover {
  cursor: pointer;
}
.link {
  display: inline-block;
  font-size: 1.5rem;
  margin: 0 auto;
  margin-bottom: 10px;
}
.link:hover {
  text-decoration: none;
  color: gray;
  z-index: 5;
}
.items-container h1 {
  font-size: 2rem;
  /* color: rgb(39, 39, 39); */
  color: white;
  text-shadow: 5px 5px 10px rgb(14, 14, 14);
}
.items-container h3 {
  color: white;
}
.slideshow-img {
  width: 300px;
  height: 300px;
  border-radius: 30px;
  opacity: 0.9;
}
.title {
  font-size: 4rem;
  text-align: center;
  color: rgb(39, 39, 39);
  text-shadow: 5px 5px 10px rgb(14, 14, 14);
  font-weight: 900;
  margin: 0;
  margin-top: 40px;
}
@keyframes load {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>