import { useState } from "react";
import { BASE_URL } from "../utlis/config";
import { createContext } from "react";

export const TourContext = createContext();

export const TourState = ({ children }) => {
  // const host = "http://localhost:4000";

  const [tours, setTours] = useState([]);

  // Adding Tours

  const getAllTours = async () => {
    const response = await fetch(`${BASE_URL}/tours`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const result = await response.json();

    console.log("Get all tourss----------------");

    console.log(result);

    setTours(result.data);
  };

  const addNewTour = async (tourObj) => {
    // API CALL

    console.log("Inside add new tour---------------------------------->");
    const response = await fetch(`${BASE_URL}/tours`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify(tourObj),
    });

    const result = await response.json();

    getAllTours();
  };

  // Deleting Tours

  const deleteTour = async (id) => {
    // API CALL

    const response = await fetch(`${BASE_URL}/tours/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const result = await response.json();

    getAllTours();
  };

  // Updating Tours

  const updateTour = async (id, tourObj) => {
    console.log("Inside update apiiiiiiii");
    // API CALL

    const response = await fetch(`${BASE_URL}/tours/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify(tourObj),
    });
    const json = await response.json();

    //

    // for (let index = 0; index < Tours.length; index++) {
    //   const element = Tours[index];
    //   if (element._id === id) {
    //     element.title = title;
    //     element.description = description;
    //     element.tag = tag;
    //     // console.log($`{_id}`)
    //   }
    // }

    getAllTours();
  };

  // console.log(tours);
  return (
    <TourContext.Provider
      value={{
        tours,
        getAllTours,
        updateTour,
        deleteTour,
        addNewTour,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};
