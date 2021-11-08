import React from 'react';

const Subscribe = () => {
    return (
        <div className="banner-bg text-center py-5 mt-5">
            <div className="">
                <h1 className="fw-bold">
                    Let us handle your
                </h1>
                <h1 className="fw-bold">
                    Project, <span className="pink-text">Personality</span>.
                </h1>
                <form action="" className="mt-5 w-50 mx-auto">
                    <div className="row container mx-auto">
                        <div className="col-md-6">
                            <input type="text" className="form-control border-0 py-2" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control border-0 py-2" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row container mx-auto mt-3">
                        <div className="col-md-6">
                            <input type="email" className="form-control border-0 py-2" placeholder="Email Address" />
                        </div>
                        <div className="col-md-6">
                            <input type="telephone" className="form-control border-0 py-2" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="row container mx-auto mt-3">
                        <div className="col-md-12">
                            <textarea rows="6" type="text" className="form-control border-0" placeholder="Your Message" />
                        </div>

                    </div>
                </form>
                <button type="submit" className="btn regular-btn py-2 mt-4">Send Message</button>
            </div>
        </div>
    );
};

export default Subscribe;