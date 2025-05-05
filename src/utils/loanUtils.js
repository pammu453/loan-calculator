export const calculateLoanDetails = (loanAmount, interestRate, termYears) => {
    if (loanAmount <= 0 || interestRate <= 0 || termYears <= 0) {
        return { error: "Please enter valid values for Loan Amount, Interest Rate, and Term." };
    }

    const monthlyRate = interestRate / 12 / 100;
    const termMonths = termYears * 12;

    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);

    let balance = loanAmount;
    const amortizationSchedule = [];

    for (let i = 1; i <= termMonths; i++) {
        const interest = balance * monthlyRate;
        const principal = emi - interest;
        balance -= principal;
        amortizationSchedule.push({
            month: i,
            principal: principal.toFixed(2),
            interest: interest.toFixed(2),
            balance: balance > 0 ? balance.toFixed(2) : '0.00',
        });
    }

    return {
        emi: emi.toFixed(2),
        amortizationSchedule,
        error: null
    };
};
