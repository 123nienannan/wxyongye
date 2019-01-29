<template>
  <div class="renewal-decored">
    <div class="renewal-top">
      <div class="recordinput">
        全部&nbsp;
        <span>C203</span>
        <span>A101</span>
      </div>
      <div class="check">
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
        <span>共3条</span>
      </div>
    </div>
    <div class="renewal-main">
      <ul>
        <li>
          <div class="unbind-record">
            <div class="unbindrecord-left">
              <div class="bindtext"><span><img src="../assets/images/car.png"></span> #1</div>
              <span class="brand">C203</span>
            </div>
            <div class="unbindrecord-right">
              剩余<span>3</span>天
            </div>
          </div>
          <div class="renewal-time">
            购买月数：2个月
          </div>
          <div class="renewal-park">
            到期时间：2019/03/01
          </div>
          <div class="renewal-money">支付费用：<span>34</span></div>
          <div class="renewal-date">2018/07/11 11:32</div>
          <div class="renewal-info">
            <div class="pic">
              <img src="../assets/images/person.png">
            </div>
            张伯伦
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
    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.renewal-decored {
  background-color: #f5f6f7;
  position: absolute;
  width: 100%;
  height: 100%;
  .renewal-top {
    padding: 100px 48px 0;
    height: 355px;
    background: url("../assets/images/top-background.png") no-repeat;
    background-size: cover;
    .recordinput {
      margin-bottom: 65px;
      color: #f1c120;
      font-size: 40px;
      span {
        color: #ffffff;
        font-size: 30px;
      }
    }
    .check {
     display: flex;
     justify-content: space-between;
     select {

     }
     span {
       color: #fff;
       font-size: 26px;
     }
    }
  }
  .renewal-main {
    margin-top: -200px;
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
        margin-bottom: 28px;
        .unbindrecord-left {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .bindtext {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 4px;
            font-size: 24px;
            color: #fff;
            padding: 6px 15px;
            background-image: linear-gradient(-45deg,
            #2d7afb 0%,
            #3faafc 100%);
            .span {
              vertical-align: middle;
              display: inline-block;
              width: 29px;
              height: 25px;
              img {
                width: 100%;
              }
            }
          }
          .brand {
            font-size: 42px;
            color: #333;
            padding-left: 20px;
          }
        }
        .unbindrecord-right {
          display: flex;
          justify-content: flex-start;
          font-size: 28px;
          color: #333;
          span {
            color: #f1c120;
            font-size: 36px;
            letter-spacing: 5px;
          }
        }
      }
      .renewal-time {
        padding-bottom: 24px;
        font-size: 26px;
        color: #666;
      }
      .renewal-park {
        padding-bottom: 24px;
        font-size: 26px;
        color: #666;
      }
      .renewal-money {
        font-size: 24px;
        color: #333;
        text-align: right;
        padding-bottom: 22px;
        span {
          font-size: 32px;
          color: #f1c120;
        }
      }
      .renewal-date {
        text-align: right;
        font-size: 22px;
        color: #999;
      }
      .renewal-info {
        position: absolute;
        bottom: 36px;
        left: 48px;
        font-size: 26px;
        color: #666;
        display: flex;
        align-items: center;
        .pic {
          margin-right: 20px;
          width: 32px;
          height: 32px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
