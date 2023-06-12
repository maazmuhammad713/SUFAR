import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Distance",
    desc: "Discover, Explore, Calculate Your Tour.",
  },
  {
    imgUrl: guideImg,
    title: "Best Travel Guide",
    desc: "We have the best AI travel guide for you",
  },
  {
    imgUrl: customizationImg,
    title: "Booking",
    desc: "Book Best Trip according to user reviews",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
