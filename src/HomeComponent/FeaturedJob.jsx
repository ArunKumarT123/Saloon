import React from "react";
import "./allcss.css"

import job_01 from "../assets/content/job-01.jpg";
import job_02 from "../assets/content/job-02.jpg";
import job_03 from "../assets/content/job-03.jpg";
import job_04 from "../assets/content/job-04.jpg";
import job_05 from "../assets/content/job-05.jpg";
import job from "../assets/content/job.png"

function FeaturedJob() {
  return (
    <div className="container  mt-20 mb-20">
      <div className="section-heading">
        <h2>Featured Jobs</h2>
        <p>Know your really worth and find the job that qualify your life.</p>
      </div>
      <div className="row mt-n1-9">
        <div className="col-lg-6 order-2 order-lg-1 mt-1-9">
          <div id="accordion2" className="accordion-style1">
            <div
              className="card card-style3 mb-3 bg-white mt-3"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              role="navigation"
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={job_01}
                      alt="..."
                      className="me-3 border-radius-10"
                    />
                    <h5 className="mb-0">Assistant Manager</h5>
                  </div>
                  <div className="job-badge purple">Featured</div>
                </div>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion2"
              >
                <div className="card-body mt-n1 pt-0">
                  <p className="mb-3" style={{color:"black"}}>
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="display-30 me-2">
                        <i className="fas fa-map-marker-alt pe-2"></i>Canada
                      </span>
                      <span className="display-30">
                        <i className="far fa-money-bill-alt pe-2"></i>$25K
                      </span>
                    </div>
                    <a className="job-favourite me-2" href="#!">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card card-style3 mb-3 bg-white"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              role="navigation"
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={job_02}
                      alt="..."
                      className="me-3 border-radius-10"
                    />
                    <h5 className="mb-0">Sr. Project Manager</h5>
                  </div>
                  <div className="job-badge red">Hot</div>
                </div>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion2"
              >
                <div className="card-body mt-n1 pt-0">
                  <p className="mb-3">
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="display-30 me-2">
                        <i className="fas fa-map-marker-alt pe-2"></i>California
                      </span>
                      <span className="display-30">
                        <i className="far fa-money-bill-alt pe-2"></i>$15K
                      </span>
                    </div>
                    <a className="job-favourite me-2" href="#!">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card card-style3 mb-3 bg-white"
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              role="navigation"
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={job_03}
                      alt="..."
                      className="me-3 border-radius-10"
                    />
                    <h5 className="mb-0">UI / UX Designer</h5>
                  </div>
                  <div className="job-badge purple">Featured</div>
                </div>
              </div>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion2"
              >
                <div className="card-body mt-n1 pt-0">
                  <p className="mb-3">
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="display-30 me-2">
                        <i className="fas fa-map-marker-alt pe-2"></i>New York
                      </span>
                      <span className="display-30">
                        <i className="far fa-money-bill-alt pe-2"></i>$18K
                      </span>
                    </div>
                    <a className="job-favourite me-2" href="#!">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card card-style3 mb-3 bg-white"
              id="headingFour"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              role="navigation"
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={job_04}
                      alt="..."
                      className="me-3 border-radius-10"
                    />
                    <h5 className="mb-0">Software Engineer</h5>
                  </div>
                  <div className="job-badge purple">Featured</div>
                </div>
              </div>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordion2"
              >
                <div className="card-body mt-n1 pt-0">
                  <p className="mb-3">
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="display-30 me-2">
                        <i className="fas fa-map-marker-alt pe-2"></i>London
                      </span>
                      <span className="display-30">
                        <i className="far fa-money-bill-alt pe-2"></i>$20K
                      </span>
                    </div>
                    <a className="job-favourite me-2" href="#!">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card card-style3 bg-white"
              id="headingFive"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              role="navigation"
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={job_05}
                      alt="..."
                      className="me-3 border-radius-10"
                    />
                    <h5 className="mb-0">Content Writing</h5>
                  </div>
                  <div className="job-badge red">Hot</div>
                </div>
              </div>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordion2"
              >
                <div className="card-body mt-n1 pt-0">
                  <p className="mb-3">
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="display-30 me-2">
                        <i className="fas fa-map-marker-alt pe-2"></i>UK
                      </span>
                      <span className="display-30">
                        <i className="far fa-money-bill-alt pe-2"></i>$40K
                      </span>
                    </div>
                    <a className="job-favourite me-2" href="#!S">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 mt-1-9 text-center text-lg-start">
          <div className="ps-lg-6 ps-xl-9">
            <img
              className="mb-4 d-block mx-auto mx-4"
              src={job}
              alt="..."
            />
            <h2 className="h3 mb-3">
              Find Talent From The Featured Ones For Your Dream Job
            </h2>
            <p className="mb-4">
              Create best resume and take step toward finding your skills job !
            </p>
            <a className="butn" href="candidate-resume.html">
              Post Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedJob;
