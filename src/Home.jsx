import React from 'react';
import Product from './Product';
import './Home.css';
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className='home' id='home'>
        <div id="home__top" className='home__container'>
        <img
            className='home__image'
            // src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo-square.png"
            src="https://www.cordcuttersnews.com/wp-content/uploads/2019/06/Amazon-Live-TV.jpg"
        />

        <div className='home__row'>
             {/* 1 component
             2 component */}
             <Product
                id="1"
                 title="Mobile and Accessories"

             image="https://images-na.ssl-images-amazon.com/images/I/71qP%2BfMtbDL._SX679_.jpg"
                 price="Mrp 100.00"
                 rating={5}
             />

                  {/* 1 component
                  2 component */}
                  <Product
                     id="7"
                      title="Computer and Accessories"
                     image="ec.jpg"
                      price="Mrp 900.00"
                      rating={5}
                  />
             <Product
                id="2"
                 title="Electronics and Accessories"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                 image="csa.jpg"
                 price="Mrp 200.00"
                 rating={5}
             />
        </div>

        <div className='home__row'>
             {/* 1 component
             2 component
             3 compinent */}
             <Product
                id="3"
                 title="Tv's and appliances "
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                image="https://isteam.wsimg.com/ip/a8efe83b-6857-477d-9d0f-f13ca0229a20/ols/1699_original/:/rs=w:600,h:600"
                 price="Mrp 250.00"
                 rating={5}
             />
             <Product
                id="4"
                 title="Home and Electricals"
                  image="hae.jpg"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                 price="Mrp 400.00"
                 rating={5}
             />
             <Product
                id="5"
                 title="Video games"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                //image="https://www.lg.com/us/images/home-audio/md07500094/gallery/desktop-01.jpg"
               // image="https://media.prezzybox.com/Prezzybox/Category/Personalised/Personalised_For_Kids_1.jpg"
                 image="vg.jpg"
                 price="Mrp 300.00"
                 rating={5}
             />

        </div>

        <div className='home__row'>
             {/* 1 ccomponent*/}
             <Product
                id="6"
                 title="Mens Fashion"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                image="mf"
                 price="Mrp 500.00"
                 rating={5}
             />
             <Product
                id="3"
                 title="Women fashion"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                image="wf.jpg"
                 price="Mrp 100.00"
                 rating={5}
             />

             <Product
                id="5"
                 title="Kids Fashion"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                //image="https://www.lg.com/us/images/home-audio/md07500094/gallery/desktop-01.jpg"
               // image="https://media.prezzybox.com/Prezzybox/Category/Personalised/Personalised_For_Kids_1.jpg"
               image="kf"
                 price="Mrp 300.00"
                 rating={5}
             />

        </div>

        <div className='home__row'>
             {/* 1 ccomponent*/}
             <Product
                id="6"
                 title="Shampoo(Red onion shampoo,anti-hairfall shampoo)"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                image="j3.jpeg"
                price="Mrp 100.00"
                 rating={5}
             />
             <Product
                id="3"
                 title="Hair oil (Red onion shampoo,anti-hairfall shampoo)"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                image="j2.jpeg"
                 price="Mrp 100.00"
                 rating={5}
             />

             <Product
                id="5"
                 title="Shampoo with Conditioner (Shampoo-conditioner-dandruff remover like 3x)"
                // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                //image="https://www.lg.com/us/images/home-audio/md07500094/gallery/desktop-01.jpg"
               // image="https://media.prezzybox.com/Prezzybox/Category/Personalised/Personalised_For_Kids_1.jpg"
               image="j1.jpeg"
                    price="Mrp 100.00"
                 rating={5}
             />

        </div>



        <Footer />
        </div>

        </div>
    )
}

export default Home
