import React from 'react'
import Slider from 'react-slick'

import author1 from '../../../assets/img/testimonial/author-9.png'
import author2 from '../../../assets/img/testimonial/author-10.png'
import author3 from '../../../assets/img/testimonial/author-11.png'

const testimonialslide = [
    { img: author1, name: 'Persona 1', post: 'CEO & Founder', comment: 'Sedut perspiciatis unde omniiste natus errorsit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut' },
    { img: author2, name: 'Persona 2', post: 'CEO & Founder', comment: 'Sedut perspiciatis unde omniiste natus errorsit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut' },
    { img: author3, name: 'Persona 3', post: 'CEO & Founder', comment: 'Sedut perspiciatis unde omniiste natus errorsit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut' },
    ]
const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-long-arrow-right" /></button>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left" /></button>
    )
}

function Testimonials(props) {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: true,
        fade: false,
        dots: false,
        swipe: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }],
    }
    return (
        <section className="testimonial-section-three no-bg">
            <div className="container">
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-10">
                        <Slider className="testimonial-items" id="testimonialSliderThree" {...settings}>
                            {testimonialslide.map((item, i) => (
                                <div key={i} className="testimonial-item text-center">
                                    <div className="author-thumb">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="content">
                                        <p>
                                            <span className="quote-top">
                                                <i className="fal fa-quote-left" />
                                            </span>
                                            {item.comment}
                                            <span className="quote-bottom">
                                                <i className="fal fa-quote-right" />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="author">
                                        <h4>{item.name}</h4>
                                        <span>{item.post}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;