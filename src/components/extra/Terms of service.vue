<template>
  <div>
    <titleDiv></titleDiv>
    <div></div>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import titleDiv from '../Index/Title';
import footerDiv from '../Index/Footer'

export default {
  name:'terms',
  components:{
    titleDiv,
    footerDiv
  }
}
</script>

<style lang="scss" scoped>
  *{
    padding:0;
    margin: 0;
    text-align: center;
  }
</style>
