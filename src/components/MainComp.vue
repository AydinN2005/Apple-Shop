<template>
  <div>
    <div class="mobile-ipad-macbook-container">
      <div class="mobile-container">
        <h1 class="mobile-name">Iphone 13 pro</h1>
        <h2 class="mobile-price">Best phone on earth</h2>
        <h3 class="availible">Availible from 3.18</h3>
        <span class="link-to-show-more">
          <router-link to="/iphone/13" class="link">SHOW MORE</router-link>
        </span>
        <img
          v-bind:class="loaded ? 'animate-img' : ''"
          @loadstart="loadhenadler"
          ref="img"
          src="../assets/images/apple_iphone_13_pro_max_256gb_6.7inch_6gb_ram_5g_graphite.jpeg"
          alt=""
          class="mobile-img"
        />
      </div>
      <div class="ipad-container">
        <h1 class="mobile-name">Ipad pro 4th</h1>
        <h2 class="mobile-price">Best Tablet for Your business</h2>
        <h3 class="availible">Availible from 3.28</h3>
        <span class="link-to-show-more">
          <router-link to="/ipad/13" class="link">SHOW MORE</router-link>
        </span>
        <img
          v-bind:class="loaded ? 'animate-img' : ''"
          @loadstart="loadhenadler"
          ref="img"
          src="../assets/images/TeoriV2-106819_large.jpg"
          alt=""
          class="mobile-img"
        />
      </div>
    </div>

    <div class="macbook-container">
      <h1 class="macbook-name">Macbook Pro 2020</h1>
      <h2 class="macbook-price">Best laptop for Programming</h2>
      <h3 class="availible">Availible from 4.06</h3>
      <span class="link-to-show-more">
        <router-link to="/mac/2020" class="link">SHOW MORE</router-link>
      </span>
      <img
        v-bind:class="scrollcompletedForMac ? 'animate-img' : ''"
        src="../assets/images/abb6c37a4e967b15f4b59ee6.jpg"
        alt=""
        class="mobile-img mac-image"
      />
    </div>
    <div class="watch-container">
      <div class="watch-item">
        <h1 class="watch-name">Apple watch 7th</h1>
        <h2 class="watch-price">Best watch for your business</h2>
        <h3 class="availible">Availible from 5.03</h3>
        <span class="link-to-show-more">
          <router-link to="/watch/7th" class="link">SHOW MORE</router-link>
        </span>
        <img
          v-bind:class="scrollcompletedForwathch ? 'animate-img' : ''"
          ref="img"
          src="../assets/images/apple_watch.jpg"
          alt=""
          class="watch-img"
        />
      </div>
      <div class="watch-item">
        <h1 class="watch-name">Apple watch 6th</h1>
        <h2 class="watch-price">Best watch for your business</h2>
        <h3 class="availible">Availible from 6.12</h3>
        <span class="link-to-show-more">
          <router-link to="/watch/6th" class="link">SHOW MORE</router-link>
        </span>
        <img
          v-bind:class="scrollcompletedForwathch ? 'animate-img' : ''"
          ref="img"
          src="../assets/images/apple_watch_6th.jpg"
          alt=""
          class="watch-img"
        />
      </div>
    </div>
    <div class="tv-item">
      <h1 class="tv-name">Apple TV</h1>
      <h2 class="tv-price">Best TV for your movies !</h2>
      <h3 class="availible">Availible from 7.12</h3>
      <span class="link-to-show-more">
        <router-link to="/tv/new" class="link">SHOW MORE</router-link>
      </span>
      <div
        class="tv-img-back"
        v-bind:class="scrollcompletedForTV ? 'animate-img-tv' : ''"
      ></div>
    </div>

    <div class="airpod-item">
      <h1 class="airpod-name">Airpod Pro</h1>
      <h2 class="airpod-price">Best Airpod for your musics !</h2>
      <h3 class="availible">Availible from 8.12</h3>
      <span class="link-to-show-more">
        <router-link to="/airpods/new" class="link">SHOW MORE</router-link>
      </span>
      <img
        v-bind:class="scrollcompletedForairpod ? 'animate-img' : ''"
        ref="img"
        src="../assets/images/airpod.jpg"
        alt=""
        class="airpod-img"
      />
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  name: "MainComp",
  data() {
    return {
      loaded: false,
      windowTop: window.top.scrollY,
      scrollcompletedForMac: false,
      scrollcompletedForwathch: false,
      scrollcompletedForTV: false,
      scrollcompletedForairpod: false,
    };
  },
  methods: {
    loadhenadler() {
      this.loaded = true;
    },
    onScroll() {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    },
    scrollloadhandler() {
      if (this.windowTop > 630) {
        this.scrollcompletedForMac = true;
        console.log("scroll is " + this.windowTop);
      }
    },
  },
  watch: {
    windowTop: {
      immediate: true,
      handler() {
        if (this.windowTop > 560) {
          this.scrollcompletedForMac = true;
          console.log("scroll is " + this.windowTop);
        }
        if (this.windowTop > 1420) {
          this.scrollcompletedForwathch = true;
        }
        if (this.windowTop > 2142) {
          this.scrollcompletedForTV = true;
        }
        if (this.windowTop > 3236) {
          this.scrollcompletedForairpod = true;
        }
      },
    },
  },
};
</script>

