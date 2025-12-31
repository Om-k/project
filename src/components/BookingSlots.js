import BookingSlot from "./BookingSlot";

function BookingSlots({ availableTimes }) {
  return (
    <section className="booking-slots" aria-label="Available Booking Times">
      <h2>Available Times</h2>
      <ul>
        {availableTimes.length > 0 ? (
          availableTimes.map((time) => <BookingSlot key={time} time={time} />)
        ) : (
          <li>No times available</li>
        )}
      </ul>
    </section>
  );
}

export default BookingSlots;
