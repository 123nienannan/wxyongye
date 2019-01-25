<template>
  <div class="bind-payment">
    <h2>停车缴费</h2>
    <div class="title">输入或选择车牌号支付停车费用</div>
    <div class="put">
      <input type="text" placeholder="请输入车牌号">
      <div class="icon-pic" @click="payment">
        <img src="../assets/images/search.png">
      </div>
    </div>
    <div class="history">
      <span>沪A3489</span>
    </div>
    <div class="btn">
      <span class="keep" v-if="showKeep">车位续费</span>
      <span class="decored">缴费记录</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showKeep:true
    }
  },
  methods: {
    payment() {
      this.$router.push({name:'temporaryStop'})
    }
  },
}
</script>

<style lang="less" scoped>
.bind-payment {
    overflow-y: scroll;
    top:0;
    left:0;
    right:0;
    bottom:0;
    position: absolute;
    padding: 140px 45px 100px 45px;
    background: url("../assets/images/background.png") no-repeat;
    background-size: cover;
    h2 {
      font-size: 50px;
      color: #fff;
      padding-bottom: 20px;
    }
    .title {
      font-size: 24px;
      color: #fff;
      opacity: 0.8;
      padding-bottom: 200px;
    }
    .put {
        position: relative;
       input {
        border: 0;
        outline: none;
        height: 88px;
        width: 100%;
        font-size: 30px;
        color: #999;
        line-height: 88px;
        text-indent: 2em;
        box-shadow: 0px 4px 8px 0px
      rgba(0, 0, 0, 0.06);
        border-radius: 44px;
      }
      .icon-pic {
        position: absolute;
        right: 48px;
        top: 23px;
        width: 42px;
        height: 42px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .history {
      margin-top: 75px;
      span {
        cursor: pointer;
        background-color: #f1c120;
	      border-radius: 44px;
        display: inline-block;
        padding: 32px 70px;
        font-size: 28px;
        color: #000;
      }
    }
    .btn {
      margin-top: 220px;
      span {
        display: inline-block;
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        color: #000;
        font-size: 30px;
        border-radius: 8px;
        &.keep {
         background-color: #f1c120;
         margin-bottom: 30px;
        }
        &.decored {
          background-color: #fff;
        }
      }
    }
}
</style>
