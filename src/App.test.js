import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./reducers";

test("Renders the BookingForm static text", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

/* Step 1: initializeTimes test */
test("initializeTimes returns a non-empty array of times", () => {
  const times = initializeTimes();

  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

/* Step 2: updateTimes test */
test("updateTimes returns available times for selected date", () => {
  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    date: "2025-12-22",
  };

  const newState = updateTimes(state, action);

  expect(Array.isArray(newState)).toBe(true);
  expect(newState.length).toBeGreaterThan(0);
});
