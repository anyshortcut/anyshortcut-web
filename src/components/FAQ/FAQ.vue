<template>
  <div>
    <titleDiv></titleDiv>
    <div class="content">
      <div class="container">
        <h1 class="heading">Frequently asked questions</h1>
        <p class="text">Here are some frequently asked questions by user.</p>
        <p class="text">If you can't find a solution for your problem here, feel free to contact us.</p>
      </div>
      <div class="container">
        <h2 class="title">General questions</h2>
        <div class="container-div">
          <div class="question">
            <h3>Which browsers does Anyshortcut support?</h3>
            <p class='text text-left'>We fully support of Firefox and Chromium browser, 
              including Chrome, Opera, Yandex browser, etc. Currently, 
              Safari is not in our support plan.</p>
          </div>
          <div class="question">
            <h3>What combination key does Anyshortcut support?</h3>
            <p class='text text-left'><b>ALT</b> is the default combination key, meanwhile we also support 
              <b>SHIFT</b> as an option. Please feel free to customize it in Popup -> Setting page.</p>
          </div>
          <div class="question">
            <h3>What should I do if I have a shortcut conflict?</h3>
            <p class='text text-left'>Anyshortcut has no idea with other application's or extension's shortcuts. 
              Please customize you combination key to avoid the conflicts.</p>
          </div>
          <div class="question">
            <h3>How can I report a bug, get help, or give feedback?</h3>
            <p class='text text-left'>We are more than happy to help you! We have a <a href="#">Telegram group</a> to provide our instant support. 
              Contact an account representative by emailing <a href="#">support@anyshortcut.com</a> is also welcome. 
              When reporting a bug, please include details to help us fix it as soon as possible.</p>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="title">Subscription questions</h2>
        <div class="container-div">
          <div class="question">
            <h3>Which payment methods do your accepted?</h3>
            <p class='text text-left'>Our payments are securely processed by Stripe. 
              We accept major credit cards including Visa, Mastercard, and American Express.</p>
          </div>
          <div class="question">
            <h3>What currency are subscriptions charged in?</h3>
            <p class='text text-left'>All of our plans are charged in USD.</p>
          </div>
          <div class="question">
            <h3>What will happen if my trial ends?</h3>
            <p class='text text-left'>Every new user has 30 days free trial, and all your features would be disabled 
              after the free trial expired. Please subscribe the plan to reactivate it.</p>
          </div>
          <div class="question">
            <h3>Can I get my refund if I don't satisfy?</h3>
            <p class='text text-left'>Surely, you can get the refund in 7 days for any reason, just send us an email at 
              <a>bills@anyshortcut.com</a>. We'll deal it in one work day.</p>
          </div>
          <div class="question">
            <h3>Can I cancel my subscription?</h3>
            <p class='text text-left'>Your annual plans will automatically renew until you cancel them. 
              You can cancel at any time by reach us with <a>bills@anyshortcut.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import titleDiv from '../Index/Title';
import footerDiv from '../Index/Footer'

export default {
  name:'faq',
  components:{
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
a {
  text-decoration: none;
}
.container {
  padding: 3rem 1.5rem;
  margin: 0 auto;
}
.content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 60px;
}
.heading {
  font-size: 36px;
}
.text {
  font-size: 17px;
  color: #6d7d93;
  line-height: 26px;
}
.container-div {
  display: flex;
  flex-wrap: wrap;
}
.title {
  text-align: left;
  font-size: 28px;
  line-height: 42px;
  color: #546496;
  border-left: 5px solid #507ce8;
  padding-left: 10px;
  margin-bottom: 30px;
}
.question {
  width: 50%;
  box-sizing: border-box;
  padding: 30px;
}
h3 {
  text-align: left;
    color: #44485b;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 20px;
}
.text-left {
  text-align: left;
}
.text-left>a {
    color: #3273dc;
}
@media screen and (max-width: 798px){
  .question{
    width: auto;
    padding: 30px 0;
  }
  .container{
    padding: 3rem 1rem;
  }
  .content{
    padding: 20px 30px;
  }
}
</style>