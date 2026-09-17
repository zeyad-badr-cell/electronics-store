import  React, { useEffect, useRef } from 'react';
import {motion, useInView,useAnimation} from 'framer-motion';
import "./banner.css";

const Banner = ({bannerInfo})=> {

    const ref = useRef(null);
    const inView = useInView(ref,{
        once:true,anount:0.2
    });
    const textControls = useAnimation();
    const imgControls = useAnimation();
    useEffect(()=>{
        if(inView)return;
        (async()=>{
            await textControls.start("visible");

            await imgControls.start("visible");

            imgControls.start({
                y:["0px","-6px","0px"],
                transition:{
                    repeat:Infinity,
                    repeatType:"reverse",
                    duration:4,
                    ease:"easeInOut",
                    delay:0.6,
                }
            });
            })();
        },[inView,textControls,imgControls]);

        const containerVariants = {
            hidden:{},
            visible:{
                transition : {
                staggerChildren:0.12,
                delayChildren:0.06,
                },
            },
        };
        const leftTextVariant = {
            hidden:{
                opacity:0,
                x:-24,
            },
            visible:{
                opacity:1,
                x:0,
            },
            transition:{
                type:"spring",
                stiffness:"110",
                damping:20,
            }
        };
        const smFade ={
            hidden:{
                opacity:0,
                y:10,
            },
            visible:{
                opacity:1,
                y:0,
                transition:{
                    duration:0.48,
                }
            },
        };
        const imageVariant ={
            hidden:{
                opacity:0,
                scale:0.9,
                y:12,
            },
            visible:{
                opacity:1,
                scale:1,
                y:0,
                transition:{
                type:"spring",
                stiffness:"150",
                damping:20,
            }
            },
        };

    return(
        <>
        <div className='banner-section position-relative overflow-hidden'
        >
         <div className='container'>
         <motion.div className='banner-card rounded-5'
         style={
            {
                backgroundImage:bannerInfo.bg,
                backgroundColor: "transparent"
            }
        } 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={textControls}>
         <div className='row g-0 d-flex align-items-center p-4 p-md-5'>
            <motion.div className='col-12 col-md-4 order-md-1  order-2'
            variants={leftTextVariant}
            >
                <motion.h5 variants={leftTextVariant}>{bannerInfo.discount}</motion.h5>
                <motion.h1 className='fw-bolder display-5 text-white mb-2'
                variants={leftTextVariant}>
                    {bannerInfo.tag}
                </motion.h1>
                <motion.h5 variants={smFade}>{bannerInfo.date}</motion.h5>
            </motion.div>
            <div className='col-12 col-md-4 d-flex justify-content-center
              align-items-center banner-wrapper order-1 order-md-2'>
                <motion.img src={bannerInfo.image}alt="banner" 
                className='promo-image z-1' variants={imageVariant}
                whileHover={
                    {scale:1.03}
                }/>
            </div>
            <motion.div className='col-12 col-md-4 d-flex flex-column justify-content-center gap-3 order-3 order-md-3'
                variants={containerVariants}
                >
                <motion.h3 className='fw-bold text-white' variants={leftTextVariant}>
                    {bannerInfo.subTitle}
                </motion.h3>
                <motion.h2 className='fw-bold mb-1'variants={leftTextVariant}>
                    {bannerInfo.title}
                </motion.h2>
                <motion.p variants={smFade}>
                    {bannerInfo.desc}
                </motion.p>
                <motion.div variants={smFade}>
                <button className='btn btn-light fw-bold rounded-pill'>
                    Shop Now
                </button>
                </motion.div>
            </motion.div>
         </div>
         </motion.div>
         </div>
        </div>
        
        
        
        
        
    </>
    )
}

export default Banner