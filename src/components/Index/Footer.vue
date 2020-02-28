<template>
  <div class="base-div">
    <footer class="base">
      <div class="footer-top">
        <div class="footer-div">
          <router-link to="/">
            <img src="https://anyshortcut.com/static/img/logo.svg" alt />
          </router-link>
        </div>
        <div class="footer-div footer-left">
          <div class="footer-title">Product</div>
          <ul class="footer-ul">
            <li >
              <a href="#" class="list-item">Account</a>
            </li>
            <li>
              <a href="#" class="list-item">Pricing</a>
            </li>
            <li>
              <a href="#" class="list-item">FAQ</a>
            </li>
            <li>
              <a href="https://github.com/anyshortcut" class="list-item">Github</a>
            </li>
          </ul>
        </div>
        <div class="footer-div">
          <div class="footer-title">Connect</div>
          <ul class="footer-ul">
            <li><a href='#' class="list-item">Contact us</a></li>
            <li><a href="https://twitter.com/anyshortcut" class="list-item">Twitter</a></li>
            <li>
              <a href="https://telegram.me/anyshortcut" class="list-item">Telegram</a>
            </li>
            <li>
              <a href="https://t.me/anyshortcut_group" class="list-item">Telegram Group</a>
            </li>
          </ul>
        </div>
        <div class="footer-div">
          <div class="footer-title">Legal</div>
          <ul class="footer-ul">
            <li>
              <router-link to="/terms" class="list-item">Terms of service</router-link>
            </li>
            <li>
              <router-link to="/privacy" class="list-item">Privacy policy</router-link>
            </li>
          </ul>
        </div>
      </div>
      <small class="footer-small">Copyright©2019 Anyshortcut.com. All rights reserved</small>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'footerDiv'
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  text-align: center;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.base-div {
  background-color: #f6f9fc;
}
.base {
  margin: 0 auto;
  max-width: 1280px;
  padding: 50px 20px 20px;
  // background-color: #f6f9fc;
}
.footer-top {
  display: flex;
  margin-bottom: 1rem;
}
.footer-div {
  flex-grow: 1;
  padding: 1rem;
  flex-basis: 0;
}
.footer-left {
  margin-left: 20%;
}
.footer-ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none; 
}
.footer-title {
  text-align: left;
  font-size: 16px;
  color: #76808d;
  margin-bottom: 12px;
}
.list-item {
  color: #999;
  text-align: left;
  font-size: 14px;
  line-height: 30px
}
.list-item:hover {
  color: #333;
}
.footer-small {
  display: block;
  font-size: 12px;
  color: #b9b9b9;
}
.base {
  margin: 0 auto
}
@media screen and (max-width: 798px) {
  .footer-top {
    flex-direction: column;
  }
  .footer-left {
    margin-left: 0;
  }
}

</style>