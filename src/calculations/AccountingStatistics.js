import React from "react";
import {UserDefinedInputs, PercentagesToNumbers} from './UserInput'
import IncomeCalculations from "./Income";
import FirstYearOutOfPocket from "./YearOneCosts";

//Defines ROI and other tools

function AccountingStatistics() {
    let AccountingNumbers = {
        MarketCapitalizationRate = 0,
        CashOnCashReturn = 0,
        MonthlyROI = 0
    }
    let incomeCalc = IncomeCalculations()
    let userInputs = UserDefinedInputs()
    let initialInvestment = FirstYearOutOfPocket()

    //MarketCapitalizationRate -> YearlyNetOperatingIncome / subtotal
    AccountingNumbers.MarketCapitalizationRate = incomeCalc.NetYearlyIncome / userInputs.SubTotal
    //CashOnCashReturn -> initialInvestment / YearlyNetOperatingIncome
    AccountingNumbers.CashOnCashReturn = initialInvestment / incomeCalc.NetYearlyIncome
    //Monthly ROI -> Net Monthly Income/first year out of pocket
    AccountingNumbers.MonthlyROI = incomeCalc.NetMonthlyIncome / initialInvestment
    
    return AccountingNumbers
}

export default AccountingStatistics;
