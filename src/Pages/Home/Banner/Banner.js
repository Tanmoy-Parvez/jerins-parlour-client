import React from 'react';
import bannerImg from '../../../Images/Image/banner-bg.png'

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="container py-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h1 className="text-uppercase fw-bold">
                            Beauty Salon
                        </h1>
                        <h1 className="text-uppercase fw-bold">
                            For every women
                        </h1>
                        <p className="text-secondary w-75 my-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas illum, quo aliquid quasi error id quisquam iste ea rem deserunt id quisquam iste ea rem deserunt.
                        </p>
                        <button className="btn regular-btn py-2">Get an Appointment</button>
                    </div>
                    <div className="col-md-6">
                        <img src={bannerImg} alt="" className="img-fluid bg-light rounded-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;