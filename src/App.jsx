import { useState } from 'react'
import './App.css'
import Header from './components/layouts/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import 'swiper/css/pagination'
import Slide_1 from './assets/images/slide1.jpg'

function App() {

  return (
    <main>
      <div className="banner-ltr">
        <Header />
        <div className="container">
          <div className="section-slide">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              modules={[Autoplay, Pagination]}
              pagination={{clickable: true}}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="width-full"
            >
              <SwiperSlide>
                <img src={Slide_1} className="width-full" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide_1} className="width-full" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide_1} className="width-full" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide_1} className="width-full" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

