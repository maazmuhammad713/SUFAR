import React, { useState, useEffect, useContext, Component } from "react";
import Cookies from "js-cookie";
import AdminAddTour from "../components/AdminAddTour/AdminAddTour";
import { TourContext } from "../context/TourState";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminTourdetails from "../components/AdminTourdetails/AdminTourdetails";
import { Alert } from "reactstrap";
import { BASE_URL } from "./../utlis/config";

const TourDetailsPage = () => {
  const { tours, getAllTours, deleteTour, updateTour } =
    useContext(TourContext);
  const { dispatch, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const [role, setRole] = useState("")
  // const [user, setUser] = useState({})
  // const {user } = useContext(AuthContext);
  useEffect(() => {
    // if(user && user.role!=="admin")
    if (user === null || user === undefined || user === "undefined") {
      navigate("/login");
    } else {
      getAllTours();
    }
    console.log("without updated");
  }, []);

  useEffect(() => {
    console.log("with updated");
    // if(localStorage.getItem('user') === null || localStorage.getItem('user') === 'undefined')
    //   {
    //     dispatch({ type: "LOGOUT" });
    //     navigate('/login');
    //   }
    //   if (localStorage.getItem('user') !== null || localStorage.getItem('user') !== 'undefined') {
    //     // const user = JSON.parse(localStorage.getItem("user"));
    //     // console.log("Yessssssss");
    //     // console.log("User added");
    //     // if (user) {
    //     //   console.log("userExists");
    //     //   getUserDetail(user._id);
    //     // }
    //     // setUser(user);
    //     // console.log(user);
    //     console.log("Inside undefined")
    //     if(JSON.parse(localStorage.getItem('user')).role !=="admin")
    //     {
    //       // console.log(JSON.parse(localStorage.getItem("role")))
    //       dispatch({ type: "LOGOUT" });
    //       navigate('/login');
    //     }
    //   }

    //  else {
    //   console.log("user not");

    // }

    if (user && user.role !== "admin") {
      navigate("/login");
    } else {
      getAllTours();
    }
  }, [user]);

  const handleDelete = (id) => {
    console.log("This id is deleted:" + id);
    deleteTour(id);
    Alert("Note deleted Successfully", "success");
  };

  // const getUserDetail = async (id) => {
  //   // API CALL
  //   const response = await fetch(`${BASE_URL}/users/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const result = await response.json();
  //   console.log("Response")
  //   console.log(result)
  //   if(result.success)
  //   {
  //       console.log("Sucess")
  //     setRole(result.data.role);
  //     if(result.data.role!=="admin")
  //     {
  //       alert("You are not authorized")
  //       navigate("/login")
  //     }
  //     else{
  //       localStorage.setItem("role","admin")
  //       getAllTours();
  //     }
  //   }
  //   console.log("Role")
  //   console.log(role)

  // };

  return (
    <div>
      <AdminAddTour />
      <AdminTourdetails tours={tours} handleDelete={handleDelete} />
      {/* <AdminTourdetails tours={tours} handleDelete={handleDelete} handleUpdate={handleUpdate} /> */}
    </div>
  );
};

export default TourDetailsPage;

// { tours, handleDelete }
