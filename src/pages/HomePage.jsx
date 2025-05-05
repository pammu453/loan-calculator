import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Select,
    MenuItem,
    Alert
} from '@mui/material';
import { calculateLoanDetails } from '../utils/loanUtils';
import AmortizationTable from '../components/AmortizationTable';
import LoanResult from '../components/LoanResult';
import LoanForm from '../components/LoanForm';

const HomePage = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [termYears, setTermYears] = useState(5);
    const [currency, setCurrency] = useState('USD');
    const [emi, setEmi] = useState('');
    const [amortizationSchedule, setAmortizationSchedule] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [error, setError] = useState(null);

    const calculateEMI = () => {
        const result = calculateLoanDetails(loanAmount, interestRate, termYears);
        if (result.error) {
            setError(result.error);
            return;
        }

        setError(null);
        setEmi(result.emi);
        setAmortizationSchedule(result.amortizationSchedule);
        setShowResults(true);
    };

    const resetTable = () => {
        setAmortizationSchedule([]);
        setEmi('');
        setShowResults(false);
    };

    return (
        <Box sx={{ margin: 'auto', padding: 3, maxWidth: 900 }}>
            <Typography variant="h4" gutterBottom>
                Loan Calculator Dashboard
            </Typography>

            <LoanForm
                loanAmount={loanAmount}
                interestRate={interestRate}
                termYears={termYears}
                setInterestRate={setInterestRate}
                setLoanAmount={setLoanAmount}
                setTermYears={setTermYears}
                onSubmit={calculateEMI}
            />

            {error && (
                <Alert variant="filled" severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            {error === null && showResults && (
                <>
                    <LoanResult emi={emi} currency={currency} setCurrency={setCurrency} onReset={resetTable} />
                    <AmortizationTable schedule={amortizationSchedule} currency={currency} />
                </>
            )}
        </Box>
    );
};

export default HomePage;