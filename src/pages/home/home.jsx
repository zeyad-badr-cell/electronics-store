import React from "react";
import HeroSlider from "../../components/layout/hero/heroSlider";
import { features, heroSlider,bannerDes, products, bannerDes1} from '../../constants/data';
import { categories } from '../../constants/data';
import CategoryCards from "../../components/layout/cards/categoryCards";
import Banner from "../../components/layout/banner/banner";
import ProductCards from "../../components/layout/cards/productCards";

const Home = () => {
    return (
        <>
         <HeroSlider/>
         <section className="category-section section-spacing">
        <div className="container">
            <div className="row">
                {
                    categories.map((cat, index) => {
                        return (
                            <div key={cat.id} className={
                                index === 2 || index === 3?
                                "col-lg-6 col-md-12 mb-4"
                                :"col-lg-3 col-md-6 mb-4"
                            }>
                                <CategoryCards cat={cat} index={index}  />
                            </div>
                        )
                    })
                }
            </div>
        </div>
         </section>
         <section className="feature-section section-spacing ">
            <div className="container">
              <div className="row">
                {features.map((val,index)=>{
                    return(
                <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4" mb-md-0>
                    <div className="feature-item d-flex align-items-center flex-column flex -sm-row">
                    </div>
                    <div className="feature-icon me-sm-3 me-0 mb-2 mb-sm-0 text-center text-sm-start">
                        <i className={val.icon}></i>
                    </div>
                    <div className="feature-text text-center text-sm-start ">
                        <h5 className="fw-bold mb-0">{val.title}</h5>
                        <p className="mb-0 text-muted">{val.desc}</p>
                    </div>
                </div>
                    )
                },)

                }
              </div>
            </div>

         </section>
         <Banner bannerInfo={bannerDes} />

         <section className="product-section">
                <div className="container">
                    <h2 className="section_title text-center fw-bold mb-5">
                        Best Seller Products
                    </h2>
                    <div className="row">
                        {
                            products.map((products,index)=>{
                                return(
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <ProductCards products={products} key={index}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
         </section>

         <Banner bannerInfo={bannerDes1} />
     </>
    );
};


export default Home;