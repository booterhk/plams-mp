<template>
  <div class="counter-warp">
    <input type="text" v-model.lazy="textValue" @input="inputChange">
    <p>{{doubleText}}</p>
    <ul :key="index"  v-for="(card, index) in items" @click="bindPickerChange(card, index)">
      {{card.value}}
    </ul>
  </div>
</template>

<script>
// Use Vuex

export default {
  data() {
    return {
      index: 0,
      textValue: "121212",
      array: ["A", "B", "C"],
      items: [
        { name: "USA", value: "美国" },
        { name: "CHN", value: "中国", checked: "true" },
        { name: "BRA", value: "巴西" },
        { name: "JPN", value: "日本" },
        { name: "ENG", value: "英国" },
        { name: "TUR", value: "法国" }
      ]
    };
  },
  computed: {
    doubleText() {
      return this.textValue + this.textValue;
    }
  },
  watch: {
    textValue(val, oldVal) {
      console.log("watch", val, oldVal);
    }
  },
  methods: {
    bindPickerChange(e, index) {
      console.log(e.name);
      this.index = e;
      switch (index) {
        case 0:
          wx.chooseInvoiceTitle({
            success(res) {
              console.log("success", res);
            }
          });
          break;
        case 1:
          wx.chooseAddress({
            success(res) {
              console.log("success", res);
            }
          });
          break;
        case 2:
          wx.getHCEState({
            success: function(res) {
              console.log(res.errCode);
              wx.onHCEMessage(function(res) {
                if (res.messageType === 1) {
                  wx.sendHCEMessage({ data: buffer });
                }
              });
              wx.startHCE({
                aid_list: ["F222222222"],
                success: function(res) {
                  console.log(res.errMsg);
                  wx.onHCEMessage(function(res) {
                    if (res.messageType === 1) {
                      wx.sendHCEMessage({ data: buffer });
                    }
                  });
                }
              });
            }
          });
          break;
        case 3:
          break;
        default:
          break;
      }

      // wx.navigateTo({url: '../componentsTest/main'})
    },
    inputChange(e) {
      console.log(e.target.value);
      this.textValue = e.target.value;
    },
    radioChange(e) {
      console.log("radio发生change事件，携带value值为：", e.target.value);
    }
  }
};
</script>
<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
