<template>
    <div class="payment">
      <div  class="top">
        <h2 class="subtitle">You have no credit card added</h2>
        <div class="subtext">Please add your credit card for next billing renew.</div>
      </div>
      <div>
        <h3 class="formtitle">Enter your payment details securely <img src="../../assets/padlock.svg" alt=""></h3>
        <form action="#" class="formlist">
          <div class="input-list">
            <span>Name</span>
            <input type="text" placeholder="jane Doe" class="field">
          </div>
          <div class="input-list">
            <span>Card</span>
            <input type="text" placeholder="卡号" class="field">
          </div>
          <button class="btn">Add my credit card</button>
        </form>
        <a href=""><img src="" alt=""></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PaymentMethod"
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0
  }
  .payment {
    margin: 50px auto;
    text-align: center
  }
  .top {
    margin-bottom: 80px
  }
  .subtitle {
    font-size: 22px;
    line-height: 30px;
    color: #44485b;
    font-family: Poppins,sans-serif;
    font-weight: 500;
    letter-spacing: 0;
  }
  .subtext {
    font-size: 15px;
    line-height: 26px;
    font-family: Open Sans,sans-serif;
    font-weight: 400;
    color: #6d7d93;
    letter-spacing: 0;
  }
  .formtitle {
    font-size: 17px;
    line-height: 30px;
    font-family: Poppins,sans-serif;
    font-weight: 500;
    color: #527fe5;
    letter-spacing: 0;
  }
  .formtitle>img {
    height: 16px
  }
  .formlist {
    width: 480px;
    margin: 20px auto;
    color: #8898aa;
  }
  .input-list {
    background-color: white;
    margin-bottom: 20px;
    box-shadow: 1px 5px 6px 2px rgba(0,0,0,0.1);
    padding-left: 20px;
    height: 40px;
    border-radius: 4px
  }
  .input-list>span {
    display: inline-block;
    width: 20%;
    line-height: 40px;
    float: left;
    text-align: right;
  }
  .field {
    border: none;
    height: 40px;
    width: 70%;
    float: right;
    padding: 0 10px;
    outline: none;
  }
  
  .btn {
    width: 100%;
    height: 35px;
    background-color: #507ce8;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #3f6bdb
  }
</style>