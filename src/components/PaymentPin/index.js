/*
 * @Description  : PaymentPin 全局注册入口
 * @Author       : yijian
 * @Version      : 3.0.0
 * @Date         : 2021-06-28 15:04:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-05 16:35:00
 */

import PaymentPinVUE from "./PaymentPin.vue";

const PaymentPin = {
  install: function(Vue) {
    Vue.component("PaymentPin", PaymentPinVUE);
  }
};

export default PaymentPin;
