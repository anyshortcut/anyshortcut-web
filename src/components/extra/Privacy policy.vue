<template>
  <div>
    <titleDiv></titleDiv>
    <div class="center">
      <div class="heading">
        <h1 class="title">Privacy Policy</h1>
        <p class="text">Last updated: April 19th, 2018</p>
      </div>
      <div class="container">
        <p>Anyshortcut.com, ("Anyshortcut","we",or"us") operates the Anyshortcut 
          chrome extension and the website <a href="http://localhost:8080/">https://anyshortcut.com</a> (collectively, 
          the “Service” or “Products”). We believe that your privacy is a fundamental 
          right. This page informs you of our policies and practices regarding the 
          collection, use and disclosure of information which personally identifies 
          you ("Personal Information") when you use our Service.</p>
        <p>We use your Personal Information for providing and improving the Service. 
          By using the Service, you agree to the collection and use of your Personal 
          Information in accordance with this Privacy Policy.</p>
        <h3>Information we do collect and why</h3>
        <p>We collect very little personal information about our users. Here is a list 
          of the “Personal Information” we may collect, and why we collect it:</p>
        <ul>
          <li>Your username and email address which we obtain from Google account. 
            This lets us create your account, provide you with convenient and personalized 
            access to your account and deliver and support our Products. This information 
            also helps us communicate with you about your use of our Products, product 
            announcements and software updates.</li>
          <li>The Anyshortcut products and services you use. This information helps us deliver
             and support our Products and respond to your requests for assistance. We also 
             collect this information to improve our understanding of how our users use our 
             Products.</li>
        </ul>
        <h3>Information we do not collect and why</h3>
        <ul>
          <li>Your payment information. Our payment gateway is powered by Stripe, the most 
            leading online payment gateway in the world. All of your payment information is 
            handled by Stripe securely, Anyshortcut has no idea with that information.</li>
        </ul>
        <h3>Security</h3>
        <p>The security of your Personal Information is important to us, and we strive to 
          implement and maintain reasonable, commercially acceptable security procedures and 
          practices appropriate to the nature of the information we store, in order to protect 
          it from unauthorized access, destruction, use, modification, or disclosure.</p>
        <p>However, please be aware that no method of transmission over the internet, or method 
          of electronic storage is 100% secure and we are unable to guarantee the absolute security 
          of the Personal Information we have collected from you.If You have reason to believe 
          that Your interaction with us is no longer secure (for example, if You feel that the 
          security of Your account has been compromised), please contact us immediately.</p>
        <h3>Children's policy</h3>
        <p>Our service not intended for use by children under the age of 13, however we does not 
          knowingly collect Personal Information from children under the age of 13. If you are 
          a parent or guardian and you learn that your Children have provided us with Personal 
          Information, please contact us. If we become aware that we have collected Personal 
          Information from a child under age 13 without verification of parental consent, we take 
          steps to remove that information from our servers.</p>
        <h3>Updates to this Privacy Policy</h3>
        <p>We reserve the right to update or change our Privacy Policy at any time and you should 
          check this Privacy Policy periodically. Your continued use of the Service after we post 
          any modifications to the Privacy Policy on this page will constitute your acknowledgment 
          of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
        <p>The "Last updated" legend at the top of this Privacy Policy indicates when this Privacy Policy 
          was last revised. Any changes are effective when we post the revised Privacy Policy on the 
          Services.</p>
        <h3>Contact us</h3>
        <p>If You have any questions about this Privacy Policy, please contact us at <a>legal@anyshortcut.com</a>.</p>
      </div>
    </div>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import titleDiv from '../Index/Title';
import footerDiv from '../Index/Footer'

export default {
  name:'privacy',
  components: {
    titleDiv,
    footerDiv
  }
}
</script>

<style lang='scss' scoped>
  *{
    padding: 0;
    margin: 0;
    // text-align: center;
  }
  .center {
    max-width: 1280px;
    margin:0 auto;
  }
  .heading {
    text-align: center;
    padding: 3rem;
  }
  .title {
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
  .container {
    padding: 1rem 3.5rem 3.5rem;
    color: #4a4a4a
  }
  .container p {
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: 400;
    font-family: Open Sans,sans-serif;
  }
  .container h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  a{
    color: #3273dc;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: #4a4a4a
  }
  .container ul {
    box-sizing: border-box;
    margin: 1rem 0 1rem 2rem;
  }
</style>








