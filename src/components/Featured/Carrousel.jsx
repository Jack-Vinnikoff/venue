import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'

import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'

const sliderTitle = [ slide_one, slide_two, slide_three ]

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>

                {sliderTitle.map((title, ind) => (
                    <div key={ind}>
                        <div
                            className="carrousel_image"
                            style={{
                                background: `url(${title})`,
                                height: `${window.innerHeight}px`,
                            }}
                        >

                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    )
}

export default Carrousel