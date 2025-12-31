import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import "./App.css";

import { initializeTimes, submitAPI, updateTimes } from "./reducers";
import ConfirmedBooking from "./pages/ConfirmedBooking";


const baseTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];


function App() {
  // ✅ useReducer added here
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

    const navigate = useNavigate();

  // Step 2: submitForm function
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
