import React from "react";
import Testimonials from "../components/Testimonial/Testimonials";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./../shared/Subtitle";

const About = () => {
  return (
    <>
      <section>
        <Container fluid>
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
    </>
  );
};

export default About;
