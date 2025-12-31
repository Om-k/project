function BookingSlot({ time }) {
  return (
    <li className="booking-slot" tabIndex="0" aria-label={`Available time: ${time}`}>
      {time}
    </li>
  );
}

export default BookingSlot;
