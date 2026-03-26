"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainSlide() {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: false,
        fade: true,
    };

    return (
        <Slider ref={sliderRef} {...settings} className="main-slider">
            <div className="main-slider-item">
                <Image className="pc" src="/images/banner1.png" alt="에코원 칠보세라믹 배너" width={2560} height={700} priority quality={100} />
                <Image className="mo" src="/images/banner_mo1.png" alt="에코원 칠보세라믹 배너" width={960} height={1500} priority quality={100} />
            </div>
            <div className="main-slider-item">
                <Image className="pc" src="/images/banner2.png" alt="에코원 칠보세라믹 배너" width={2560} height={700} priority quality={100} />
                <Image className="mo" src="/images/banner_mo2.png" alt="에코원 칠보세라믹 배너" width={960} height={1500} priority quality={100} />
            </div>
            <div className="main-slider-item">
                <Image className="pc" src="/images/banner3.png" alt="에코원 칠보세라믹 배너" width={2560} height={700} priority quality={100} />
                <Image className="mo" src="/images/banner_mo3.png" alt="에코원 칠보세라믹 배너" width={960} height={1500} priority quality={100} />
            </div>
        </Slider>
    )
}