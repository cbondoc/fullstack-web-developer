import React from "react";
import "./Body.css";

import { FaLinkedinIn } from "react-icons/fa";

import formal_cbondoc from "../assets/images/formal_cbondoc.jpg";
import bsit_cbondoc from "../assets/images/bsit_cbondoc.png";
import bsee_cbondoc from "../assets/images/bsee_cbondoc.jpg";
import portfolio_attendance_system_1 from "../assets/images/portfolio/portfolio_attendance_1.png";
import portfolio_attendance_system_2 from "../assets/images/portfolio/portfolio_attendance_2.jpg";
import portfolio_gomeco_1 from "../assets/images/portfolio/portfolio_gomeco_1.jpg";
import portfolio_itti_1 from "../assets/images/portfolio/portfolio_itti_1.jpg";
import portfolio_triune_1 from "../assets/images/portfolio/portfolio_triune_1.PNG";
import portfolio_triune_2 from "../assets/images/portfolio/portfolio_triune_2.PNG";

// base projects
import portfolio_base_gmc from "../assets/images/portfolio/base_gmc.png";
import portfolio_base_attendance from "../assets/images/portfolio/base_attendance.png";
import portfolio_base_tesi from "../assets/images/portfolio/base_tesi.png";
import portfolio_base_itti from "../assets/images/portfolio/base_itti.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faLocationCrosshairs,
  faCalculator,
  faCheckDouble,
  faEnvelope,
  faClockRotateLeft,
  faRectangleAd,
  faMobileButton,
  faComputer,
  faPeoplePulling,
  faNetworkWired,
  faPerson,
  faMoneyCheckDollar,
  faHighlighter,
  faObjectUngroup,
} from "@fortawesome/free-solid-svg-icons";

import { Col, Row, Container, Modal } from "react-bootstrap";
import { Component } from "react";

class Body extends Component {
  state = {
    isOpenAttendance: false,
    isOpenGomeco: false,
    isOpenTESI: false,
    isOpenITTI: false,
  };

  openModalAttendance = () => this.setState({ isOpenAttendance: true });
  closeModalAttendance = () => this.setState({ isOpenAttendance: false });

  openModalGomeco = () => this.setState({ isOpenGomeco: true });
  closeModalGomeco = () => this.setState({ isOpenGomeco: false });

  openModalTESI = () => this.setState({ isOpenTESI: true });
  closeModalTESI = () => this.setState({ isOpenTESI: false });

  openModalITTI = () => this.setState({ isOpenITTI: true });
  closeModalITTI = () => this.setState({ isOpenITTI: false });

