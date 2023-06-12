import React, { useState, useContext, useEffect } from "react";

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
  Table,
  Alert,
} from "reactstrap";
import { TourContext } from "../../context/TourState";
import { useNavigate } from "react-router-dom";

// const UpdateModel = ({toggleModal,tour,onChange,HandleChange}) => {
const UpdatePage = ({ tourItem, setidClicked }) => {
  const { updateTour } = useContext(TourContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Update page---");
  }, []);

  const [imagePath, setimagePath] = useState(tourItem.photo);
  const [tour, setTour] = useState({
    // _id:"",
    // title:"",
    // city :"",
    // address:"",
    // distance:"",
    // photo:"",
    // desc:"",
    // price:"",
    // maxGroupSize:""

    _id: tourItem._id,
    title: tourItem.title,
    city: tourItem.city,
    address: tourItem.address,
    distance: tourItem.distance,
    photo: "",
    desc: tourItem.desc,
    price: tourItem.price,
    maxGroupSize: tourItem.maxGroupSize,
  });

  // const handleImageChange=(event)=>{

  //   const file=event.target.files[0];
  //   const reader= new FileReader();

  //   reader.onload=()=>{
  //     setimagePath(reader.result)
  //   }

  //   if(file)
  //   {
  //     reader.readAsDataURL
  //   }
  // }
  const handleUpdate = (tourObj) => {
    console.log("This id is updated:" + tourItem._id);
    updateTour(tourItem._id, tourObj);
    Alert("Note deleted Successfully", "success");
  };

  const onChange = (e) => {
    setTour({ ...tour, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (event) => {
    console.log("Submittttttttttttt Update method---------");
    event.preventDefault();

    if (
      tour.title != "" &&
      tour.city != "" &&
      tour.distance != "" &&
      tour.desc != "" &&
      tour.price != "" &&
      tour.maxGroupSize != ""
    ) {
      console.log("Updating tour");

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
      handleUpdate(tourObj);

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

      Alert("Tour updated successfully", "success");
      setidClicked("");
      navigate("/Admin");
    } else {
      console.log("Empty---------");
      console.log(tour);
      Alert("No field left null", "danger");
    }
  };
  return (
    <div>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "orange",
          padding: "10px",
          width: "200%",
        }}
      >
        <div className="text-center mb-4">
          <h1 className="display-4 font-weight-bold">Update Tour</h1>
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
            <button color="primary" type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default UpdatePage;
