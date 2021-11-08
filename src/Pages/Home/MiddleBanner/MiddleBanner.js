import React from 'react';
import faceImg from '../../../Images/Image/face.png'

const MiddleBanner = () => {
    return (
        <div className="banner-bg">
            <div className="container py-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={faceImg} alt="" className="img-fluid p-3" />
                    </div>
                    <div className="col-md-6 ps-5">
                        <h1 className="fw-bold">
                            Let us handle your
                        </h1>
                        <h1 className="fw-bold">
                            Screen <span className="pink-text">Personality</span>.
                        </h1>
                        <p className="text-secondary w-75 my-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas illum, quo aliquid quasi error id iste ea rem deserunt id quisquam iste ea rem deserunt.
                        </p>
                        <div className="d-flex">
                            <div>
                                <h1 className="fw-bold pink-text">500+</h1>
                                <h6>Happy Customers</h6>
                            </div>

                            <div className="ms-5 ps-5">
                                <h1 className="fw-bold pink-text">16+</h1>
                                <h6>Total Services</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleBanner;