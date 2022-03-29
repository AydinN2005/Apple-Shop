<template>
  <div>
    <div class="footer">
      <div class="container">
        <h4 class="title">Store</h4>
        <router-link to="/mac" class="link">macbook</router-link>
        <router-link to="/iphone" class="link">iphone</router-link>
        <router-link to="/ipad" class="link">ipad</router-link>
        <router-link to="/tv" class="link">TV & Home</router-link>
        <router-link to="/airpods" class="link">airpod</router-link>
      </div>
      <div class="container">
        <h4 class="title">Account</h4>
        <router-link to="/appleid" class="link">Apple ID</router-link>
        <router-link to="/icloud" class="link">Icloud.com</router-link>
        <router-link to="/applestore" class="link">Apple store</router-link>
        <h4 class="title">About Us</h4>
        <router-link to="/aboutweb" class="link">about our website</router-link>
        <router-link to="/aboutshop" class="link">about our shop</router-link>
      </div>
      <div class="container">
        <h4 class="title">Contact Us</h4>
        <!-- <router-link to="/" class="link">3-287-83-47</router-link>
        <router-link to="/" class="link">+98 0903 637 0468</router-link> -->
        <h4 class="link">3-287-83-47</h4>
        <h4 class="link">+98 0903 637 0468</h4>
        <a class="link" href="https://aydinnoroozi.k@gmail.com"
          >aydinnoroozi.k@gmail.com</a
        >
        <h4 class="link">instagram ID : aydin_n_2005</h4>
        <h4 class="link">Telegram ID : Aydin_dev</h4>
      </div>
    </div>
    <span class="text">Copyright © 2022 Apple Inc. All rights reserved.</span>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  /* margin: 10px 0; */
  margin-bottom: 0;
  background-color: #e9e9eb;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
}
.title {
  margin: 0;
  padding: 0;
  color: rgb(36, 36, 36);
}
.link {
  cursor: pointer;
  margin: 9px 0;
  color: rgb(99, 99, 99);
  font-size: 14px;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
.text {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #f5f5f7;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid grey;
}
</style>