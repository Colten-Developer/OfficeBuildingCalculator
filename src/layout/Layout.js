
import React from "react";
import { UserDefinedInputs, PercentagesToNumbers } from "../calculations/UserInput";
import FirstYearOutOfPocket from "../calculations/YearOneCosts";
import Income from '../calculations/Income'
import LoanInformation from "../calculations/LoanInformation";

//Defines the main layout of the application.

function Layout() {
  return (
    <div>
        <LoanInformation />
    </div>
  );
}

export default Layout;
