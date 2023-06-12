import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import TourDetailsPage from "../pages/TourDetailsPage";
import About from "../pages/About";
import GMap from "../pages/MAP/GMap";

const Routers = ({ IsAdmin, setIsAdmin }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />?
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About />} />
      <Route path="/image" element={<GMap />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/Admin" element={<TourDetailsPage />} />
    </Routes>
  );
};

export default Routers;
