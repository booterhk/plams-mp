<template>
  <div class="page-body-wrapper">
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      
    };
  },
  computed: mapGetters({
  }),
  methods: {
    ...mapMutations({
    }),
    swiperChange(e) {
      // console.log("homePage swiperChange", e.target.current);
    }
  },
};
</script>
<style>

</style>
