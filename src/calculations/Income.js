import React from "react";
import {UserDefinedInputs, PercentagesToNumbers} from './UserInput'
import LoanInformation from './LoanInformation'

//Defines initial costs for construction

function IncomeCalculations() {
    let userInput = UserDefinedInputs()
    let perNumbers = PercentagesToNumbers()
    let loanInfo = LoanInformation()

    let IncomeNumbers = {
        GrossYearlyRent: 0,
        GrossMonthlyRent: 0,
        TotalMonthlyExpenditure: 0,
        NetMonthlyIncome: 0,
        NetYearlyIncome: 0,
        ManagementCosts: 0,
        VacancyCosts: 0,
        RepairCosts: 0
    }
    /*
    console.log('userInput' , userInput)
    console.log('pernumbers', perNumbers)
    console.log('loaninfo', loanInfo)
    */

    //Gross Yearly rent -> RentPerSQFT * TotalSQFT
    IncomeNumbers.GrossYearlyRent = userInput.RentPerSQFT * userInput.TotalSQFT
    //Gross Monthly rent -> Gross Yearly/12
    IncomeNumbers.GrossMonthlyRent = IncomeNumbers.GrossYearlyRent / 12
    //total Monthly Expenditure -> ManagementCost+ Vacancy cost + repair costs + insurance cost + monthly Loan payment
    IncomeNumbers.TotalMonthlyExpenditure = perNumbers.ManagementCosts + perNumbers.VacancyCosts + perNumbers.VacancyCosts + perNumbers.RepairCosts + userInput.InsuranceCosts + loanInfo.InsuranceCosts
    //NetMonthlyIncome -> GrossMonthlyIncome - TotalMonthlyExpenditure
    IncomeNumbers.NetMonthlyIncome = IncomeNumbers.GrossMonthlyRent - IncomeNumbers.TotalMonthlyExpenditure
    //NetYearlyIncome -> NetMonthlyIncome * 12
    IncomeNumbers.NetYearlyIncome = IncomeNumbers.NetMonthlyIncome * 12
    //management cost = a % of gross income
    IncomeNumbers.ManagementCosts = userInput.ManagementCostsPercentage * IncomeNumbers.GrossMonthlyRent / 100
    //Vacancy Costs = a % of gross income
    IncomeNumbers.VacancyCosts = userInput.VacancyCostsPercentage * IncomeNumbers.GrossMonthlyRent / 100 
    //Repair cost = a % of gross income
    IncomeNumbers.RepairCosts = userInput.RepairCostsPercentages * IncomeNumbers.GrossMonthlyRent / 100

    console.log('income Numbers' , IncomeNumbers)
    //return IncomeNumbers
    return <h1>IncomeCalculations</h1>
}

export default IncomeCalculations;
