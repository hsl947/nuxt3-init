<template>
  <!--	<client-only>-->
  <div class="container">
    <swiper
      class="swiper-wrapper"
      :modules="modules"
      direction="vertical"
      :mousewheel="true"
      slides-per-view="auto"
      :pagination="{ clickable: true }"
      @transitionEnd="onTransitionEnd"
    >
      <swiper-slide class="slide">Slide 1</swiper-slide>
      <swiper-slide class="slide">Slide 2</swiper-slide>
      <swiper-slide class="slide"> Slide 3 </swiper-slide>
      <swiper-slide class="slide last">
        <div class="footer" id="footer">11</div>
      </swiper-slide>
    </swiper>
    <!--	</client-only>-->
  </div>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { nextTick } from 'vue'
const modules = [Pagination, Mousewheel]

// 每次切换动画结束回调
function onTransitionEnd(swiper) {
  if (swiper.progress === 1) {
    swiper.activeIndex = swiper.slides.length - 1
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
.container {
  .swiper-wrapper {
    height: 100vh !important;
  }
  .footer {
    height: 100%;
    background: #333;
  }
}
.slide.last {
  height: 500px !important;
}
</style>
