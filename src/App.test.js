import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./reducers";

/* ---------- Existing tests ---------- */

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

test("initializeTimes returns a non-empty array of times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns available times for selected date", () => {
  const state = [];
  const action = { type: "UPDATE_TIMES", date: "2025-12-22" };
  const newState = updateTimes(state, action);
  expect(newState.length).toBeGreaterThan(0);
});

/* ---------- NEW TESTS (FORM VALIDATION) ---------- */

/* Step 1: HTML5 validation attributes */

test("Date input has required attribute", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");
});

test("Guests input has min and max attributes", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Time select has required attribute", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toHaveAttribute("required");
});

/* Step 2: JavaScript validation + submission */
/* Submit button is disabled when form is invalid */
test("Submit button is disabled when form is invalid", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const submitButton = screen.getByRole("button", { name: /Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

/* Submit button is enabled and submits when form is valid */
test("Submit button is enabled and submits when form is valid", () => {
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      submitForm={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2025-12-22" },
  });

  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "2" },
  });

  const submitButton = screen.getByRole("button", { name: /Make Your reservation/i });
  expect(submitButton).not.toBeDisabled();

  fireEvent.click(submitButton);
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
