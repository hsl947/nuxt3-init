import { createApp } from 'vue'
import SwiperClass, { Pagination } from 'swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'

// use swiper modules
SwiperClass.use([Pagination])

const app = createApp()