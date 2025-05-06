import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const LoanForm = ({ loanAmount, interestRate, termYears, setLoanAmount, setInterestRate, setTermYears, onSubmit }) => (
    <>
        <Box sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
            <TextField
                label="Loan Amount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                fullWidth
            />
            <TextField
                label="Interest Rate (%)"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                fullWidth
            />
            <TextField
                label="Term (Years)"
                type="number"
                value={termYears}
                onChange={(e) => setTermYears(parseInt(e.target.value))}
                fullWidth
            />
        </Box>
        <Button variant="contained" onClick={onSubmit} sx={{ marginY: 2 }}>
            Calculate
        </Button>
    </>
);

export default LoanForm;
