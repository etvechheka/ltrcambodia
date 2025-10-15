import React from 'react';
import Header from '../components/Layout/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import 'swiper/css/effect-fade'

import Slide_1 from '../assets/images/Slide-1.webp'
import Slide_2 from '../assets/images/Slide-2.webp'
import Slide_3 from '../assets/images/Slide-3.webp'
import Icon_1 from '../assets/images/procurement.png'
import ProductGrid from '../components/ProductGrid';
import { ServiceLayout } from '../components/Service';
import { Overview } from '../components/Overview';

const sampleProducts = [
    {
        id: 1,
        name: "Food Ingredients",
        image: new URL('../assets/images/spaghetti.jpg', import.meta.url).href,
        price: 99,
        description: "Noise cancelling, over-ear comfort.",
    },
    {
        id: 2,
        name: "Utensils & Household",
        image: new URL('../assets/images/utensils.webp', import.meta.url).href,
        price: 199,
        description: "Track fitness, sleep, and notifications.",
    },
    {
        id: 3,
        name: "Packaging",
        image: new URL('../assets/images/packaging.avif', import.meta.url).href,
        price: 59,
        description: "Ergonomic design with RGB lighting.",
    },
    {
        id: 4,
        name: "Seasoning",
        image: new URL('../assets/images/seasoning.jpg', import.meta.url).href,
        price: 120,
        description: "Tactile switches for productivity & gaming.",
    },
];


const HomePage = () => {

    const handleSelect = (product) => {
        alert(`Selected: ${product.name}`);
    };
    return (
        <>
            <main>
                <Header />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Autoplay, EffectFade]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    effect="fade"
                    className="width-full"
                >
                    <SwiperSlide>
                        <img src={Slide_1} className="width-full" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide_2} className="width-full" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide_3} className="width-full" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slide_1} className="width-full" alt="" />
                    </SwiperSlide>
                </Swiper>
                <ServiceLayout />
                
                <ProductGrid products={sampleProducts} onSelect={handleSelect} />
                <Overview />
            </main>
        </>
    )
}

export default HomePage