import bookingContext from "./BookingContext";
import { useState } from "react";
import { BASE_URL } from "../utlis/config";

const BookingState = (props) => {
  // const host = "http://localhost:4000";

  const [bookings, setBookings] = useState([]);

  // Adding Tours

  const getAllBookings = async (email) => {
    const response = await fetch(`${BASE_URL}/booking`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const results = await response.json();

    console.log(results.data);
    console.log(email);
    if (results.success) {
      const filteredUsers = results.data.filter(
        (result) => result.userEmail === email
      );

      setBookings(filteredUsers);
      console.log("Bookinnnnnnnnn");
      console.log(bookings);
    }
  };

  // console.log(tours);
  return (
    <bookingContext.Provider value={{ bookings, getAllBookings }}>
      {props.children}
    </bookingContext.Provider>
  );
};

export default BookingState;
