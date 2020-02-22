<template>
  <div>
    <div class="title">
      <router-link to="/" href="#">
        <img src="https://anyshortcut.com/static/img/logo.svg" alt />
      </router-link>
      <ul class="nav">
        <li class="nav-li">
          <router-link to="/pricing" class="nav-item" href="#">Pricing</router-link>
        </li>
        <li class="nav-li">
          <router-link class="nav-item" to="/faq">FAQ</router-link>
        </li>
        <li class="nav-li">
          <router-link class="nav-item" to="/contact">Contact</router-link>
        </li>
        <li class="nav-li">
          <router-link class="nav-item" to="/account">Account</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "titles"
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  text-align: center;
}
a {
  text-decoration: none;
}
.title {
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.nav-li {
  display: inline-block;
  margin: 0 18px;
}
.nav-item {
  font-size: 15px;
  color: #919dad;
  list-style: none;
  &.router-link-active {
    color: black;
  }
}
.nav-item:hover {
  color: #000;
}
@media screen and (max-width: 798px) {
  .title {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px 28px;
  }
  .nav {
    margin-top: 10px;
  }
  .nav-li {
    margin: 0 10px;
  }
}
</style>