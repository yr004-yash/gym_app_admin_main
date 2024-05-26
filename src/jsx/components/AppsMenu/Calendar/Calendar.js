import React from "react";

import EventCalendar from "./EventCalendar";
import AddClass from "./AddClass";

import PageTitle from "../../../layouts/PageTitle";

const Calendar = () => {
   return (
      <div className="h-80">
         <PageTitle activeMenu="Calerdar" motherMenu="App" />

         <AddClass />
      </div>
   );
};

export default Calendar;
