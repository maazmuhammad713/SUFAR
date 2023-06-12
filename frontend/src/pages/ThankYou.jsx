import React, { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../styles/thank-you.css";
import { AuthContext } from "../context/AuthContext";
import bookingContext from "../context/BookingContext";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Table,
} from "reactstrap";
const ThankYou = () => {
  const { user } = useContext(AuthContext);
  const { bookings, getAllBookings } = useContext(bookingContext);

  useEffect(() => {
    getAllBookings(user.email);

    setTimeout(() => {
      handleAlertClose();
    }, 50000);
  }, []);

  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  return (
    <section>
      <div>
        {showAlert && (
          <Alert
            variant="success"
            onClose={handleAlertClose}
            dismissible
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              height: "150px",
            }}
          >
            Thanks! Your tour is booked
          </Alert>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        BOOKING HISTORY
      </div>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <Container fluid>
                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Tour Name</th>
                      <th>Full Name</th>
                      <th>Guest Size</th>
                      <th>Phone</th>
                      <th>BookAt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking._id}>
                        <td>{booking.userEmail}</td>
                        <td>{booking.tourName}</td>
                        <td>{booking.fullName}</td>
                        <td>{booking.guestSize}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.bookAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>

              <Button className="btn primary__btn w-25">
                <Link to="/home">Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ThankYou;
