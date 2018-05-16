<template>
  <view class="page-body-wrapper">
    <swipeCard :imgUrls="imageList" :swiperChangeCallback="swiperChange" :tapImageCallback="tapImage" :currentIndex="index"></swipeCard>
    <!-- <view class="sk-wandering-cubes">
      <view class="sk-cube sk-cube1"></view>
      <view class="sk-cube sk-cube2"></view>
    </view> -->
  </view>
</template>

<script>
import swipeCard from "@/components/swipeCard";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    swipeCard
  },
  data() {
    return {
      imageList: [
        "http://n1-q.mafengwo.net/s10/M00/BE/F5/wKgBZ1nHn76AWhleADeKt7ziyeg01.jpeg?imageView2%2F2%2Fw%2F700%2Fh%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90",
        "http://p3-q.mafengwo.net/s10/M00/48/D7/wKgBZ1nJMHyAVvPjAB4P1Z3XyOM69.jpeg?imageView2%2F2%2Fw%2F700%2Fh%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90",
        "http://n2-q.mafengwo.net/s10/M00/49/DC/wKgBZ1nJMPiAeKODACig1Q2SUtA59.jpeg?imageView2%2F2%2Fw%2F700%2Fh%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90",
        "http://b1-q.mafengwo.net/s10/M00/50/D6/wKgBZ1oSKmuATL1JAB4dv3D9cgk61.jpeg?imageView2%2F2%2Fw%2F700%2Fh%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90",
        "http://n3-q.mafengwo.net/s10/M00/4A/D4/wKgBZ1olWLqAT8iQABgqpcVnSwE02.jpeg?imageView2%2F2%2Fw%2F700%2Fh%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90"
      ]
    };
  },
  computed: mapGetters({
    index: 'homePage/index'
  }),
  methods: {
    ...mapMutations({
      setIndex: "homePage/setIndex"
    }),
    tapImage(e) {
      console.log("homePage tapImage", e);
      setTimeout(()=>wx.navigateTo({url:"../articlePage/main"}), 200)
    },
    swiperChange(e) {
      // console.log("homePage swiperChange", e.target.current);
      this.setIndex({ index: e.target.current });
    }
  },
};
</script>
<style>
.sk-wandering-cubes .sk-cube {
  background-color: #67cf22;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;
  animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;
}

.sk-wandering-cubes .sk-cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-wanderingCube {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -webkit-transform: translateX(50px) scale(0.5);
    transform: translateX(50px) scale(0.5);
  }

  50% {
    /* Hack to make FF rotate in the right direction */
    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);
    transform: translateX(30px) translateY(30px) rotate(-179deg);
  }

  /* 50.1% {
    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);
    transform: translateX(30px) translateY(30px) rotate(-180deg);
  } */

  75% {
    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
    transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
  }

  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
page {
  height: 100%;
  width: 100%;
}
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
