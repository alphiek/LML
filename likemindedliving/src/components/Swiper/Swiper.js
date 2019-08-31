import React from 'react'
import Swiper from 'react-id-swiper'
import Card from '../cards/Card'

const SwiperCarousel = ({ data }) => {
    let info = data
    let slideData = Object.entries(info)
    let slides = slideData.map(item => <div id={item[0]}><Card data={item[1]} /></div>)

    const params = {
        slidesPerView: 4,
        spaceBetween: 50,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    }
    return (
        <Swiper {...params}>
            {slides}
        </Swiper>
    )
}

export default SwiperCarousel