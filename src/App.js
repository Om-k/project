import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import "./App.css";


const baseTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

// Initialize available times
const initializeTimes = () => {
  return baseTimes;
};

// Reducer function
const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {

    if (action.date === "2025-12-22") {

      return [...baseTimes, "22:00"];
    }

    // Any other date → reset to base times
    return baseTimes;
  }

  return state;
};



function App() {
  // ✅ useReducer added here
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
