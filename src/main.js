import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
});
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      'pages/index/main',
      'pages/articlePage/main', 
      '^pages/homePage/main', 
      'pages/test/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '棕榈树',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor:'#1296db',
      backgroundColor:'#FFFFFF',
      list: [{
        pagePath: "pages/homePage/main",
        text: "首页",
        iconPath: "static/image/homeScreen-sleep.png",
        selectedIconPath:"static/image/homeScreen-active.png",
      }, {
        pagePath: "pages/index/main",
        text: "我的",
        iconPath: "static/image/myInfo-sleep.png",
        selectedIconPath:"static/image/myInfo-active.png",
      }]
    }
  }
}
