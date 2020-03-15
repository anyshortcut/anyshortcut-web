<template>
  <div>
    <titleDiv></titleDiv>
    <div class="pricing-div">
      <div class="title-top">
        <h1 class="title-h1">One Simple plan</h1>
        <div class="title-text">No Ads. No additional cost. Subscribe by year</div>
      </div>
      <div class="content">
        <div class="content-card">
          <img class="content-card-img" src="https://anyshortcut.com/static/img/gorgeous.svg" alt />
          <div class="discount">$9.99 / year</div>
          <h1 class="content-card-peading">$4.99 / year, 50% off</h1>
          <div class="content-card-bottom">
            <div>
              <div class="content-card-list">
                <img class="img-right" src="../../assets/right.svg" alt />
                <div>All kind of shortcuts</div>
              </div>
              <div class="content-card-list">
                <img class="img-right" src="../../assets/right.svg" alt />
                <div>Shortcut frequency statistics</div>
              </div>
              <div class="content-card-list">
                <img class="img-right" src="../../assets/right.svg" alt />
                <div>Unlimited shortcut supported</div>
              </div>
              <div class="content-card-list">
                <img class="img-right" src="../../assets/right.svg" alt />
                <div>Shortcut sync everywhere</div>
              </div>
            </div>
          </div>
          <br />
          <button class="content-btn">Subscribe Now!</button>
        </div>
      </div>
      <div class="pricing-bottom">
        <div class="prc-btm-list">
          <img class="prc-bottom-img" src="https://anyshortcut.com/static/img/product.svg" alt />
          <p class="prc-bottom-text">
            Get started with
            <b>30 days</b> free trial, no credit card required
          </p>
        </div>
        <div class="prc-btm-list">
          <img class="prc-bottom-img" src="https://anyshortcut.com/static/img/refund.svg" alt />
          <p class="prc-bottom-text">
            Hassle-free refund in
            <b>7 days</b> for any reason
          </p>
        </div>
        <div class="prc-btm-list">
          <img class="prc-bottom-img" src="https://anyshortcut.com/static/img/payment.svg" alt />
          <p class="prc-bottom-text">
            Payment powered by
            <a href="https://stripe.com">Stripe</a> securely
          </p>
        </div>
        <div class="prc-btm-list">
          <img class="prc-bottom-img" src="https://anyshortcut.com/static/img/faq.svg" alt />
          <p class="prc-bottom-text">
            Any question? Please visit our
            <router-link to="/faq">FAQ</router-link>or
            <a href="#">contact us</a>
          </p>
        </div>
      </div>
    </div>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import titleDiv from "../Index/Title";
import footerDiv from "../Index/Footer";

export default {
  name: "pricing",
  components: {
    titleDiv,
    footerDiv
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
.pricing-div {
  max-width: 1280px;
  margin: 0 auto;
}
.title-top {
  margin: 3rem 1rem;
}
.title-h1 {
  font-size: 36px;
  color: #234689;
  font-weight: 600;
  line-height: 60px;
}
.title-text {
  font-size: 17px;
  color: #6d7d93;
  font-weight: 300;
}
.content {
  margin: 0 2rem 2rem;
}
.content-card {
  padding: 30px 0;
  margin: 0 100px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
  max-width: 425px;
  border-radius: 8px;
}
.content-card-img {
  max-width: 100%;
}
.discount {
  text-decoration: line-through;
  color: #7a7a7a;
  margin-top: 10px;
}
.content-card-peading {
  color: #527fe5;
  font-size: 28px;
  line-height: 50px;
  font-weight: 500;
}
.content-card-bottom {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
.content-btn {
  font-size: 16px;
  color: white;
  background-color: #dd4814;
  padding: 8px 36px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
.content-btn:hover {
  background-color: rgba(221, 72, 20, 0.8);
  color: #f1f1f1;
}
.prc-bottom-img {
  width: 48px;
  height: 48px;
}
.content-card-list {
  display: flex;
  margin: 10px 0;
}
.img-right {
  width: 24px;
  padding-right: 10px;
}
.pricing-bottom {
  margin: 4rem 3rem;
  display: flex;
}
.prc-btm-list {
  width: 0;
  padding: 20px;
  flex-grow: 1;
  flex-shrink: 1;
}
.prc-bottom-text {
  font-size: 17px;
  color: #6d7d93;
  font-weight: 400;
}
.prc-bottom-text > a {
  color: #3273dc;
}
.prc-bottom-text > a:hover {
  color: #333;
}
@media screen and (max-width: 798px) {
  .pricing-bottom {
    flex-direction: column;
  }
  .prc-btm-list {
    width: auto;
    padding: 20px 0;
  }
}
</style>