<template>
  <div class="decored-regular">
    <div class="regular-top">
      <div class="recordinput">
        未入库
      </div>
      <div class="check">
        <span class="check-bind">已绑定</span>
        沪K34534
      </div>
      <div class="regular-text">
        <span>您的车位</span>
        <span class="special">续费记录</span>
      </div>
    </div>
    <div class="regular-main">
      <ul>
        <li>
          <div class="regular-time">
            1号车位
          </div>
          <div class="unbind-record">
            <h2>C区203</h2>
            <span>未停车</span>
          </div>
          <div class="regular-keep">
            <div class="regularLf">
              <img v-if="!showIcon" src="../assets/images/fade-colock.png">
              <img v-if="showIcon" src="../assets/images/color-colock.png"><span>2019/ 01/01 到期</span>
            </div>
            <div class="regularRf">续期</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showIcon:true
    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.decored-regular {
  background-color: #f5f6f7;
  position: absolute;
  width: 100%;
  height: 100%;
  .regular-top {
    padding: 100px 48px 0;
    height: 459px;
    background: url("../assets/images/top-background.png") no-repeat;
    background-size: cover;
    .recordinput {
      margin-bottom: 40px;
      color: #fff;
      font-size: 50px;
      span {
        color: #ffffff;
        font-size: 30px;
      }
    }
    .check {
      margin-bottom: 100px;
      font-size: 42px;
      color: #fff;
      letter-spacing: 4px;
      .check-bind {
        padding: 7px 18px;
        color: #fff;
        background-image: linear-gradient(-45deg,
          #2d7afb 0%,
          #3faafc 100%);
        border-radius: 4px;
      }
    }
    .regular-text {
      display: flex;
      justify-content: space-between;
      color: #fff;
      font-size: 26px;
      .special {
        color: #f1c120;
      }
    }
  }
  .regular-main {
    margin-top: -170px;
    padding: 0px 48px 0;
    box-sizing: border-box;
    li {
      position: relative;
      margin-bottom: 25px;
      padding: 34px 30px 23px 44px;
      background-color: #ffffff;
      box-shadow: 0px 10px 13px 1px
        rgba(90, 90, 90, 0.08);
      border-radius: 10px;
      .unbind-record {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 62px;
         h2 {
           font-size: 42px;
           color: #333;
           letter-spacing: 4px;
         }
         span {
           font-size: 28px;
           color: #666;
         }
      }
      .regular-time {
        padding-bottom: 28px;
        font-size: 24px;
        color: #666;
      }
      .regular-keep {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .regularLf {
          img {
            vertical-align: middle;
            width: 46px;
            height: 46px;
          }
          span {
            padding-left: 22px;
          }
        }
        .regularRf {
          padding: 22px 72px;
          font-size: 28px;
          color: #000;
          border-radius: 35px;
          border: solid 1px #f1c120;
        }
      }
    }
  }
}
</style>
