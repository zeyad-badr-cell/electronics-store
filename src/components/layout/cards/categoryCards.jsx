import React,{useEffect, useRef} from "react";
import './cards.css';
import {motion,useInView, useAnimation, useScroll, useTransform} from "framer-motion"
const CategoryCards = ({cat, index}) => {
    
    const ref = useRef(null) ;

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

    const imgMove = 18;
    const imgX =useTransform(scrollYProgress,[0,1],[0,imgMove]);

    const cardVariants ={
            hidden : {
            opacity:0,
            y:40,
            scale:0.96,
        },
        visible: (i=0) => ({
            opacity:1,
            y:0,
            scale:1,
            transition:{
                type: "spring",
                stiffness:110,
                damping:16,
                mass:0.6,
                delay : 0.12*i,
            },
        }),
        };

    const parts =(cat.title || "").split(" ");
    const first = parts[0] || "";
    const second = parts[1] || "";

    const bgStyle = {
        backgroundImage: cat.bg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor:"transparent",
    };

    return (
        <motion.div className={
            index > 3 ?
            "cat-card d-flex align-content-center align-items-md-top p-4"
            :"cat-card d-flex align-content-center align-items-md-end p-4"
        } 
        style={bgStyle}
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        custom={index}
        >
            <div className="car-text ms-2 z-1">
                <p className=" mb-1">{first}</p>
                <p className=" fs-4 fw-semibold mb-3">{second}</p>
                <p className=" display-6 fw-semibold mb-3">{cat.cat}</p>
                <button className="btn btn-light btn-md px-4 py-2 rounded-pill fw-bold">
                    Browse
                </button>
            </div>
            <div className="cat-overlay">
            <motion.img src={cat.image} 
                 alt={cat.title}
                 className="cat-image img-fluid"
                 style={{x:imgX}} 
                 drag={false}
                 whileHover={{y:-6,scale:1.03}}
                 transition={{type:"spring",stiffness:500,damping:20}}
                 />
            </div>

        </motion.div>
    )
}
export default CategoryCards;