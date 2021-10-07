import React from "react";
import {UserDefinedInputs, PercentagesToNumbers} from './UserInput'
import LoanInformation from './LoanInformation'

//Defines Misc costs

function OverallCosts() {
    let OverallNumbers = {
        TotalBudgetWOInterest: 0,
        TotalBudgetWithInterest: 0
    }
    let userInput = UserDefinedInputs()
    let perNumbers = PercentagesToNumbers()
    let loanInfo = LoanInformation()

    //TotalBudgetWOInterest -> Subtotal + overhead + bonding
    OverallNumbers.TotalBudgetWOInterest = userInput.SubTotal + perNumbers.Overhead + perNumbers.Bonding
    //TotalBudgetWithInterest -> TotalPaidAfterMatured + OverHead + Bonding
    OverallNumbers.TotalBudgetWithInterest = loanInfo.totalRepaid + perNumbers.Overhead + perNumbers.Bonding
}

export default OverallCosts;
