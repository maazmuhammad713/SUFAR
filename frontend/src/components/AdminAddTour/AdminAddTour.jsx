import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  Alert,
} from "reactstrap";
import { useContext, useState, useEffect } from "react";
import { TourContext } from "../../context/TourState";
const AdminAddTour = () => {
  const [tour, setTour] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    photo: "",
    desc: "",
    price: "",
    maxGroupSize: "",
  });
  const context = useContext(TourContext);
  const { addNewTour } = context;

  const HandleSubmit = (event) => {
    console.log("Submittttttttttttt");
    event.preventDefault();

    if (
      tour.title != "" &&
      tour.city != "" &&
      tour.distance != "" &&
      tour.photo != "" &&
      tour.desc != "" &&
      tour.price != "" &&
      tour.maxGroupSize != ""
    ) {
      console.log("Adding tour");

      const tourObj = {
        title: tour.title,
        city: tour.city,
        address: tour.address,
        distance: tour.distance,
        photo: tour.photo,
        desc: tour.desc,
        price: tour.price,
        maxGroupSize: tour.maxGroupSize,
      };
      console.log(tourObj);
      addNewTour(tourObj);

      setTour({
        title: "",
        city: "",
        price: "",
        address: "",
        distance: "",
        photo: "",
        desc: "",
        maxGroupSize: "",
      });
      Alert("Tour Added successfully", "success");
    } else {
      console.log("Empty---------");
      console.log(tour);
      Alert("No field left null", "danger");
    }
  };

  const onChange = (e) => {
    setTour({ ...tour, [e.target.name]: e.target.value });

    console.log(e.target.name);
  };

  return (
    <div>
      <Container fluid>
        <div className="text-center mb-4">
          <h1 className="display-3 font-weight-bolder">Add Tour</h1>
        </div>
        <form onSubmit={HandleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="photo">Image</Label>
                <Input
                  type="file"
                  name="photo"
                  id="photo"
                  onChange={onChange}
                  value={tour.photo}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  onChange={onChange}
                  value={tour.title}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  onChange={onChange}
                  value={tour.city}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="distance">Distance</Label>
                <Input
                  type="text"
                  name="distance"
                  id="distance"
                  onChange={onChange}
                  value={tour.distance}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  onChange={onChange}
                  value={tour.address}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  onChange={onChange}
                  value={tour.price}
                />
              </FormGroup>
              <FormGroup>
                <Label for="maxGroupSize">Max Group Size</Label>
                <Input
                  type="text"
                  name="maxGroupSize"
                  id="maxGroupSize"
                  onChange={onChange}
                  value={tour.maxGroupSize}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="desc">Description</Label>
                <Input
                  type="textarea"
                  name="desc"
                  id="desc"
                  onChange={onChange}
                  value={tour.desc}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="text-center">
            <button
              className="btn booking__btn mb-4"
              color="primary"
              type="submit"
            >
              Add Tour
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AdminAddTour;
