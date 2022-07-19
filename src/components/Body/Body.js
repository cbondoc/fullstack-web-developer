import React from 'react';
import './Body.css';




import formal_cbondoc from '../../assets/images/formal_cbondoc.jpg';
import bsit_cbondoc from '../../assets/images/bsit_cbondoc.png';
import bsee_cbondoc from '../../assets/images/bsee_cbondoc.jpg';
import thumb_Portfolio1 from '../../assets/images/portfolio/thumbnails/1.jpg';
import thumb_Portfolio2 from '../../assets/images/portfolio/thumbnails/2.jpg';
import thumb_Portfolio3 from '../../assets/images/portfolio/thumbnails/3.jpg';
import thumb_Portfolio4 from '../../assets/images/portfolio/thumbnails/4.jpg';
import thumb_Portfolio5 from '../../assets/images/portfolio/thumbnails/5.jpg';
import thumb_Portfolio6 from '../../assets/images/portfolio/thumbnails/6.jpg';
import smart_attendance_1 from '../../assets/images/smart_attendance_1.png';
import smart_attendance_2 from '../../assets/images/smart_attendance_2.png';


import { render } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faLocationCrosshairs, faCalculator, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Body = () => (

    <div className="body">

        <header class="masthead">
            <div class="container px-4 px-lg-5">
                <div
                    class="row gx-4 gx-lg-5 align-items-center justify-content-center text-center"
                >
                    <div class="col-lg-8 align-self-end">

                        <img src={formal_cbondoc} className="logo profile-small rounded-circle"
                            alt="100x100" data-holder-rendered="true" />

                        <h1 class="font-weight-bold pt-5">
                            I'm
                            <span class="font-weight-bold text-primary"> Cary Bondoc</span>
                        </h1>
                        <i class="bi bi-123"></i>
                        <h5 class="font-weight-bold p-5">
                            An aspiring full-stack web developer based in the Philippines,
                            currently enrolled in KodeGo
                        </h5>
                        <h5 class="font-weight-bold p-1 pb-4">
                            Initial number of hours I code starting July 2022 and using VS code alone
                        </h5>
                        <a href="https://wakatime.com/@0ce2f178-b742-4c6c-bf4f-92cd829ec635"><img width="400" height="50" src="https://wakatime.com/badge/user/0ce2f178-b742-4c6c-bf4f-92cd829ec635.svg" alt="Total time coded since Jul 10 2022" /></a>
                    </div>
                </div>
            </div>
        </header>


        <hr class="divider divider-light" />

        <section class="page-section" id="about">
            <div class="container-fluid ">
                <div
                    class="row align-items-center justify-content-center text-center"
                >
                    <div class="col-md-8">
                        <h2 class="mb-5 pb-5">
                            Integrating Technology and Engineering
                        </h2>
                    </div>
                    <div className='row'>
                        <div className='offset-md-3 col-md-2'>
                            <img src={bsit_cbondoc} className="logo profile-small rounded-circle"
                                alt="100x100" data-holder-rendered="true" />
                        </div>

                        <div className='offset-md-2 col-md-2'>
                            <img src={bsee_cbondoc} className="logo profile-small rounded-circle"
                                alt="100x100" data-holder-rendered="true" />
                        </div>
                    </div>


                    <div class="col-lg-8 pt-5">
                        <h5 class="mb-4">
                            A graduate of both Bachelor of Science in Information Technology
                            (2012) and Bachelor of Science in Electrical Engineering (2020)
                        </h5>
                        <h5 class="mb-4">
                            I'm currently working as a part-time IT Consultant at SPEDI Construction, Inc. My goal is to eliminate manual tasks, automate as much as possible and integrate technology to lessen the workload of engineering
                        </h5>
                        <h5 class="mb-4">
                            I love researching and exploring new skills, discovering new tools and things that
                            may improve my productivity. I also love gardening and doing home
                            improvements!
                        </h5>
                    </div>
                </div>
            </div>
        </section>


        <hr class="divider divider-light" />

        <section class="page-section" id="services">
            <div class="container px-5 px-lg-5">
                <h2 class="text-center">At Your Service</h2>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-calculator fs-1 text-primary"></i>
                            </div>
                            <h3 class="h5 mb-2">Electrical Estimate</h3>
                            <p class="mb-0">
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
                            <p class="mb-0">
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
                            <h3 class="h5 mb-2">Basic Automation</h3>
                            <p class="mb-0">
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
                            <h3 class="h5 mb-2">Attention to Details</h3>
                            <p class="mb-0">
                                Accomplishing the task while demonstrating a thorough concern
                                for all the areas involved, no matter how small.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="portfolio">
            <div class="container-fluid p-0 pt-0">
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


        <section class="page-section" id="services">
            <div class="container">

                <h1 class="text-center mt-5 mb-5 pb-5"><em>On Going Projects</em></h1>
                <div className='row'>
                    <div className="col-md-4">
                        <h5 class="text-center">
                            <i>
                                Due to the nature of work in the engineering field, almost all employees are scattered on different project sites, ranging from Luzon, Visayas and Mindanao.
                            </i>
                        </h5>
                    </div>
                    <div className="col-md-4">
                        <h2 class="text-center mt-3 pt-2 mb-2 text-primary">
                            Smart Attendance System
                        </h2>
                    </div>
                    <div className="col-md-4">
                        <h5 class="text-center">
                            <i>
                                They also have different time in and time out of work since they need to consider the travel time, weather, equipments and other things that might hinder the activities.
                            </i>
                        </h5>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-calculator fs-1 text-primary"></i>
                            </div>
                            <FontAwesomeIcon className='pb-4' icon={faEarthAsia} size={'4x'} />

                            <p class="mb-0">
                                Allows the employees to time in and out using their mobile phones, anywhere in the world as long as they have internet access
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-house-door fs-1 text-primary"></i>
                            </div>
                            <FontAwesomeIcon className='pb-4' icon={faCheckDouble} size={'4x'} />
                            <p class="mb-0">
                                Easy to use, fit for the busy and on-the-go person. A simple tap is all it takes.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-broadcast fs-1 text-primary"></i>
                            </div>
                            <FontAwesomeIcon className='pb-4' icon={faLocationCrosshairs} size={'4x'} />
                            <p class="mb-0">
                                Identifies the current location of the employee while they are doing the attendance, making sure they are where they need to be
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-search fs-1 text-primary"></i>
                            </div>
                            <FontAwesomeIcon className='pb-4' icon={faCalculator} size={'4x'} />
                            <p class="mb-0">
                                Provides statistical record for each employee. Easily determines the total hours they spend.
                            </p>
                        </div>
                    </div>
                    <div class="offset-lg-1 col-lg-4 col-md-12 text-center">
                        <img src={smart_attendance_1} width={350} height={600} className="text-center"
                            alt="Smart Attendance System" data-holder-rendered="true" />
                    </div>

                    <div class="col-lg-4 col-md-12 text-center pt-5 mt-3">
                        <img src={smart_attendance_2} width={600} height={450} className="text-center"
                            alt="Smart Attendance System" data-holder-rendered="true" />
                    </div>
                </div>
            </div>
        </section>


        <section class="page-section">
            <div class="container px-4 px-lg-5 py-lg-5 my-lg-5 text-center">
                <h2 class="mb-4">Interested in the services that I offered?</h2>
            </div>
        </section>

        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                        <p class="mb-5">
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