<style scoped>
.mobile-ipad-macbook-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 30px 0;
  width: 100%;
}
.mobile-container {
  grid-column-start: 1;
  grid-column-end: 2;
}
.ipad-container {
  grid-column-start: 2;
  grid-column-end: 3;
}
.macbook-container {
  grid-column-start: 3;
  grid-column-end: 4;
  height: max-content;
}
.mobile-img {
  transition: 1s;
  width: 600px;
  height: 600px;
  align-self: center;
  margin-top: 50px;
}
.mac-image {
  width: 600px;
  height: 600px;
  display: block;
  margin: 40px auto;
  margin-bottom: 0;
}
.mobile-name,
.mobile-price,
.macbook-name,
.macbook-price,
.watch-name,
.watch-price,
.tv-name,
.tv-price,
.airpod-name,
.airpod-price {
  font-size: 4rem;
  text-align: center;
  color: rgb(39, 39, 39);
  text-shadow: 5px 5px 10px rgb(14, 14, 14);
  font-weight: bold;
  margin: 0;
  margin-top: 40px;
}
.mobile-price,
.macbook-price,
.watch-price,
.tv-price,
.airpod-price {
  text-shadow: none;
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
}
.watch-name {
  margin: 0;
}
.watch-img {
  width: 500px;
  height: 500px;
  align-self: center;
  margin: 60px 0;
  margin-bottom: 0;
  margin-left: 30px;
}
.tv-img-back{
  margin-top: 30px;
  width: 100%;
  height: 800px;
  background: url(../assets/images/TV.jpg) center center/cover;
  background-attachment: fixed;
}
.airpod-img {
  display: block;
  width: 600px;
  height: 600px;
  margin: 50px auto;
  margin-bottom: 0;
}
.availible {
  color: rgb(153, 153, 153);
  display: block;
  text-align: center;
  margin: 0;
  margin-top: 10px;
}
.link-to-show-more {
  margin: 0;
  margin-top: 10px;
  color: blue;
  display: block;
  text-align: center;
}
.link {
  margin: 0 auto;
  text-decoration: underline;
  cursor: pointer;
}
.link:hover {
  text-decoration: none;
}
.animate-img {
  animation-name: loadimg;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.watch-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.watch-item {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.animate-img-tv {
  animation-name: tvloaded;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
@keyframes tvloaded {
  0% {
    filter: blur(10px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes loadimg {
  0% {
    opacity: 0;
    transform: translateY(0px);
    filter: blur(5px);
  }
  100% {
    opacity: 0.9;
    filter: blur(0);
    transform: translateY(-40px);
  }
}
</style>
