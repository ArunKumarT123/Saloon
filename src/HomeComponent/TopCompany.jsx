import React from 'react'
import "./allcss.css"
import company1 from "../assets/content/company-01.jpg";
import company2 from "../assets/content/company-02.jpg";
import company3 from "../assets/content/company-03.jpg";
import company4 from "../assets/content/company-04.jpg";
import company5 from "../assets/content/company-05.jpg";
import company6 from "../assets/content/company-06.jpg";

function TopCompany() {
  return (
    <div className="container mt-20 mb-20">
                <div className="section-heading">
                    <h2>Top Hiring Companies</h2>
                    <p>Know your really worth and find the job that qualify your life.</p>
                </div>
                <div className="row mt-n1-9">
                    <div className="col-lg-6 mt-1-9 mt-3">
                        <div className="card-style2">
                            <div className="card-body">
                                <div className="d-sm-flex">
                                    <div className="flex-shrink-0 mb-3 mb-sm-0">
                                        <img src={company1} alt="..."/>
                                    </div>
                                    <div className="flex-grow-1 ms-sm-3">
                                        <h5><a href="employer-details.html">Conzio construction</a></h5>
                                        <div className="mb-2 mt-2">
                                            <span className="star-rating display-31 text-warning me-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">4.0</span>
                                            </span>
                                            <span className="vertical-align-middle"><i className="ti-location-pin pe-1 text-secondary"></i>Boston, USA</span>
                                        </div>
                                        <div>
                                            <span className="company-info time">Full Time</span>
                                            <span className="company-info privacy">Private</span>
                                            <span className="company-info required">Urgent</span>
                                        </div>
                                        <a href="#!" className="bookmark-btn"><i className="ti-bookmark"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-1-9 mt-3">
                        <div className="card-style2">
                            <div className="card-body">
                                <div className="d-sm-flex">
                                    <div className="flex-shrink-0 mb-3 mb-sm-0">
                                        <img src={company2} alt="..."/>
                                    </div>
                                    <div className="flex-grow-1 ms-sm-3">
                                        <h5><a href="employer-details.html">Midway Overline</a></h5>
                                        <div className="mb-2 mt-2">
                                            <span className="star-rating display-30 text-warning me-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">5.0</span>
                                            </span>
                                            <span className="vertical-align-middle"><i className="ti-location-pin pe-1 text-secondary"></i>Toronto, Canada</span>
                                        </div>
                                        <div>
                                            <span className="company-info time">Part Time</span>
                                            <span className="company-info privacy">Private</span>
                                        </div>
                                        <a href="#!" className="bookmark-btn"><i className="ti-bookmark"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-1-9 mt-3">
                        <div className="card-style2">
                            <div className="card-body">
                                <div className="d-sm-flex">
                                    <div className="flex-shrink-0 mb-3 mb-sm-0">
                                        <img src={company3} alt="..."/>
                                    </div>
                                    <div className="flex-grow-1 ms-sm-3">
                                        <h5><a href="employer-details.html">Ktone Software</a></h5>
                                        <div className="mb-2 mt-2">
                                            <span className="star-rating display-30 text-warning me-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">5.0</span>
                                            </span>
                                            <span className="vertical-align-middle"><i className="ti-location-pin pe-1 text-secondary"></i>London, UK</span>
                                        </div>
                                        <div>
                                            <span className="company-info time">Part Time</span>
                                            <span className="company-info privacy">Private</span>
                                        </div>
                                        <a href="#!" className="bookmark-btn"><i className="ti-bookmark"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-1-9 mt-3">
                        <div className="card-style2">
                            <div className="card-body">
                                <div className="d-sm-flex">
                                    <div className="flex-shrink-0 mb-3 mb-sm-0">
                                        <img src={company4} alt="..."/>
                                    </div>
                                    <div className="flex-grow-1 ms-sm-3">
                                        <h5><a href="employer-details.html">Alpha Kem</a></h5>
                                        <div className="mb-2 mt-2">
                                            <span className="star-rating display-30 text-warning me-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">5.0</span>
                                            </span>
                                            <span className="vertical-align-middle"><i className="ti-location-pin pe-1 text-secondary"></i>Nizhny, Russia</span>
                                        </div>
                                        <div>
                                            <span className="company-info time">Full Time</span>
                                            <span className="company-info privacy">Private</span>
                                            <span className="company-info required">Urgent</span>
                                        </div>
                                        <a href="#!" className="bookmark-btn"><i className="ti-bookmark"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-1-9 mt-3">
                        <div className="card-style2">
                            <div className="card-body">
                                <div className="d-sm-flex">
                                    <div className="flex-shrink-0 mb-3 mb-sm-0">
                                        <img src={company5} alt="..."/>
                                    </div>
                                    <div className="flex-grow-1 ms-sm-3">
                                        <h5><a href="employer-details.html">Waft Technologies</a></h5>
                                        <div className="mb-2 mt-2">
                                            <span className="star-rating display-30 text-warning me-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">4.0</span>
                                            </span>
                                            <span className="vertical-align-middle"><i className="ti-location-pin pe-1 text-secondary"></i>Utrecht, Netherlands</span>
                                        </div>
                                        <div>
                                            <span className="company-info time">Part Time</span>
                                            <span className="company-info privacy">Private</span>
                                        </div>
                                        <a href="#!" className="bookmark-btn"><i className="ti-bookmark"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-1-9 mt-3">
                        <div className="card-style2">
                            <div className="card-body">
                                <div className="d-sm-flex">
                                    <div className="flex-shrink-0 mb-3 mb-sm-0">
                                        <img src={company6} alt="..."/>
                                    </div>
                                    <div className="flex-grow-1 ms-sm-3">
                                        <h5><a href="employer-details.html">Sai Web Infotech</a></h5>
                                        <div className="mb-2 mt-2">
                                            <span className="star-rating display-30 text-warning me-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">5.0</span>
                                            </span>
                                            <span className="vertical-align-middle"><i className="ti-location-pin pe-1 text-secondary"></i>Vienna, Australia</span>
                                        </div>
                                        <div>
                                            <span className="company-info time">Full Time</span>
                                            <span className="company-info privacy">Private</span>
                                            <span className="company-info required">Urgent</span>
                                        </div>
                                        <a href="#!" className="bookmark-btn"><i className="ti-bookmark"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <a href="employers-list.html" className="butn">Load More Companies</a>
                </div>
            </div>
  )
}

export default TopCompany