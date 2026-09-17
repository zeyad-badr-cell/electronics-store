import React,{useEffect, useRef} from "react";
import './cards.css';
import {motion,useInView, useAnimation, useScroll, useTransform} from "framer-motion"
const ProductCards = ({ products, index = 0 }) => {

      const ref = useRef(null) ;
      const cardVariants ={
            hidden : {
            opacity:0,
            y:18,
            scale:0.99
        },
        visible: (i=0) => ({
            opacity:1,
            y:0,
            scale:1,
            transition:{
                type: "spring",
                stiffness:110,
                damping:18,
                delay : 0.08*i,
            },
        }),
        };
        const inView = useInView(ref,{amount:0.25,once:true});
        
            const controls = useAnimation();
        
            useEffect(()=>{
                if(inView) controls.start("visible")
            },[inView,controls]);
        
            const {scrollYProgress}= useScroll(
                {
                    target:ref,
                    offset : ["start end","end start"],
                });

    return (
        <motion.div className="product-card-wrapper"
        ref={ref}
        variants={cardVariants}
        custom={index}
        initial="hidden"
        animate={controls}
        >
            <div className="card product-card mb-4 border-0">
                <div className="card-img position-relative">
                    <img
                        src={products.image}
                        alt={products.title}
                        className="img-fluid rounded-2 product-image"
                    />
                </div>
                <div className="card-des mb-3 mt-2">
                    <h4 className="card-title transition-color">{products.title}</h4>
                    <h5 className="fw-bold price">{products.price}</h5>
                    <button className="btn add-to-cart btn-primary btn-md rounded-pill fw-bold mt-3">
                        Add To Cart
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCards;