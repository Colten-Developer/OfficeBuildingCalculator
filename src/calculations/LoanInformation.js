import React from "react";
import {UserDefinedInputs, PercentagesToNumbers} from './UserInput'

//Defines initial costs for construction

function LoanInformation() {
    let LoanNumbers = {
        PrincipalLoanAmount: 0,
        MonthlyLoanPayment: 0,
        totalRepaid: 0,
        TotalInterestPaid: 0,
        TotalInterestAsPerOfPrincipal: 0,
        PrincipalInPayment: 0,
        InterestInPayment: 0,
        CumulativePaid: 0,
        CumulativeInterest: 0,
        CumulativePrincipal: 0,
        PrincipalBalance: 0,
        PaidAfterLoanMatured: 0,
        MonthlyInterestRates: 0
    }

    let userInput = UserDefinedInputs()
    let perNumbers = PercentagesToNumbers()

    console.log('userInput' , userInput)
    console.log('pernumbers', perNumbers)

    //PrincipalLoanAmount -> SubTotal - DownPayment
    LoanNumbers.PrincipalLoanAmount =  userInput.SubTotal - perNumbers.DownPayment
    //MonthlyInterestRates -> annualInterestRate / 12
    LoanNumbers.MonthlyInterestRates = userInput.AnnualInterestRate / 12
    
    
    
    //MonthlyLoanPayment -> Fucking math
    //---->Principal {interest rate (1+ interest rate) ^ total number of payments} / {(1+interest rate) ^ number of payments -1}  
    LoanNumbers.MonthlyLoanPayment = LoanNumbers.PrincipalLoanAmount * ((LoanNumbers.MonthlyInterestRates / 100) * (Math.pow((1 + (LoanNumbers.MonthlyInterestRates / 100)), userInput.TotalPayments)) / (Math.pow((1 + (LoanNumbers.MonthlyInterestRates / 100)), userInput.TotalPayments) -1))
    //totalRepaid -> monthly payments * total Payments
    LoanNumbers.totalRepaid = LoanNumbers.MonthlyLoanPayment * userInput.TotalPayments
    //TotalInterestPaid -> total repaid - principal loan amount
    LoanNumbers.TotalInterestPaid = LoanNumbers.totalRepaid - LoanNumbers.PrincipalLoanAmount
    //TotalInterestAsPerOfPrincipal -> TotalInterestPaid / PrincipalLoanAmount
    LoanNumbers.TotalInterestPaid = LoanNumbers.TotalInterestPaid / LoanNumbers.PrincipalLoanAmount
    //InterestInPayment -> interestRatesMonthly * PrincipalBalance
    LoanNumbers.InterestInPayment = LoanNumbers.MonthlyInterestRates * LoanNumbers.PrincipalLoanAmount
    //PrincipalInPayment -> monthlyPayment - interest
    LoanNumbers.PrincipalInPayment = LoanNumbers.MonthlyLoanPayment - LoanNumbers.InterestInPayment
    //PaidAfterLoanMatured = totalPayments * MonthlyPaymentCosts
    LoanNumbers.PaidAfterLoanMatured = userInput.TotalPayments * LoanNumbers.MonthlyLoanPayment

    /* **TODO** 
    Create loop for the chart data
    //CumulativePaid -> PaymentNumber * MonthlyPayment (need to create loop for chart)
    //CumulativeInterest -> All previous interest added together
    //CumulativePrincipal -> all previous principal added
    //principal balance -> PrincipalLoanAmount - (CumulativePaid)
    */

    console.log(LoanNumbers)

    //return LoanNumbers

    return <h1>Loan Numbers</h1>

}

export default LoanInformation;
