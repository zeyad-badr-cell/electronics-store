import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './heroSlider.css';
import { heroSlider } from '../../../constants/data';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 12,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: -8,
        }
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            filter: 'blur(5px)'
        },
        visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            filter: 'blur(5px)',
        }
    };

    return (
        <>
            <section className="hero-carousel-wrapper">

                {
                    heroSlider.map((s, i) => {
                        return (
                            <motion.div
                key={s.id}
                className="bg-layer"
                style={{ background: s.bg }}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeIndex === i ? 1 : 0
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
            >
            </motion.div>
                        );
                    })
                }

                <Carousel
                    activeIndex={activeIndex}
                    onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
                    interval={4000}
                    controls={false}
                    indicators
                    fade
                    pause="hover"
                >

                    {
                        heroSlider.map((s, i) => {
                            return (
                                <Carousel.Item key={s.id}>

                                    <div className="container">
                                        <div className="row align-items-center">
                                        <div className="col-md-6 col-12 order-md-1 order-2">

                                        <AnimatePresence
                                            mode="wait"
                                            initial={false}
                                                >
                                        <motion.div
                                                key={s.id}
                                                variants={textVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                transition={{
                                                    delay: 0.12,
                                                    duration: 1.2
                                                }}
                                            >
                                                        <h2 className="hero-title-text">
                                                            {s.title}
                                                        </h2>

                                                        <p className="hero-description-text">
                                                            {s.desc}
                                                        </p>

                                                        <h2 className="hero-subtitle-text">
                                                            {s.price}
                                                        </h2>

                                                        <button className="btn btn-light btn-sm me-2 mt-2 fw-bold">
                                                            Shop Now
                                                            <i className="bi bi-arrow-right ms-1"></i>
                                                        </button>

                                                  
                                            </motion.div>
                                            </AnimatePresence>
                                            </div>


                                            <div className="col-md-6 col-12 order-md-2 order-1">

                                                <div className="d-flex justify-content-center justify-content-md-end">

                                                </div>

                                                <AnimatePresence
                                                    mode="wait"
                                                    initial={false}
                                                >

                                                    {
                                                        activeIndex === i && (
                                                            <motion.img
                                                                key={s.id}
                                                                src={s.image}
                                                                alt={s.title}
                                                                className="hero-image"

                                                                initial="hidden"
                                                                animate="visible"
                                                                exit="exit"

                                                                variants={imageVariants}

                                                                transition={{
                                                                    duration: 1,
                                                                    ease: "easeInOut"
                                                                }}
                                                            />
                                                        )
                                                    }

                                                </AnimatePresence>

                                            </div>

                                        </div>
                                    </div>

                                </Carousel.Item>
                            );
                        })
                    }

                </Carousel>

            </section>
        </>
    );
};

export default HeroSlider;