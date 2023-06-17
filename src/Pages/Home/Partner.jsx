import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


import logo1 from '../../assets/logos/Alibaba.svg'
import logo2 from '../../assets/logos/Amazon.svg'
import logo3 from '../../assets/logos/Daraz.pk Logo.svg'
import logo4 from '../../assets/logos/Ebay.svg'
import logo5 from '../../assets/logos/Rakuten.svg'
import logo6 from '../../assets/logos/Target.svg'
import logo7 from '../../assets/logos/Walmart.svg'

const Partner = () => {
    const animation = { duration: 10000, easing: (t) => t }

    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        slides: {
            perView: 4,
            spacing: 10,
        },
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    return (
        <div className="my-14">
            <div className='text-center my-6'>
                <h2 className='text-4xl font-bold text-center text-orange mt-12 mb-4'>Partners</h2>
                <p className='text-2xl font-semibold'>Giant Companies</p>
            </div>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img className="h-14" src={logo1} alt="" /></div>
                <div className="keen-slider__slide number-slide2"><img className="h-14" src={logo2} alt="" /></div>
                <div className="keen-slider__slide number-slide3"><img className="h-14" src={logo3} alt="" /></div>
                <div className="keen-slider__slide number-slide4"><img className="h-14" src={logo4} alt="" /></div>
                <div className="keen-slider__slide number-slide5"><img className="h-14" src={logo5} alt="" /></div>
                <div className="keen-slider__slide number-slide5"><img className="h-14" src={logo6} alt="" /></div>
                <div className="keen-slider__slide number-slide6"><img className="h-14" src={logo7} alt="" /></div>
            </div>
        </div>
    );
};

export default Partner;