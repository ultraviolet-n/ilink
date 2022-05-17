import Slide from "./slide/slide";
import "./slider.scss"
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import React, { useState } from "react";


const Slider = (props) => {
    const [res, setres] = useState(2) 
    window.onload = function() {
        if (window.innerWidth > 900) {
            setres(2)
        }
        else { setres(1) }
      };
    window.onresize = function (event) {
        if (window.innerWidth > 900) {
            setres(2)
        }
        else { setres(1) }
    };


    const paginationLabel = React.useRef(null);


    let i = 0;
    let arrpost = props.state.map((post) => <SwiperSlide key={i++}><Slide photo={post.photo} name={post.name} date={post.date} comment={post.comment} /></SwiperSlide>)

    return (

        <div className="slider">
            <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                slidesPerView={res}
                spaceBetween={24}
                navigation={{
                    prevEl: props.navigationPrevRef.current,
                    nextEl: props.navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = props.navigationPrevRef.current;
                    swiper.params.navigation.nextEl = props.navigationNextRef.current;
                    swiper.params.pagination.el = paginationLabel.current;
                }}
                pagination={{
                    el: paginationLabel,
                    clickable: true
                }}>
                {arrpost}
            </Swiper>
            <div className="container">
                <div className="slider-pagination" ref={paginationLabel}></div>
            </div>
        </div>
    )
}
export default Slider;