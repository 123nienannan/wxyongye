<template>
  <div class="keep-payment">
    <div class="keep-top">
       <div class="top-pic"><img src="../assets/images/success.png"></div>
       <div class="top">支付成功</div>
    </div>
    <div class="keep-main">
      <div class="mark-unbind">
        <span class="bind"><span class="bind-pic"><img src="../assets/images/car.png"></span>#1</span>
        <span class="mark">C区203</span>
      </div>
      <div class="mark-enter">
        购买人：张伯伦 <span class="buy-person"><img src="../assets/images/person.png"></span>
      </div>
      <div class="mark-park">
        购买月数：2个月
      </div>
      <div class="mark-exit">
        到期时间：2019/03/01
      </div>
      <div class="keep-info">
        <div class="info-time">
          支付时间：2018/07/11 11:40
        </div>
        <div class="info-money">
          已付费用：<span>34元</span>
        </div>
      </div>
    </div>
    <div class="keep-bottom">
      <div class="bottom-history" @click="renewal">续费记录</div>
      <div class="back">返回</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    renewal () {
      this.$router.push({name:'renewalDecored'})
    }
  },
}
</script>

<style lang="less" scoped>
.keep-payment {
  background-color: #f5f6f7;
  position: absolute;
  width: 100%;
  height: 100%;
  .keep-top {
   text-align: center;
   height: 370px;
   background: url("../assets/images/background-top.png") no-repeat;
   background-size: cover;
   .top-pic {
     display: inline-block;
     padding-top: 140px;
     width: 81px;
     height: 54px;
     img {
       width: 100%;
     }
   }
   .top {
     padding-top: 35px;
     font-size: 28px;
     color: #fff;
   }
  }
  .keep-main {
    margin-top: 30px;
    background-color: #fff;
    padding: 45px 53px 34px 53px;
    box-sizing: border-box;
    .mark-unbind {
      padding-bottom: 35px;
      .unbind {
        color: #fff;
        padding: 6px 15px;
        background-image: linear-gradient(-45deg,
          #8f62fb 0%,
          #ab7bfc 100%);
        border-radius: 4px;
      }
      .bind {
        color: #fff;
        font-size: 24px;
        padding: 6px 15px;
        background-image: linear-gradient(-45deg,
          #2d7afb 0%,
          #3faafc 100%);
        border-radius: 4px;
        .bind-pic {
          margin-right: 6px;
          vertical-align: middle;
          display: inline-block;
          width: 29px;
          height: 25px;
          img {
            width: 100%;
          }
        }
      }
      .mark {
        padding-left: 20px;
        font-size: 40px;
        color: #333;
      }
    }
    .mark-enter {
      font-size: 26px;
      color: #666;
      padding-bottom: 29px;
      .buy-person {
        margin-left: 5px;
        display: inline-block;
        vertical-align: middle;
        width: 32px;
        height: 32px;
        img {
          width: 100%;
        }
      }
    }
    .mark-park {
      font-size: 26px;
      color: #666;
      padding-bottom: 29px;
    }
    .mark-exit {
      font-size: 26px;
      color: #666;
      padding-bottom: 29px;
      border-bottom: 1px solid #ededed;
    }
    .keep-info {
      margin-top: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info-time {
        font-size: 26px;
        color: #666;
      }
      .info-money {
        font-size: 24px;
        color: #333;
        span {
          font-size: 48px;
          color: #f1c120;
          vertical-align: middle;
        }
      }
    }
  }
  .keep-bottom {
    padding: 56px 55px 0;
    .bottom-history {
        cursor: pointer;
        text-align: center;
        height: 80px;
        line-height: 80px;
        width: 100%;
        font-size: 30px;
        color: #000;
        background-color: #f1c120;
        margin-bottom: 32px;
        border-radius: 8px;
    }
    .back {
        text-align: center;
        height: 80px;
        line-height: 80px;
        width: 100%;
        font-size: 30px;
        color: #000;
        background-color: #fff;
        border-radius: 8px;
        cursor: pointer;
    }
  }
}
</style>

