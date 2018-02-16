<template>
  <div id="app">
    <ul class="tab">
      <li class="tab-item">
        <router-link :to="{ name: 'upload', params: { userId: 123 }}">上传</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>


<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
