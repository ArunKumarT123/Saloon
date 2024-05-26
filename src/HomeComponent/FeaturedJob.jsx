import React from "react";
import "./allcss.css"
function FeaturedJob() {
  return (
    <div class="container">
      <div class="section-heading">
        <h2>Featured Jobs</h2>
        <p>Know your really worth and find the job that qualify your life.</p>
      </div>
      <div class="row mt-n1-9">
        <div class="col-lg-6 order-2 order-lg-1 mt-1-9">
          <div id="accordion2" class="accordion-style1">
            <div
              class="card card-style3 mb-3 bg-white"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              role="navigation"
            >
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img
                      src="src/assets/content/job-01.jpg"
                      alt="..."
                      class="me-3 border-radius-10"
                    />
                    <h5 class="mb-0">Assistant Manager</h5>
                  </div>
                  <div class="job-badge purple">Featured</div>
                </div>
              </div>
              <div
                id="collapseOne"
                class="accordion-collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion2"
              >
                <div class="card-body mt-n1 pt-0">
                  <p class="mb-3" style={{color:"black"}}>
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <span class="display-30 me-2">
                        <i class="fas fa-map-marker-alt pe-2"></i>Canada
                      </span>
                      <span class="display-30">
                        <i class="far fa-money-bill-alt pe-2"></i>$25K
                      </span>
                    </div>
                    <a class="job-favourite me-2" href="#!">
                      <i class="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card card-style3 mb-3 bg-white"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              role="navigation"
            >
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img
                      src="src/assets/content/job-02.jpg"
                      alt="..."
                      class="me-3 border-radius-10"
                    />
                    <h5 class="mb-0">Sr. Project Manager</h5>
                  </div>
                  <div class="job-badge red">Hot</div>
                </div>
              </div>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion2"
              >
                <div class="card-body mt-n1 pt-0">
                  <p class="mb-3">
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <span class="display-30 me-2">
                        <i class="fas fa-map-marker-alt pe-2"></i>California
                      </span>
                      <span class="display-30">
                        <i class="far fa-money-bill-alt pe-2"></i>$15K
                      </span>
                    </div>
                    <a class="job-favourite me-2" href="#!">
                      <i class="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card card-style3 mb-3 bg-white"
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              role="navigation"
            >
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img
                      src="src/assets/content/job-03.jpg"
                      alt="..."
                      class="me-3 border-radius-10"
                    />
                    <h5 class="mb-0">UI / UX Designer</h5>
                  </div>
                  <div class="job-badge purple">Featured</div>
                </div>
              </div>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion2"
              >
                <div class="card-body mt-n1 pt-0">
                  <p class="mb-3">
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <span class="display-30 me-2">
                        <i class="fas fa-map-marker-alt pe-2"></i>New York
                      </span>
                      <span class="display-30">
                        <i class="far fa-money-bill-alt pe-2"></i>$18K
                      </span>
                    </div>
                    <a class="job-favourite me-2" href="#!">
                      <i class="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card card-style3 mb-3 bg-white"
              id="headingFour"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              role="navigation"
            >
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img
                      src="src/assets/content/job-04.jpg"
                      alt="..."
                      class="me-3 border-radius-10"
                    />
                    <h5 class="mb-0">Software Engineer</h5>
                  </div>
                  <div class="job-badge purple">Featured</div>
                </div>
              </div>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordion2"
              >
                <div class="card-body mt-n1 pt-0">
                  <p class="mb-3">
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <span class="display-30 me-2">
                        <i class="fas fa-map-marker-alt pe-2"></i>London
                      </span>
                      <span class="display-30">
                        <i class="far fa-money-bill-alt pe-2"></i>$20K
                      </span>
                    </div>
                    <a class="job-favourite me-2" href="#!">
                      <i class="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card card-style3 bg-white"
              id="headingFive"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              role="navigation"
            >
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img
                      src="src/assets/content/job-05.jpg"
                      alt="..."
                      class="me-3 border-radius-10"
                    />
                    <h5 class="mb-0">Content Writing</h5>
                  </div>
                  <div class="job-badge red">Hot</div>
                </div>
              </div>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordion2"
              >
                <div class="card-body mt-n1 pt-0">
                  <p class="mb-3">
                    Start taking a while for your job search to request and
                    agenda informational interviews with human beings withinside
                    the fields you’re interested by to find out about their
                    profession paths and get profession advice.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <span class="display-30 me-2">
                        <i class="fas fa-map-marker-alt pe-2"></i>UK
                      </span>
                      <span class="display-30">
                        <i class="far fa-money-bill-alt pe-2"></i>$40K
                      </span>
                    </div>
                    <a class="job-favourite me-2" href="#!S">
                      <i class="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 mt-1-9 text-center text-lg-start">
          <div class="ps-lg-6 ps-xl-9">
            <img
              class="mb-4 d-block mx-auto mx-4"
              src="src/assets/content/job.png"
              alt="..."
            />
            <h2 class="h3 mb-3">
              Find Talent From The Featured Ones For Your Dream Job
            </h2>
            <p class="mb-4">
              Create best resume and take step toward finding your skills job !
            </p>
            <a class="butn" href="candidate-resume.html">
              Post Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedJob;
