import React from 'react';
import './Body.css';



import logoUrl from '../../assets/formal_cbondoc.jpg';
import thumb_Portfolio1 from '../../assets/portfolio/thumbnails/1.jpg';
import thumb_Portfolio2 from '../../assets/portfolio/thumbnails/2.jpg';
import thumb_Portfolio3 from '../../assets/portfolio/thumbnails/3.jpg';
import thumb_Portfolio4 from '../../assets/portfolio/thumbnails/4.jpg';
import thumb_Portfolio5 from '../../assets/portfolio/thumbnails/5.jpg';
import thumb_Portfolio6 from '../../assets/portfolio/thumbnails/6.jpg';




const Body = () => (




    <div className="body">
        {/* Masthead */}
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-75">
                <div
                    class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
                >
                    <div class="col-lg-8 align-self-end">

                        <img src={logoUrl} className="logo profile-small rounded-circle"
                            alt="100x100" data-holder-rendered="true" />


                        <h1 class="font-weight-bold pt-5">
                            I'm
                            <span class="font-weight-bold text-primary"> Cary Bondoc</span>
                        </h1>
                        <h5 class="font-weight-bold p-5">
                            An aspiring full-stack web developer based in the Philippines,
                            currently enrolled in KodeGo.
                        </h5>
                        <h5 class="font-weight-bold p-1">
                            Initial number of hours I code starting 2022 and using VS code alone
                        </h5>
                        <img
                            alt="Code Time"
                            src="https://img.shields.io/endpoint?style=social&url=https://codetime-api.datreks.com/badge/4338?logoColor=dark%26project=%26recentMS=0%26showProject=false" class="w-50"
                        />
                    </div>
                </div>
            </div>
        </header>






        {/* <!-- About--> */}
        <section class="page-section bg-primary" id="about">
            <div class="container-fluid px-4 px-lg-5 h-100 d-flex flex-5">
                <div
                    class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center"
                >
                    <div class="col-lg-8">
                        <h2 class="mt-0">
                            Integrating Technology and Engineering
                        </h2>
                        <hr class="divider divider-light" />
                        <h5 class="mb-5 p-5">
                            A graduate of both Bachelor of Science in Information Technology
                            (2012) and Bachelor of Science in Electrical Engineering (2020),
                            part-time working at SPEDI Construction, Inc. I love researching
                            and exploring new skills, discovering new tools and things that
                            may improve my productivity. I also love gardening and doing home
                            improvements!
                        </h5>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- Services--> */}
        <section class="page-section" id="services">
            <div class="container px-5 px-lg-5">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-calculator fs-1 text-primary"></i>
                            </div>
                            <h3 class="h5 mb-2">Electrical Estimate</h3>
                            <p class="text-muted mb-0">
                                Create electrical estimates based on the given plan. It includes
                                all the electrical fixtures, wires, and pipes for the entire
                                project.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-house-door fs-1 text-primary"></i>
                            </div>
                            <h3 class="h5 mb-2">Home Improvements</h3>
                            <p class="text-muted mb-0">
                                Basic home improvements like addition of electrical fixtures,
                                sink, room, c.r and installation of CCTV cameras.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-broadcast fs-1 text-primary"></i>
                            </div>
                            <h3 class="h4 mb-2">Basic Automation</h3>
                            <p class="text-muted mb-0">
                                Integrating devices and sensors to help you in day to day task
                                like automation of lights and appliances based on certain
                                triggers.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-search fs-1 text-primary"></i>
                            </div>
                            <h3 class="h4 mb-2">Attention to Details</h3>
                            <p class="text-muted mb-0">
                                Accomplishing the task while demonstrating a thorough concern
                                for all the areas involved, no matter how small.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Portfolio--> */}
        <div id="portfolio">
            <div class="container-fluid p-0 pt-0 mt-2">
                <div class="row g-0">
                    <div class="col-lg-4 col-sm-6">
                        <a
                            class="portfolio-box"
                            href="../../assets/portfolio/fullsize/1.jpg"
                            title="Electrical Estimation of Shell Alaminos"
                        >



                            <img src={thumb_Portfolio1} className="img-fluid" alt="Electrical Estimation of Shell Alaminos" data-holder-rendered="true" />


                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">
                                    Electrical Estimation
                                </div>
                                <div class="project-name">Shell Alaminos</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a
                            class="portfolio-box"
                            href="assets/img/portfolio/fullsize/2.jpg"
                            title="Project Name"
                        >



                            <img src={thumb_Portfolio2} className="img-fluid" alt="Attention to Details" data-holder-rendered="true" />


                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">
                                    Web Development
                                </div>
                                <div class="project-name">GOMECO Group of Companies</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a
                            class="portfolio-box"
                            href="assets/img/portfolio/fullsize/3.jpg"
                            title="Sample Home Improvement Project"
                        >





                            <img src={thumb_Portfolio3} className="img-fluid" alt="Sample Home Improvement Project" data-holder-rendered="true" />


                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">
                                    Home Improvements
                                </div>
                                <div class="project-name">Sample Home Improvement Project</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a
                            class="portfolio-box"
                            href="assets/img/portfolio/fullsize/4.jpg"
                            title="Sample Automation Project"
                        >


                            <img src={thumb_Portfolio4} className="img-fluid" alt="Sample Automation Project" data-holder-rendered="true" />

                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">
                                    Basic Automation
                                </div>
                                <div class="project-name">Sample Automation Project</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a
                            class="portfolio-box"
                            href="assets/img/portfolio/fullsize/5.jpg"
                            title="Project # 5 Sample"
                        >


                            <img src={thumb_Portfolio5} className="img-fluid" alt="Project # 5 SampleProject # 5 Sample" data-holder-rendered="true" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">
                                    Electrical Estimate
                                </div>
                                <div class="project-name">Project # 5 Sample</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a
                            class="portfolio-box"
                            href="assets/img/portfolio/fullsize/6.jpg"
                            title="Home Improvement Sample Project"
                        >


                            <img src={thumb_Portfolio6} className="img-fluid" alt="Home Improvement Sample Project" data-holder-rendered="true" />
                            <div class="portfolio-box-caption p-3">
                                <div class="project-category text-white-50">
                                    Home Improvement
                                </div>
                                <div class="project-name">Home Improvement Sample Project</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Call to action--> */}
        <section class="page-section bg-dark text-white">
            <div class="container px-4 px-lg-5 py-lg-5 my-lg-5 text-center">
                <h2 class="mb-4">Interested in the services that I offered?</h2>
            </div>
        </section>
        {/* <!-- Contact--> */}
        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">
                            Ready to start your next project with me? Send me a messages and I
                            will get back to you as soon as possible!
                        </p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">

                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div class="form-floating mb-3">
                                <input
                                    class="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                    data-sb-validations="required"
                                />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">
                                    A name is required.
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    class="form-control"
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    data-sb-validations="required,email"
                                />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">
                                    An email is required.
                                </div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">
                                    Email is not valid.
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    class="form-control"
                                    id="phone"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    data-sb-validations="required"
                                />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">
                                    A phone number is required.
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea
                                    class="form-control"
                                    id="message"
                                    type="text"
                                    placeholder="Enter your message here..."
                                    data-sb-validations="required"
                                ></textarea>
                                <label for="message">Message</label>
                                <div
                                    class="invalid-feedback"
                                    data-sb-feedback="message:required"
                                >
                                    A message is required.
                                </div>
                            </div>
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms"
                                    >https://startbootstrap.com/solution/contact-forms</a
                                    >
                                </div>
                            </div>
                            <div class="d-none" id="submitErrorMessage">
                                <div class="text-center text-danger mb-3">
                                    Error sending message!
                                </div>
                            </div>
                            <div class="d-grid">
                                <button
                                    class="btn btn-primary btn-xl disabled"
                                    id="submitButton"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+(63)9123456789</div>
                    </div>
                </div>
            </div>
        </section>


    </div>





)

export default Body;