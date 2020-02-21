<template>
    <div class="payment">
      <div  class="top">
        <h2>You have no credit card added</h2>
        <div>Please add your credit card for next billing renew.</div>
      </div>
      <div>
        <h3>Enter your payment details securely <img src="" alt=""></h3>
        <form action="" class="formlist">
          <div class="input-list">
            <span class="">name</span>
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
  .formlist {
    width: 480px;
    margin: 20px auto
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
  }
  
  .btn {
    width: 100%;
    height: 35px;
    background-color: blue;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px
  }
</style>