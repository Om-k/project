import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./reducers";

test("Renders the BookingForm static text", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={jest.fn()}
    />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes returns the correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
});

test("updateTimes returns the same state when called", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-12-22" };

  const newState = updateTimes(state, action);

  expect(newState).toEqual(state);
});
