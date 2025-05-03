import React from "react";
import AdminBookingViewConfirmed from "../../booking/ConfirmedBooking";
import AdminBookingViewPending from "../../booking/PendingBooking";
import AdminBookingViewCancel from "../../booking/CancelledBookings";
import { SettingsPage } from "../../userDashComponent/components/head/HeadComponents";

export default function SettDatas() {
  return (
    <>
      <div className="w-full gap-y-4 bg-white">
        <SettingsPage/>

      </div>
    </>
  );
}
