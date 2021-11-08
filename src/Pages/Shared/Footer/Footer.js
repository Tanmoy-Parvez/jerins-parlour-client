import React from 'react';
import logo from '../../../Images/logo2.png'
const Footer = () => {
    return (
        <div className="pink-bg pt-5 pb-2">
            <div className="row container text-white mx-auto">
                <div className="col-md-4 ">
                    <h6> <i className="fas fa-map-marker-alt fs-5"></i> H#000(0th Floor),Road #00,</h6>
                    <h6>New DOSH,Mohakhali,Dhaka,Bangladesh</h6>
                    <img src={logo} alt="" className="ps-5 mt-3" />
                </div>
                <div className="col-md-2">
                    <h4 className="mb-4">Company</h4>
                    <p>About</p>
                    <p>Projects</p>
                    <p>Our Teams</p>
                    <p>Terms and Conditions</p>
                    <p>Submit Listing</p>
                </div>
                <div className="col-md-2">
                    <h4 className="mb-4">Quick Links</h4>
                    <p>Quick Links</p>
                    <p>Rentals</p>
                    <p>Sales</p>
                    <p>Contact</p>
                    <p>Our Blogs</p>
                </div>
                <div className="col-md-4">
                    <h4>About Us</h4>
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet sit sit consectetur adipisicing elit. Non rerum perferendis labore dolorem eius dolor sed velit dignissimos debitis laboriosam dignissimos debitis laboriosam .</p>

                    <i className="fab fa-facebook-square fs-3"></i>
                    <i className="fab fa-instagram-square fs-3 mx-3"></i>
                    <i className="fab fa-linkedin fs-3"></i>
                    <i className="fab fa-youtube fs-3 ms-3"></i>
                </div>
            </div>
            <hr className="bg-light" />
            <p className="text-white text-center">Copyright &copy; 2022 || All rights reserved by Jerin's Parlour.</p>

        </div >
    );
};

export default Footer;