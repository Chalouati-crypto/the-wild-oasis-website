import { updateReservation } from "../_lib/actions";
import UpdateReservationButton from "./UpdateReservationButton";

function UpdateReservationForm({
  reservationId,
  numGuests,
  maxCapacity,
  reservation,
  observations,
}) {
  const updateFullReservation = updateReservation.bind(null, reservationId);

  return (
    <form
      className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
      action={updateFullReservation}
    >
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          required
          defaultValue={numGuests}
        >
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          defaultValue={reservation.observations}
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <UpdateReservationButton>Update reservation</UpdateReservationButton>
      </div>
    </form>
  );
}

export default UpdateReservationForm;