import React from 'react';
import './Body.css';


import formal_cbondoc from '../assets/images/formal_cbondoc.jpg';
import bsit_cbondoc from '../assets/images/bsit_cbondoc.png';
import bsee_cbondoc from '../assets/images/bsee_cbondoc.jpg';
import portfolio_attendance_system_1 from '../assets/images/portfolio/portfolio_attendance_1.png';
import portfolio_attendance_system_2 from '../assets/images/portfolio/portfolio_attendance_2.jpg';
import portfolio_attendance_system_3 from '../assets/images/portfolio/portfolio_attendance_3.jpg';


import logo_react from '../assets/images/logo_react.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia, faLocationCrosshairs, faCalculator, faCheckDouble } from '@fortawesome/free-solid-svg-icons';


import { Col, Row, Container } from 'react-bootstrap';


const Body = () => (

    <div className="body mt-5 pt-5">

        {/* navbar */}
        <header class="masthead">
            <div class="container px-4 px-lg-5">
                <div
                    class="row gx-4 gx-lg-5 align-items-center justify-content-center text-center"
                >
                    <div class="col-lg-8 align-self-end">

                        <img src={formal_cbondoc} className="logo profile-small rounded-circle"
                            alt="Formal CBondoc" data-holder-rendered="true" />

                        <h1 class="font-weight-bold pt-5">
                            I'm
                            <span class="font-weight-bold text-primary"> Cary Bondoc</span>
                        </h1>
                        <i class="bi bi-123"></i>
                        <h5 class="font-weight-bold p-5">
                            A full-stack web developer based in the Philippines
                        </h5>
                        <h5 class="font-weight-bold p-1 pb-4">
                            Initial number of hours I code starting July 2022 and using VS code alone
                        </h5>
                        <a href="https://wakatime.com/@0ce2f178-b742-4c6c-bf4f-92cd829ec635"><img width="400" height="50" src="https://wakatime.com/badge/user/0ce2f178-b742-4c6c-bf4f-92cd829ec635.svg" alt="Total time coded since Jul 10 2022" /></a>
                    </div>
                </div>
            </div>
        </header>


        <hr class="divider divider-light mt-5 mb-5" />

        {/* about */}
        <section class="page-section" id="about">

            <div class="container-fluid ">
                <div
                    class="row align-items-center justify-content-center text-center"
                >
                    <div class="col-md-8">
                        <h2 class="mb-5 pb-5  mt-4 pt-4">
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

        <hr class="divider divider-light  mt-5 mb-5" />

        {/* skills */}
        <section class="page-section" id="skills">
            <Container>
                <Col md={12} className='mb-3'>
                    <Row>
                        <h2 class="text-center">Skills</h2>
                    </Row>
                </Col>
                <Row>

                    <Col md={3} className='mb-3'>
                        <Row className="text-center">
                            <h3 class="h5 mb-2">
                                Frontend Developer
                            </h3>
                        </Row>
                        <Row className="text-center">
                            <p class="mb-0">
                                Basic understanding of React JS, allows me to create interactive UI and bootstrap framework for mobile-friendliness
                            </p>
                        </Row>
                    </Col>

                    <Col md={3} className='mb-3'>
                        <Row className="text-center">
                            <h3 class="h5 mb-2">
                                Backend Developer
                            </h3>
                        </Row>
                        <Row className="text-center">
                            <p class="mb-0">
                                Using laravel as backend and integrating it to React JS and MySQL to store and retrieve data
                            </p>
                        </Row>
                    </Col>

                    <Col md={3} className='mb-3'>
                        <Row className="text-center">
                            <h3 class="h5 mb-2">
                                Github
                            </h3>
                        </Row>
                        <Row className="text-center">
                            <p class="mb-0">
                                Basic understanding of using github for collaboration purposes and hosting of portfolios
                            </p>
                        </Row>
                    </Col>

                    <Col md={3} className='mb-3'>
                        <Row className="text-center">
                            <h3 class="h5 mb-2">
                                MVC Architecture
                            </h3>
                        </Row>
                        <Row className="text-center">
                            <p class="mb-0">
                                Separating the model, view and controller for easy collaboration and testing of codes
                            </p>
                        </Row>
                    </Col>

                </Row>

                <Row>

                    <Col md={3} className='mb-3'>
                        <Row className="text-center">
                            <h3 class="h5 mb-2">
                                Electrical Estimate
                            </h3>
                        </Row>
                        <Row className="text-center">
                            <p class="mb-0">
                                Create electrical estimates based on the given plan. It includes
                                all the electrical fixtures, wires, and pipes for the entire
                                project.
                            </p>
                        </Row>
                    </Col>

                    <Col md={3} className='mb-3'>
                        <Row className="text-center">
                            <h3 class="h5 mb-2">
                                Creating As-built plan
                            </h3>
                        </Row>
                        <Row className="text-center">
                            <p class="mb-0">
                                Create as-built plans according to the given instruction and accurately reflect all the changes that needs to be done
                            </p>
                        </Row>
                    </Col>

                    <Col md={3} className='mb-3'>
                        <Row className="text-center">
                            <h3 class="h5 mb-2">
                                Attention to Details
                            </h3>
                        </Row>
                        <Row className="text-center">
                            <p class="mb-0">
                                Accomplishing the task while demonstrating a thorough concern
                                for all the areas involved, no matter how small
                            </p>
                        </Row>
                    </Col>

                    <Col md={3} className='mb-3'>
                        <Row className="text-center">
                            <h3 class="h5 mb-2">
                                Team Leader
                            </h3>
                        </Row>
                        <Row className="text-center">
                            <p class="mb-0">
                                Being involved in engineering and construction management requires the tremendous skill of handling people
                            </p>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </section>


        <section class="page-section" id="portfolio">
            <div class="container px-5 px-lg-5">
                <div class="row gx-4 gx-lg-5">

                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-calculator fs-1 text-primary"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-house-door fs-1 text-primary"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-broadcast fs-1 text-primary"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-search fs-1 text-primary"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-calculator fs-1 text-primary"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2">
                                <i class="bi-house-door fs-1 text-primary"></i>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>

        <div id="portfolio">
            <img src={formal_cbondoc} className="logo profile-small rounded-circle"
                alt="100x100" data-holder-rendered="true" />
        </div>


        <section class="page-section" id="portfolio">
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
                </div>

                <Col>
                    portfolio_attendance_system_1
                </Col>
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
                        <p class="mb-2">
                            Email: cbondoc.it@gmail.com
                        </p>
                        <p class="mb-2">
                            Contact #: +(63)9425618187
                        </p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">

                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
export default Body;

