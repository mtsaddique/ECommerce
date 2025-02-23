import React from 'react'
import modelImg from '../assets/model.png'
import versace from '../assets/versace.png'
import vogue from '../assets/vogue.png'
import calvin from '../assets/calvin.png'
import prada from '../assets/prada.png'
import NewArrivalProduct from './NewArrival/NewArrivalProduct'
import Review from './Cart/Review'
import Dashboard from './UserProfile/Dashboard'


function Home() {

    return (
        <>

            <div className="innerSection">
                <div className="main">
                    <div className="main-content">
                        <div className="heading-content">
                            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        </div>
                        <button className='btn-shop'>Shop Now</button>
                        <div className="brandcollection" >
                            <div className="brand">
                                <h1>200+</h1>
                                <p>International Brands</p>
                            </div>
                            <div className="qulaityproduct">
                                <h1>2,000+</h1>
                                <p>High Quality Products</p>
                            </div>
                            <div className="customers">
                                <h1>30,000+</h1>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-image">
                        <img width="350px" src={modelImg} alt="no show" />
                    </div>
                </div>
            </div>

            <div className="brandLogo">
                <img width="70px" src={versace} alt="no show" />
                <img width="70px" src={vogue} alt="no show" />
                <img width="100px" src={calvin} alt="no show" />
                <img width="100px" src={prada} alt="no show" />
            </div>

            <div className="arrivalproduct">
                <div className="arrival-heading">
                    <h1>New Arrival</h1>
                    <p>Check out our Latest Collection of Clothes </p>
                </div>

                <div className="new-arrival-set">
                    <NewArrivalProduct />
                </div>
                <div>
                    <Review />
                </div>

                {/* DASHBOARD */}
                <div>
                    <Dashboard />
                </div>
            </div>

            

        </>
    );
}

export default Home
