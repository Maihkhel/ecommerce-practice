import React, { useEffect } from 'react'
import BANNER from '../../assets/images/purepng1.png'
import './hero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }, [])

    return (
        <div className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 data-aos='fade-right'>We value our customers</h1>
                        <p data-aos='fade' data-aos-delay="300">Welcome to our amazing shop, where virtually you will love everything</p>
                        <button className='btn btn-outline-primary btn-lg' data-aos='fade-up' data-aos-delay="600">Create an Account</button>
                    </div>

                    <div className="col-md-5" data-aos='fade-left' data-aos-delay="400" >
                        <img src={BANNER} alt="" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero