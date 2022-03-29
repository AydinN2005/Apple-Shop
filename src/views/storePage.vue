<template>
  <div class="container">
    <div style="margin-top: 50px">
      <!-- macbook slideshow -->
      <h1 class="title">MacBooks.Like a star !</h1>
    </div>
    <carousel
      pauseAutoplayOnHover
      :itemsToShow="3"
      :snapAlign="start"
      :autoplay="3000"
      :wrap-around="true"
      class="carousel-container"
    >
      <slide v-for="(slide, index) in Macimages" :key="index" class="slide">
        <div class="carousel__item items-container">
          <h1>{{ slide.title }}</h1>
          <h3>{{ slide.content }}</h3>
          <router-link to="/showmore" class="link">SHOW MORE </router-link>
          <br />
          <router-link to="/showmore" class="link">BUY</router-link>
          <br />
          <img :src="slide.image" alt="" class="slideshow-img" />
        </div>
      </slide>
      <template #addons> </template>
    </carousel>
    <!-- mobile slideshow  -->
    <h1 class="title">Iphons.Like a gold !</h1>
    <carousel
      pauseAutoplayOnHover
      :itemsToShow="3"
      :snapAlign="start"
      :autoplay="3000"
      :wrap-around="true"
      class="carousel-container"
    >
      <slide v-for="(slide, index) in Iphoneimages" :key="index" class="slide">
        <div class="carousel__item items-container">
          <h1>{{ slide.title }}</h1>
          <h3>{{ slide.content }}</h3>
          <router-link to="/showmore" class="link">SHOW MORE </router-link>
          <br />
          <router-link to="/showmore" class="link">BUY</router-link>
          <br />
          <img :src="slide.image" alt="" class="slideshow-img" />
        </div>
      </slide>
      <template #addons> </template>
    </carousel>
    <!-- ipad slideshow -->
    <h1 class="title">Ipads.Like a laptob !</h1>
    <carousel
      pauseAutoplayOnHover
      :itemsToShow="3"
      :snapAlign="start"
      :autoplay="3000"
      :wrap-around="true"
      class="carousel-container"
    >
      <slide v-for="(slide, index) in Ipadimages" :key="index" class="slide">
        <div class="carousel__item items-container">
          <h1>{{ slide.title }}</h1>
          <h3>{{ slide.content }}</h3>
          <router-link to="/showmore" class="link">SHOW MORE </router-link>
          <br />
          <router-link to="/showmore" class="link">BUY</router-link>
          <br />
          <img :src="slide.image" alt="" class="slideshow-img" />
        </div>
      </slide>
      <template #addons> </template>
    </carousel>

    <!-- watch slideshow -->
    <h1 class="title">Watchs.Clever watch !</h1>
    <carousel
      pauseAutoplayOnHover
      :itemsToShow="3"
      :snapAlign="start"
      :autoplay="3000"
      :wrap-around="true"
      class="carousel-container"
    >
      <slide v-for="(slide, index) in Watchimages" :key="index" class="slide">
        <div class="carousel__item items-container">
          <h1>{{ slide.title }}</h1>
          <h3>{{ slide.content }}</h3>
          <router-link to="/showmore" class="link">SHOW MORE </router-link>
          <br />
          <router-link to="/showmore" class="link">BUY</router-link>
          <br />
          <img :src="slide.image" alt="" class="slideshow-img" />
        </div>
      </slide>
      <template #addons> </template>
    </carousel>

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
          <router-link to="/showmore" class="link">SHOW MORE </router-link>
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
  name: "storePage",
  data() {
    return {
      Macimages: [
        {
          image: require("../assets/images/abb6c37a4e967b15f4b59ee6.jpg"),
          title: "Macbook 2019",
          content: "this is best laptop for your business",
        },
        {
          image: require("../assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-sjdtgz9bq7.jpg"),
          title: "Macbook 2021 M1",
          content: "With M1 CPU became a top level laptop in the World !",
        },
        {
          image: require("../assets/images/blackmac2.jpg"),
          title: "Macbook 2021 M1",
          content: "With M1 CPU became a top level laptop in the World !",
        },
        {
          image: require("../assets/images/blackmac.jpg"),
          title: "Macbook 2022 M1 Ultra",
          content:
            "With double M1 CPU became a very very good level laptop in the World !",
        },
      ],

      Iphoneimages: [
        {
          image: require("../assets/images/apple_iphone_13_pro_max_256gb_6.7inch_6gb_ram_5g_graphite.jpeg"),
          title: "Iphone 13 pro max",
          content: "with A15 CPU is best phone in the World !",
        },
        {
          image: require("../assets/images/iPhone13Mini.jpg"),
          title: "Iphone 13 mini",
          content: "with A15 CPU for mini phone lovers !",
        },
        {
          image: require("../assets/images/iphonexsmax.jpg"),
          title: "Iphone xs max",
          content: "Old than 13 but very lvoely phone !",
        },
        {
          image: require("../assets/images/iphonesemini.jpg"),
          title: "Iphone SE 3",
          content: "A new phone in classic frame !",
        },
      ],
      Ipadimages: [
        {
          image: require("../assets/images/TeoriV2-106819_large.jpg"),
          title: "Ipad pro 4th",
          content: "A tablet like laptob ... maybe better !",
        },
        {
          image: require("../assets/images/ipadpro2021.jpg"),
          title: "Ipad pro 2021",
          content: "A good face and powerfull tablet !",
        },
        {
          image: require("../assets/images/ipadpro129.jpg"),
          title: "Ipad pro 12.9 inch",
          content: "with m1 cpu is a best tablet in the world",
        },
        {
          image: require("../assets/images/ipadpro105.jpg"),
          title: "Ipad pro 10.5 inch",
          content: "A classic tablet but very powerfull !",
        },
      ],
      Watchimages: [
        {
          image: require("../assets/images/apple_watch.jpg"),
          title: "Apple watch 6th",
          content: "For your comfort !",
        },
        {
          image: require("../assets/images/applewatch3thh.jpg"),
          title: "Apple watch 3th",
          content: "Old ... but almost For your comfort !",
        },
        {
          image: require("../assets/images/applewatch5th.jpg"),
          title: "Apple watch 5th",
          content: "For your comfort !",
        },
        {
          image: require("../assets/images/applewatch7th.jpg"),
          title: "Apple watch 7th",
          content: "A new watch ... For your comfort !",
        },
      ],
      Airpodimages: [
        {
          image: require("../assets/images/airpods-2.jpg"),
          title: "Apple Airpod 2",
          content: "Best thing for your music !",
        },
        {
          image: require("../assets/images/airpod.jpg"),
          title: "Apple Airpod ",
          content: "white color is very great !",
        },
        {
          image: require("../assets/images/airpodblack.jpg"),
          title: "Apple Airpod ",
          content: "Now with blak color !",
        },
        {
          image: require("../assets/images/airpodwireless.jpg"),
          title: "Apple Airpod",
          content: "Now with wireless charging !",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style scoped>
.img {
  width: 400px;
  height: 400px;
  display: block;
  margin: 5px auto;
}
.container {
  animation-name: load;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.img {
  width: 400px;
  height: 400px;
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
* {
  box-sizing: border-box;
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