import React from "react";
import IncomeCalculations from "./Income";


//Defines all input required from user

function UserDefinedInputs() {
    let definedInputs = {
        BuildingCostSQFT: 71.69,
        TotalSQFT: 10000,
        OverheadPercentage: 10,
        BondingPercentage: 1,
        DownPaymentPercentage: 10,
        PropertyTaxesPercentage: .04375,
        RentPerSQFT: 25,
        ManagementCostsPercentage: 10,
        VacancyCostsPercentage: 10,
        RepairCostsPercentages: 5,
        SubTotal: 0,
        AnnualInterestRate: 5,
        LengthOfLoanYears: 30,
        NumberOfPaymentsYearly: 12,
        InsuranceCosts: 1100,
        TotalPayments: 0
    };

    //SubTotal -> BuildingCostPerSQFT * totalSQFT
    definedInputs.SubTotal = definedInputs.BuildingCostSQFT * definedInputs.TotalSQFT
    //total payments = length of loan in years * number of yearly payments
    definedInputs.TotalPayments = definedInputs.LengthOfLoanYears * definedInputs.NumberOfPaymentsYearly

    return definedInputs
    //return <h1>userInputs</h1>
}

function PercentagesToNumbers() {
    
    let CostNumbers = {
        Overhead: 0,
        Bonding: 0,
        DownPayment: 0,
        PropertyTaxes: 0,
        TotalBudgetWOInterest: 0
    }
    
    
    let definedInputs = UserDefinedInputs()
    //Overhead = a % of subtotal
    CostNumbers.Overhead = definedInputs.OverheadPercentage * definedInputs.SubTotal / 100
    //bonding = a % of subtotal
    CostNumbers.Bonding = definedInputs.BondingPercentage * definedInputs.SubTotal / 100
    //TotalBudgetWOInterest -> subtotal + overhead + bonding
    CostNumbers.TotalBudgetWOInterest = definedInputs.SubTotal + CostNumbers.Overhead + CostNumbers.Bonding
    //Down payment = a % of Total Budget without interest
    CostNumbers.DownPayment = definedInputs.DownPaymentPercentage * definedInputs.SubTotal / 100 
    //PropertyTaxes = a % of Total Budget without interest rounded to 2 digits
    CostNumbers.PropertyTaxes = definedInputs.PropertyTaxesPercentage * definedInputs.SubTotal / 100 

    return CostNumbers
    
    //return <h1>PercentagesToNumbers</h1>

}

/*
function BasicNumbers() {
    let userInputs = UserDefinedInputs()
    let perNumbers = PercentagesToNumbers()


}
*/

export {UserDefinedInputs, PercentagesToNumbers};
