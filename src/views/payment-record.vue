<template>
  <div class="payment-record">
    <div class="record-top">
      <div class="recordinput">
        <input type="text" placeholder="请输入车牌号">
        <div class="recordimg"><img src="../assets/images/yellow-search.png"></div>
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
    <div class="record-main">
      <ul>
        <li>
          <div class="unbind-record">
            <div class="unbindrecord-left">
              <span class="text" v-if="showBind">未绑定</span>
              <span class="bindtext" v-if="!showBind">绑定</span>
              <span class="brand">沪A94590</span>
            </div>
            <div class="unbindrecord-right">
              <div class="gsp"><img src="../assets/images/map.png" alt=""></div>
              <span>C区203</span>
            </div>
          </div>
          <div class="record-time">
            入场时间：2018/07/11 09:32
          </div>
          <div class="record-park">
            停车时长：10小时59分钟
          </div>
          <div class="record-money">支付费用：<span>34</span></div>
          <div class="record-date">2018/07/11 11:32</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     showBind:true,
    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.payment-record {
  background-color: #f5f6f7;
  position: absolute;
  width: 100%;
  height: 100%;
  .record-top {
    padding: 67px 48px 0;
    height: 355px;
    background: url("../assets/images/top-background.png") no-repeat;
    background-size: cover;
    .recordinput {
      margin-bottom: 65px;
      position: relative;
      input {
        font-size: 30px;
        color: #ffffff;
        outline: none;
        border: 0;
        width: 100%;
        text-indent: 2em;
        height: 80px;
        background-color: #000000;
        box-shadow: 0px 4px 8px 0px
          rgba(0, 0, 0, 0.06);
        border-radius: 40px;
      }
      .recordimg {
        cursor: pointer;
        position: absolute;
        right: 50px;
        top: 19px;
        width: 42px;
        height: 42px;
        img {
          width: 100%;
        }
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
  .record-main {
    margin-top: -155px;
    padding: 0px 48px 0;
    box-sizing: border-box;
    li {
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
          .text {
          color: #fff;
          background-image: linear-gradient(-45deg,
            #8f62fb 0%,
            #ab7bfc 100%);
          border-radius: 4px;
          padding: 6px 15px;
          }
          .bindtext {
            color: #fff;
            padding: 6px 15px;
            background-image: linear-gradient(-45deg,
            #2d7afb 0%,
            #3faafc 100%);
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
          .gsp {
            width: 26px;
            height: 30px;
            img {
              width: 100%;
            }
          }
          span {
            padding-left: 15px;
            font-size: 28px;
            color: #333;
          }
        }
      }
      .record-time {
        padding-bottom: 24px;
        font-size: 26px;
        color: #666;
      }
      .record-park {
        padding-bottom: 24px;
        font-size: 26px;
        color: #666;
      }
      .record-money {
        font-size: 24px;
        color: #333;
        text-align: right;
        padding-bottom: 22px;
        span {
          font-size: 32px;
          color: #f1c120;
        }
      }
      .record-date {
        text-align: right;
        font-size: 22px;
        color: #999;
      }
    }
  }
}
</style>
