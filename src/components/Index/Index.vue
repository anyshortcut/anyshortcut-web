<template>
  <div>
    <div>
      <header class="header">
        <div>
          <nav class="title">
            <router-link to="/" href="#">
              <img src="https://anyshortcut.com/static/img/logo-white.svg" alt />
            </router-link>
            <ul class="nav">
              <li class="nav-li">
                <router-link to="/pricing" class="nav-item">Pricing</router-link>
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
          </nav>
        </div>
        <div class="section">
          <h1 class="heading">Forget mouse clicks, embrace shortcuts!</h1>
          <div class>Customize keyboard shortcuts for your frequently visited websites</div>
          <button class="btn">Add To Chrome</button>
        </div>
      </header>
      <div class="content">
        <div>
          <h1 class="content-title">How it works</h1>
          <div class="paragraph">
            <div class="paragraph-p">
              <h1>Primary Shortcut</h1>
              <p class="paragraph-text">
                You can link a website to the keys of your choice by using ALT + 'KEY'.
                The 'KEY' used can be alphanumeric (letters A-Z, numbers 0-9).
              </p>
            </div>
            <div class="column">
              <img class="image" src="https://anyshortcut.com/static/img/shortcut-keyboard.jpg" alt />
            </div>
          </div>
          <div class="paragraph">
            <div class="column">
              <img
                class="image"
                src="https://anyshortcut.com/static/img/secondary-keyboard.jpg"
                alt
              />
            </div>
            <div class="paragraph-p">
              <h1>Secondary Shortcut</h1>
              <p>
                After activating the primary shortcut, you can use a secondary
                command to enhance your experience by linking to any other page
                in the domain. It's a good way to access subdomain pages effortlessly.
              </p>
            </div>
          </div>
          <div class="paragraph">
            <div class="paragraph-p">
              <h1>Compound Shortcut</h1>
              <p>
                Using a compound shortcut is an excellent way to access websites which
                you visit less frequently, by using two keys at once.
              </p>
            </div>
            <div class="column">
              <img class="image" src="https://anyshortcut.com/static/img/compound-keyboard.jpg" alt />
            </div>
          </div>
          <div class="paragraph">
            <div>
              <div class="column columns">
                <img class="columns-icon" src="https://anyshortcut.com/static/img/youtube.svg" alt />
                <div>
                  <span class="shortcut-key">ALT+Y</span>linked with
                  <b>Youtube</b>
                </div>
                <ul class="columns-ul">
                  <li>used 516 times</li>
                  <li>saved 25.8 minutes</li>
                </ul>
                <img class="columns-from" src="https://anyshortcut.com/static/img/stats2.png" alt />
              </div>
            </div>
            <div class="paragraph-p">
              <h1>Shortcut Statistics</h1>
              <p>
                Each shortcut trigger is logged privately, so only you can see which
                triggers are used most often. This gives you more power over how you save time.
              </p>
            </div>
          </div>
          <div class>
            <h1>Auxiliary Shortcuts</h1>
            <div class="paragraph paragraph-list">
              <div class="paragraph-l">
                <div>
                  <h3>Switch tabs</h3>
                  <div class="text">
                    Use
                    <span class="shortcut-key">ALT + Period</span> to switch between two recent tabs freely
                  </div>
                </div>
                <img class="image" src="https://anyshortcut.com/static/img/switch-tabs.gif" alt />
              </div>
              <div class="paragraph-l">
                <div>
                  <h3>Jump to home</h3>
                  <div class="text">
                    Use
                    <span class="shortcut-key">SHIFT + ALT + Space</span>to to remove query strings or path in URLs then jump to homepage automatically
                  </div>
                </div>
                <img class="image" src="https://anyshortcut.com/static/img/jump-to-home.gif" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="primary-background">
        <div class="container">
          <div>
            <h1 class="container-h1">It's time to boost your productivity!</h1>
            <p class="container-p">Get started for free!</p>
          </div>
          <button class="btn container-btn">Add To Chrome</button>
        </div>
      </div>
      <div hidden id="solid" class="fixed" @click="fixed">
        <img src="../../assets/up.svg" alt />
      </div>
    </div>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import footerDiv from "./Footer";

export default {
  name: "index",
  components: {
    footerDiv
  },
  methods: {
    fixed() {
      let rr = setInterval(() => {
        document.documentElement.scrollTop -= 80;
        if (document.documentElement.scrollTop == 0) {
          clearInterval(rr);
        }
      }, 10);
    }
  },
  created() {
    // document.onload(window.addEventListener("scroll",function(){
    //   let solid = document.getElementById('solid')
    //   solid.hidden = (pageYOffset<document.documentElement.clientHeight)
    // }))
  }
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
.fixed {
  width: 36px;
  height: 36px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  background-color: white;
  color: red;
  // border:1px solid #f1f1f1;
  text-align: center;
  line-height: 36px;
}
.header {
  width: 100%;
  /* height: 436px; */
  background-color: #507ce8;
  color: white;
}
.section {
  padding: 6rem 1.5rem 3rem;
}
.section > div {
  font-size: 20px;
  margin-bottom: 120px;
}
.heading {
  font-size: 36px;
}
.btn {
  width: 280px;
  height: 50px;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  color: #507ce8;
  /* padding: 0 30px 0 51px; */
  background-image: url("../../assets/logo.png");
  background-size: 26px 26px;
  background-repeat: no-repeat;
  background-position: 39px;
  background-color: white;
}
.content {
  margin: 0 4rem;
}
.content-title {
  padding: 3rem 1.5rem;
}
.paragraph {
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  margin: 4rem 1rem;
}
.paragraph-p {
  margin: 60px;
}
.paragraph-p > h1 {
  text-align: left;
  font-size: 28px;
  color: #546496;
  font-weight: 300;
}
.paragraph-p > p {
  text-align: left;
  font-size: 17px;
  color: #6d7d93;
}
.column {
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem;
}
.image {
  max-width: 100%;
}

.columns {
  /* width: 360px; */
  /* height: 420px; */
  box-sizing: border-box;
  padding: 24px 32px;
  border-radius: 8px;
}
.columns-icon {
  width: 120px;
  margin-bottom: 2rem;
}
.shortcut-key {
  padding: 2px 10px;
  box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  border-radius: 2px;
  text-align: center;
  margin: 0 6px;
  color: black;
}
.columns-from {
  max-width: 100%;
  margin-top: 32px;
}
.columns-ul {
  display: inline-block;
}
.columns-ul > li {
  text-align: left;
}
.paragraph-list {
  align-items: flex-start;
  justify-content: space-between;
  margin: 2rem 1rem 4rem;
}
.paragraph-l {
  width: 40%;
  margin: 0 50px;
}
.text {
  font-size: 17px;
  margin-top: 1rem;
  height: 100px;
  color: #6d7d93;
}
.primary-background {
  background-color: #507ce8;
  padding: 38px 20px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-btn {
  margin: 2rem;
}
.container-h1 {
  font-size: 28px;
  color: white;
}
.container-p {
  font-size: 17px;
  color: white;
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
  color: #c9d6f5;
  list-style: none;
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
  @media screen and (max-width: 798px) {
    .paragraph {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-items: center;
    }
    .content {
      margin: 0 auto;
      width: 100%;
    }
    .paragraph-p {
      margin: 10px 30px;
    }
    .paragraph-l {
      width: auto;
      margin: 20px 30px;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>