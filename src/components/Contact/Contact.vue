<template>
  <div>
    <titleDiv></titleDiv>
    <div>
      <div class="title">
        <h1 class="heading">Contact us</h1>
        <p class="text">We'd love to hear from you!</p>
      </div>
      <div class="center-img">
        <img src="https://anyshortcut.com/static/img/email.jpg" alt="">
      </div>
      <div class="btn">hello@anyshortcut.com</div>
    </div>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import titleDiv from '../Index/Title';
import footerDiv from '../Index/Footer'

export default {
  naem:'contact',
  components: {
    titleDiv,
    footerDiv
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  text-align: center;
}
.title {
  padding: 48px 24px;
}
.heading {
  font-size: 36px;
    line-height: 60px;
    font-family: Poppins,sans-serif;
    font-weight: 600;
    color: #234689;
    letter-spacing: 0;
}
.text {
  line-height: 26px;
  font-family: Open Sans,sans-serif;
  font-weight: 400;
  color: #6d7d93;
  letter-spacing: 0;
  font-size: 17px;
}
.center-img {
  max-width: 1152px;
  margin: 0 auto;
}
img {
  width: 400px;
  max-width: 100%;
}
.btn {
  font-size: 28px;
  line-height: 42px;
  color: #546496;
  font-family: Poppins,sans-serif;
  font-weight: 500;
  letter-spacing: 0;
  padding: 48px 0;
  cursor: pointer;
}
.btn:hover {
  color: #000;
}
</style>