<template>
  <view>
   <swiper :indicator-dots="indicatorDots" class="content" :current="currentIndex"
      previous-margin="40px" next-margin="40px" @change="swiperChange" lazy-load="true"
      :autoplay="autoplay" :interval="interval" :duration="duration">
      <block :key="index" v-for="(item, index) in imgUrls">
        <swiper-item>
            <view v-if="clickItem && clickItem.index ===index" class="card">
              <image class="card-image-active" mode='aspectFill' :src="item"/>
            </view>
            <view v-else="!clickItem" class="card">
              <image v-if="currentIndex===index" class="card-image-active"  @tap="tapImage({item, index})" mode='aspectFill' :src="item"/>
              <image v-if="currentIndex!==index" class='card-image' @tap="tapImage" mode='aspectFill' :src="item"/>
            </view>
            <view class="card-circle">
              <text class="card-circle-text">{{date}}</text>
            </view>
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>
<script>
export default {
  name: "swipeCard",
  // components: {
  //     countUp
  // },
  props: {
    text: String,
    imgUrls: Array,
    tapImageCallback: Function,
    swiperChangeCallback: Function
  },
  data() {
    return {
      indicatorDots: false,
      date: "4月28日",
      autoplay: false,
      currentIndex: 0,
      clickItem: null,
      interval: 5000,
      duration: 1000
    };
  },
  methods: {
    tapImage(item) {
      console.log("tapImage", item);
      this.clickItem = item;
      this.tapImageCallback(item);
    },
    swiperChange(e) {
      console.log("swiperChange", e);
      this.currentIndex = e.target.current;
      // this.swiperChangeCallback(e);
    }
  },
  // mounted() {
  //   // console.log("swipeCard --- mounted", this.imgUrls);
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate", this.currentIndex);
  // },
  // updated() {
    
  //   console.log("updated", this.currentIndex, this.clickItem, this.clickItem.index ===this.currentIndex);
  // }
};
</script>
<style>
.content {
  height: 410px;
}
.card {
  padding: 10px 30px;
  height: 95%;
}
@keyframes reversal {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-180deg);
  }
}
.card-image-reverse{
  height: 100%;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.19);
  animation: reversal 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.card-image-active {
  height: 100%;
  width: 100%;
  border-radius: 6px;
  animation: bounce-in 1s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.19);
}
.card-image {
  height: 90%;
  width: 90%;
  margin: 5% 0;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.19);
}
.card-circle {
  height: 60px;
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 60px;
  background-color: rgb(89, 142, 89);
  border: 1px solid rgb(193, 254, 193);
  border-radius: 30px;
  transform: rotate(-15deg);
}
.card-circle-text {
  font-size: 12px;
  margin-left: 5px;
  color: white;
}
</style>
