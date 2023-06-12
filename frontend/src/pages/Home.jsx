import React, { useEffect } from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/pakistan.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import Chatbot from "../shared/Chatbot/Chatbot";

const Home = () => {
  // useEffect(() => {
  //   if(localStorage.getItem('user')===null || localStorage.getItem('user')===undefined || !localStorage.getItem('user') )
  //   {
  //     localStorage.removeItem('role')
  //   }

  // }, [])

  return (
    <>
      {/* ======= hero section start ======== */}
      <section>
        <Container>
          <Chatbot />
        </Container>
        <Container fluid>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Your Gateway to Adventure"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Discover the world &{" "}
                  <span className="highlight"> create memories forever.</span>
                </h1>
                <p>
                  Discover your next adventure with{" "}
                  <b style={{ cursor: "pointer" }}>Sufar</b>. From exotic
                  destinations to hidden gems, we offer a curated selection of
                  unforgettable experiences. Let us inspire you to explore the
                  world and make memories that last a lifetime. Whether you're
                  planning a solo trip or a family vacation, our website
                  provides all the resources you need to plan your perfect
                  getaway.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4 hero__video-box">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ======= hero section start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured tour section start */}
      <section>
        <Container fluid>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/*======= featured tour section end ======*/}

      {/*======= experience section start ======*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  We believe that travel is not just about visiting new places,
                  but also about having meaningful experiences that enrich your
                  life and create lasting memories.
                  <br /> This is your gateway to exploring all the incredible
                  activities we have in store, and we invite you to join us on a
                  journey of discovery, adventure, and personal growth.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>0</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>0</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>0</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*======= experirnce section end ======*/}

      {/* ======= galary section start ======== */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= galary section end ======== */}

      {/* ======= testimonial section start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Tourists Support"} />
              <h2 className="testimonial__title">
                The People Who Make It Happen
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= testimonial section end ======== */}
      <Newsletter />
    </>
  );
};

export default Home;
