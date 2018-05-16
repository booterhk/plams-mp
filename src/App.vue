<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    try {
      var value = wx.getStorageSync("key");
      if (value) {
        // Do something with return value
      }
    } catch (e) {
      // Do something when catch error
    }
    try {
      const logs = wx.getStorageSync("logs") || [];
    } catch (e) {
      console.log("setStorageSync", e);
    }
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    wx.getSystemInfo({
      success: function(res) {
        console.log("getSystemInfo", res);
      }
    });
    console.log("app created and cache logs by setStorageSync");
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
