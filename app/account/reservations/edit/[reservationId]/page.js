import Spinner from "@/app/_components/Spinner";
import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { Suspense } from "react";

export default async function Page({ params }) {
  const { reservationId } = await params;
  const reservation = await getBooking(reservationId);
  const cabin = await getCabin(reservation.cabinId);
  const { maxCapacity } = cabin;
  const { numGuests } = reservation;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <UpdateReservationForm
        reservationId={reservationId}
        numGuests={numGuests}
        maxCapacity={maxCapacity}
        reservation={reservation}
      />
    </div>
  );
}
