import { React, useState, useContext, useEffect } from "react";
import UpdatePage from "./UpdatePage";
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

const AdminTourdetails = ({ tours, handleDelete }) => {
  const [render, setrender] = useState(false);
  const [idClicked, setidClicked] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const [tour, setTour] = useState({
  //   id: "",
  //   title: "",
  //   city: "",
  //   tag: "",
  //   distance: 0,
  //   photo: "",
  //   desc: "",
  //   price: 0,
  //   maxGroupSize: 0,
  // });
  // const toggleModal = (tourObj) => {
  //   console.log("inside toggle model------------------------------------>")
  //   setTour({
  //     id: tourObj.id,
  //   title: tourObj.title,
  //   city: tourObj.city,
  //   tag: tourObj.tag,
  //   distance: tourObj.distance,
  //   photo:tourObj.photo,
  //   desc: tourObj.desc,
  //   price: tourObj.price,
  //   maxGroupSize: tourObj.maxGroupSize,
  //   });
  //   console.log(tour)
  //   setShowModal(!showModal);
  // };

  // const onChange = (e) => {
  //   setTour({ ...tour, [e.target.name]: e.target.value });
  // };
  // function HandleChange(event) {
  //   event.preventDefault();

  //   if (
  //     tour.title !== "" &&
  //     tour.city !== "" &&
  //     tour.tag !== "" &&
  //     tour.distance !== "" &&
  //     tour.photo !== "" &&
  //     tour.desc !== "" &&
  //     tour.price !== "" &&
  //     tour.maxGroupSize !== ""
  //   ) {
  //     console.log("Updating tour");

  //     const tourObj = {
  //       title: tour.title,
  //       city: tour.city,
  //       tag: tour.tag,
  //       distance: tour.distance,
  //       photo: tour.photo,
  //       desc: tour.desc,
  //       price: tour.price,
  //       maxGroupSize: tour.maxGroupSize,
  //     };
  //     handleUpdate(tour.id, tourObj);

  //     setTour({
  //       id: "",
  //       title: "",
  //       city: "",
  //       price: "",
  //       tag: "",
  //       distance: "",
  //       photo: "",
  //       desc: "",
  //       maxGroupSize: "",
  //     });
  //     Alert("Tour updated successfully", "success");
  //   } else {
  //     Alert("No field left null", "danger");
  //   }
  // }

  const handleClick = (id) => {
    setrender(!render);
    setidClicked(id);
  };
  return (
    <div>
      <Container fluid>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>City</th>
              <th>Distance</th>
              <th>Address</th>
              <th>Price</th>
              <th>Max Group Size</th>
              <th>Description</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tourItem) => (
              <>
                <tr key={tourItem._id}>
                  <td>
                    <img src={tourItem.image} alt={tourItem.title} />
                  </td>
                  <td>{tourItem.title}</td>
                  <td>{tourItem.city}</td>
                  <td>{tourItem.distance}</td>
                  <td>{tourItem.address}</td>
                  <td>{tourItem.price}</td>
                  <td>{tourItem.maxGroupSize}</td>
                  <td>{tourItem.desc}</td>
                  <td>
                    <Button
                      color="primary"
                      size="sm"
                      variant="primary"
                      onClick={() => {
                        console.log("clicked");
                        handleClick(tourItem._id);
                      }}
                    >
                      Update
                    </Button>

                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => handleDelete(tourItem._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>

                <div>
                  {render && idClicked == tourItem._id ? (
                    <UpdatePage
                      tourItem={tourItem}
                      setidClicked={setidClicked}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </>
            ))}
          </tbody>
        </Table>
      </Container>
      {/* <Modal show={showModal} onHide={toggleModal}>
        <UpdateModel tour={tour} toggleModal={toggleModal} onChange={onChange} HandleChange={HandleChange}/>
      </Modal> */}
      {/* Button to trigger the modal */}
      {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateModal">
        Update User
      </button> */}

      {/* Modal */}
      {/* <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="updateModalLabel">Update User</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="photo">Image</label>
                    <input type="file" className="form-control" id="photo" name="photo" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" name="city" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Distance</label>
                    <input type="number" className="form-control" id="distance" name="distance" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Address</label>
                    <input type="text" className="form-control" id="address" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Price</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Max Group Size</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={updateUser}>Update</button>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default AdminTourdetails;