  render() {
    return (
      <>
        <div className="body mt-5 pt-5">
          {/* navbar */}
          <header className="masthead">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 align-items-center justify-content-center text-center">
                <div className="col-lg-8 align-self-end">
                  <img
                    src={formal_cbondoc}
                    className="logo profile-small rounded-circle"
                    alt="Formal CBondoc"
                    data-holder-rendered="true"
                  />

                  <h1 className="font-weight-bold pt-5">
                    I'm
                    <span className="font-weight-bold text-primary">
                      {" "}
                      Cary Bondoc
                    </span>
                  </h1>
                  <i className="bi bi-123"></i>
                  <h5 className="font-weight-bold p-5">
                    A full-stack web developer based in the Philippines
                  </h5>
                  <h5 className="font-weight-bold p-1 pb-4">
                    Initial number of hours I code starting July 2022 and using
                    VS code alone
                  </h5>
                  <a href="https://wakatime.com/@0ce2f178-b742-4c6c-bf4f-92cd829ec635">
                    <img
                      width="400"
                      height="50"
                      src="https://wakatime.com/badge/user/0ce2f178-b742-4c6c-bf4f-92cd829ec635.svg"
                      alt="Total time coded since Jul 10 2022"
                    />
                  </a>
                  <br />
                  <img
                    width="400"
                    height="50"
                    href="https://codetime.dev"
                    alt="Custom badge"
                    src="https://img.shields.io/endpoint?style=plastic&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D4338%26project%3D%26in%3D0"
                  />
                </div>
              </div>
            </div>
          </header>

          <hr className="divider divider-light mt-5 mb-5" />

          {/* about */}
          <section className="page-section" id="about">
            <div className="container-fluid ">
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-8">
                  <h2 className="mb-4">
                    Integrating Technology and Engineering
                  </h2>
                </div>
                <div className="row">
                  <div className="offset-md-3 col-md-2">
                    <img
                      src={bsit_cbondoc}
                      className="rounded-circle"
                      width={175}
                      height={175}
                      alt="BSIT Graduation"
                    />
                  </div>

                  <div className="offset-md-2 col-md-2">
                    <img
                      src={bsee_cbondoc}
                      className="rounded-circle"
                      width={175}
                      height={175}
                      alt="BSEE Graduation"
                    />
                  </div>
                </div>

                <div className="col-lg-8 pt-5">
                  <h5 className="mb-4">
                    A graduate of both Bachelor of Science in Information
                    Technology (2012) and Bachelor of Science in Electrical
                    Engineering (2020)
                  </h5>
                  <h5 className="mb-4">
                    I'm currently working as a part-time IT Consultant at SPEDI
                    Construction, Inc. My goal is to eliminate manual tasks,
                    automate as much as possible and integrate technology to
                    lessen the workload of engineering
                  </h5>
                  <h5 className="mb-4">
                    I love researching and exploring new skills, discovering new
                    tools and things that may improve my productivity. I also
                    love gardening and doing home improvements!
                  </h5>
                </div>
              </div>
            </div>
          </section>

          <hr className="divider divider-light  mt-5 mb-5" />

          {/* skills */}
          <section className="page-section" id="skills">
            <Container>
              <Col md={12} className="mb-3">
                <Row>
                  <h2 className="text-center">Skills</h2>
                </Row>
              </Col>
              <Row>
                <Col md={3} className="mb-3">
                  <Row className="text-center">
                    <h3 className="h5 mb-2">Frontend Developer</h3>
                  </Row>
                  <Row className="text-center">
                    <p className="mb-0">
                      Basic understanding of React JS, allows me to create
                      interactive UI and bootstrap framework for
                      mobile-friendliness
                    </p>
                  </Row>
                </Col>

                <Col md={3} className="mb-3">
                  <Row className="text-center">
                    <h3 className="h5 mb-2">Backend Developer</h3>
                  </Row>
                  <Row className="text-center">
                    <p className="mb-0">
                      Using laravel as backend and integrating it to React JS
                      and MySQL to store and retrieve data
                    </p>
                  </Row>
                </Col>

                <Col md={3} className="mb-3">
                  <Row className="text-center">
                    <h3 className="h5 mb-2">Github</h3>
                  </Row>
                  <Row className="text-center">
                    <p className="mb-0">
                      Basic understanding of using github for collaboration
                      purposes and hosting of portfolios
                    </p>
                  </Row>
                </Col>

                <Col md={3} className="mb-3">
                  <Row className="text-center">
                    <h3 className="h5 mb-2">MVC Architecture</h3>
                  </Row>
                  <Row className="text-center">
                    <p className="mb-0">
                      Separating the model, view and controller for easy
                      collaboration and testing of codes
                    </p>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col md={3} className="mb-3">
                  <Row className="text-center">
                    <h3 className="h5 mb-2">Electrical Estimate</h3>
                  </Row>
                  <Row className="text-center">
                    <p className="mb-0">
                      Create electrical estimates based on the given plan. It
                      includes all the electrical fixtures, wires, and pipes for
                      the entire project.
                    </p>
                  </Row>
                </Col>

                <Col md={3} className="mb-3">
                  <Row className="text-center">
                    <h3 className="h5 mb-2">Creating As-built plan</h3>
                  </Row>
                  <Row className="text-center">
                    <p className="mb-0">
                      Create as-built plans according to the given instruction
                      and accurately reflect all the changes that needs to be
                      done
                    </p>
                  </Row>
                </Col>

                <Col md={3} className="mb-3">
                  <Row className="text-center">
                    <h3 className="h5 mb-2">Attention to Details</h3>
                  </Row>
                  <Row className="text-center">
                    <p className="mb-0">
                      Accomplishing the task while demonstrating a thorough
                      concern for all the areas involved, no matter how small
                    </p>
                  </Row>
                </Col>

                <Col md={3} className="mb-3">
                  <Row className="text-center">
                    <h3 className="h5 mb-2">Team Leader</h3>
                  </Row>
                  <Row className="text-center">
                    <p className="mb-0">
                      Being involved in engineering and construction management
                      requires the tremendous skill of handling people
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <hr className="divider divider-light  mt-3 mb-1" />

          {/* Portfolio */}

          <section className="page-section" id="portfolio">
            <div className="container">
              <h1 className="text-center mb-5">
                <em>Highlights of My Projects Since 2014</em>
              </h1>

              {/* Project Base */}
              <Row>
                {/* CBondoc Attendance */}
                <Col md={6} className={"text-center"}>
                  <a href="/#" onClick={this.openModalAttendance}>
                    <img
                      src={portfolio_base_attendance}
                      className={"img-fluid"}
                      width={250}
                      alt="CBondoc Attendance System Portfolio"
                    />
                  </a>
                </Col>
                {/* GOMECO */}
                <Col md={6} className={"text-center"}>
                  <a href="/#" onClick={this.openModalGomeco}>
                    <img
                      src={portfolio_base_gmc}
                      className={"img-fluid"}
                      width={500}
                      alt="GOMECO Portfolio"
                    />
                  </a>
                </Col>
              </Row>

              <Row className="mt-5">
                {/* TESI */}
                <Col md={6} className={"text-center"}>
                  <a href="/#" onClick={this.openModalTESI}>
                    <img
                      src={portfolio_base_tesi}
                      className={"img-fluid"}
                      width={250}
                      alt="Triune Electronic Systems, Inc. Portfolio"
                    />
                  </a>
                </Col>
                {/* ITTI */}
                <Col md={6} className={"text-center"}>
                  <a href="/#" onClick={this.openModalITTI}>
                    <img
                      src={portfolio_base_itti}
                      className={"img-fluid"}
                      width={300}
                      alt="ITTI Shoes Portfolio"
                    />
                  </a>
                </Col>
              </Row>
            </div>
          </section>

          <hr className="divider divider-light mt-5 mb-5" />

          <section className="page-section pt-1 text-center">
            <Container>
              <h3 className="mb-5 mt-5">
                Interested in the services that I offered?{" "}
              </h3>
              <h2 className="mb54 mt-5">Lets Get In Touch!</h2>
            </Container>
          </section>

          <section className="page-section" id="contact">
            <Container className="text-center mt-5 mb-5">
              <Row>
                <Col xl={6}>
                  <a href="mailto:cbondoc.it@gmail.com" className="pt-5">
                    <FontAwesomeIcon icon={faEnvelope} size={"3x"} />
                  </a>
                </Col>
                <Col xl={6}>
                  <a href=" https://www.linkedin.com/in/carybondoc/">
                    <FaLinkedinIn size={50} />
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
        </div>

        {/* Modal Attendance System */}
        <Modal
          show={this.state.isOpenAttendance}
          onHide={this.closeModalAttendance}
          size="lg"
        >
          <Modal.Header className="px-4" closeButton>
            <Modal.Title className="ms-auto">
              Attendance System (2022)
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="text-center pt-3">
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faEarthAsia}
                  size={"4x"}
                />
                <p>Mobile-friendly, web-based system</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faCheckDouble}
                  size={"4x"}
                />
                <p>Easy to use, a simple tap is all it takes</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faLocationCrosshairs}
                  size={"4x"}
                />
                <p>Identifies current location of the users</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faCalculator}
                  size={"4x"}
                />
                <p>Determines the total hours</p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={12}>
                <img
                  src={portfolio_attendance_system_1}
                  className={"img-fluid"}
                  width={750}
                  alt="Attendance System Portfolio"
                />
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={12}>
                <img
                  src={portfolio_attendance_system_2}
                  className={"img-fluid"}
                  width={750}
                  alt="Attendance System Portfolio"
                />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        {/* Modal Gomeco */}
        <Modal
          show={this.state.isOpenGomeco}
          onHide={this.closeModalGomeco}
          size="lg"
        >
          <Modal.Header className="px-4" closeButton>
            <Modal.Title className="ms-auto">GOMECO (2014)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="text-center pt-3">
              <Col md={4}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faClockRotateLeft}
                  size={"4x"}
                />
                <p>First company website I created, way back 2014</p>
              </Col>
              <Col md={4}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faRectangleAd}
                  size={"4x"}
                />
                <p>Static pages, focuses on advertisement</p>
              </Col>
              <Col md={4}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faMobileButton}
                  size={"4x"}
                />
                <p>Mobile responsive, even to the last bit of pages</p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={12}>
                <img
                  src={portfolio_gomeco_1}
                  className={"img-fluid"}
                  width={750}
                  alt="GOMECO Portfolio"
                />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        {/* Modal TESSI */}
        <Modal
          show={this.state.isOpenTESI}
          onHide={this.closeModalTESI}
          size="lg"
        >
          <Modal.Header className="px-4" closeButton>
            <Modal.Title className="ms-auto">
              TESI Queuing System (2016)
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="text-center pt-3">
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faComputer}
                  size={"4x"}
                />
                <p>Powered by VB.Net and MySQL</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faPeoplePulling}
                  size={"4x"}
                />
                <p>Manages customer using queuing process</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faNetworkWired}
                  size={"4x"}
                />
                <p>Connected to another system via RS232 serial</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon className="pb-4" icon={faPerson} size={"4x"} />
                <p>Created single handedly by me, from scratch</p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={12} className="mb-3">
                <img
                  src={portfolio_triune_1}
                  className={"img-fluid"}
                  width={750}
                  alt="Attendance System Portfolio"
                />
              </Col>
              <Col md={12}>
                <img
                  src={portfolio_triune_2}
                  className={"img-fluid"}
                  width={750}
                  alt="Attendance System Portfolio"
                />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        {/* Modal ITTI */}
        <Modal
          show={this.state.isOpenITTI}
          onHide={this.closeModalITTI}
          size="lg"
        >
          <Modal.Header className="px-4" closeButton>
            <Modal.Title className="ms-auto">ITTI Shoes (2015)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="text-center pt-3">
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faMobileButton}
                  size={"4x"}
                />
                <p>Mobile-friendly, web-based system</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faMoneyCheckDollar}
                  size={"4x"}
                />
                <p>ECommerce, powered by Paypal</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faHighlighter}
                  size={"4x"}
                />
                <p>Highlights the top 3 rated products at the top</p>
              </Col>
              <Col md={3}>
                <FontAwesomeIcon
                  className="pb-4"
                  icon={faObjectUngroup}
                  size={"4x"}
                />
                <p>Basic design, emphasizes the products</p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={12}>
                <img
                  src={portfolio_itti_1}
                  className={"img-fluid"}
                  width={750}
                  alt="Portfolio ITTI"
                />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Body;
