<template>
  <div>
    <nav class="menu-container">
      <ul class="menu">
        <router-link to="/" class="item" style="font-size: 1.3rem">
          <Icon icon="file-icons:apple" />
        </router-link>
        <router-link to="/store" class="item">store</router-link>
        <router-link to="/mac" class="item">mac</router-link>
        <router-link to="/iphone" class="item">iphone</router-link>
        <router-link to="/ipad" class="item">ipad</router-link>
        <router-link to="/watch" class="item">watch</router-link>
        <router-link to="/tv" class="item">TV & Home</router-link>
        <router-link to="/airpods" class="item">AirPods</router-link>
        <li class="item search" @click="searchflaghandler">
          <Icon class="icon" icon="mdi:magnify" />
        </li>
      </ul>
      <div
        class="search-box"
        v-bind:class="searchflag ? 'crouter-linkcked' : 'oncrouter-linkcked'"
      >
        <h1 class="search-title">What do you looking for ?</h1>
        <input type="text" class="search-input" ref="txtbox" />
        <button class="search-btn">Search</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "MenuComp",
  components: {
    Icon,
  },
  data() {
    return {
      searchflag: false,
    };
  },
  methods: {
    searchflaghandler() {
      if (this.searchflag === false) {
        this.searchflag = true;
      } else {
        this.searchflag = false;
      }
    },
  },
};
</script>

<style scoped>
.menu-container {
  background-color: #131313;
  width: 100%;
  height: max-content;
  position: fixed;
  top: 0;
  opacity: 0.97;
  z-index: 500;
}
.menu {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 13px 0;
  width: 80%;
  margin: 0px auto;
}
.item {
  color: #c4c4c4;
  text-decoration: none;
  cursor: pointer;
}
.search {
  position: relative;
}
.item:hover {
  color: white;
  transition: 0.2s;
  filter: blur(25px), brightness(50%);
}
.icon {
  font-size: 1.2rem;
}
.search-box {
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  transform: translateX(700px);
  width: max-content;
  height: max-content;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-top: 51px;
  padding: 20px;
  opacity: 1;
}
.search-box input {
  margin: 10px auto;
}
.search-title {
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
}
.search-input {
  padding: 5px;
  width: 80%;
  margin: 10px auto;
  font-family: "Work";
}
.search-btn {
  font-family: "Work";
  background-color: rgba(82, 82, 82, 0.493);
  border-radius: 5px;
  padding: 10px 30px;
  color: white;
  display: block;
  outline: none;
  border: 1px solid black;
}
.search-btn:hover {
  background-color: rgba(212, 208, 208, 0.493);
  transition: 0.3s;
  cursor: pointer;
  color: black;
}
.search-input:focus {
  outline: none;
}
.crouter-linkcked {
  transition: 1s;
  transform: translateX(0px);
  background-color: #131313;
  transition: 1s;
}
.oncrouter-linkcked {
  animation-name: oncrouter-linkcked;
  animation-direction: 1s;
  transition: 1s;
}
</style>