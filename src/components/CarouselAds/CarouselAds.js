import React from 'react';
import './CarouselAds.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination,Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import "swiper/css/navigation";


const deskads = [
    {
        id:1,
        img:"https://www.dial4trade.com/staticdt/images/slide-export-lead.jpg",
    },
    {
        id:2,
        img:"https://cdn.d4tcdn.com/staticdt/images/slide-sitemanager.jpg",
    },
    {
        id:3,
        img:"https://cdn.d4tcdn.com/staticdt/images/slide-home-furnishings.jpg",
    },
    {
        id:4,
        img:"https://cdn.d4tcdn.com/staticdt/images/slide-covid.jpg",
    },
    {
        id:5,
        img:"https://cdn.d4tcdn.com/staticdt/images/slide-industrial-supplies.jpg",
    }
]


const mobads = [
    {
        id:1,
        img:"https://cdn.d4tcdn.com/staticdt/mobile/images/slide-buyer-connect.jpg"
    },
    {
        id:2,
        img:"https://cdn.d4tcdn.com/staticdt/mobile/images/slide-food-products-beverage.jpg"
    },
    {
        id:3,
        img:"https://cdn.d4tcdn.com/staticdt/mobile/images/slide-industrial-supplies.jpg"
    },
    {
        id:4,
        img:"https://cdn.d4tcdn.com/staticdt/mobile/images/slide-home-furnishings.jpg"
    },
    {
        id:5,
        img:"https://cdn.d4tcdn.com/staticdt/mobile/images/slide-covid.jpg"
    }
]

const CarouselAds = () => {
  return (
    <div className='carousel'>

        <div className='desk-swiper'>
             {/* slider */}
        <Swiper
        style={{
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "20px",
        }}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[ Navigation , Autoplay]}
        className="mySwiper"
        >
            {
                deskads.map((client,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className='advertise'>
                                 <img src={client.img} alt=''/>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

        </div>

        <div className='mob-swiper'>

             {/* slider */}
        <Swiper
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        slidesPerView={1}
        loop={true}
        pagination={{clickable:true}}
        modules={[Pagination , Autoplay]}
        className="mySwiper"
        >
            {
                mobads.map((client,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className='advertise'>
                                 <img src={client.img} alt=''/>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
 

        </div>
       
    </div>
  )
}

export default CarouselAds