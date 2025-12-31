import BookingSlot from "./BookingSlot";

function BookingSlots({ availableTimes }) {
  return (
    <ul>
      {availableTimes.map((time) => (
        <BookingSlot key={time} time={time} />
      ))}
    </ul>
  );
}

export default BookingSlots;
