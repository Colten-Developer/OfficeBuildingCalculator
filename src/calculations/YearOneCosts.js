import React from "react";
import {UserDefinedInputs, PercentagesToNumbers} from './UserInput'

//Defines initial costs for construction

function FirstYearOutOfPocket() {
    let PerNumbers = PercentagesToNumbers()

    //down payment + property taxes + management Costs + vacancy cost + repair costs
    let OutOfPocket = PerNumbers.DownPayment + PerNumbers.PropertyTaxes + PerNumbers.ManagementCosts + PerNumbers.VacancyCosts + PerNumbers.RepairCosts 
    
    return OutOfPocket
}

export default FirstYearOutOfPocket;
