"use client"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CarouselComp() {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src="/images/banner/banner1.jpg" />
                </div>
                <div>
                    <img src="/images/banner/banner2.jpg" />
                </div>
                <div>
                    <img src="/images/banner/banner3.jpg" />
                </div>
            </Carousel>
        </div>
    )
}