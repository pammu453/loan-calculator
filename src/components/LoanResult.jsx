import React from 'react';
import { Box, Typography, Paper, Select, MenuItem, Button } from '@mui/material';

const LoanResult = ({ emi, currency, setCurrency, onReset }) => (
    <Paper sx={{ padding: 3, marginBottom: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Monthly EMI: {currency} {emi}
        </Typography>

        <Box sx={{
            display: 'flex',
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            width: '100%'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
                <Typography variant="body1">Currency:</Typography>
                <Select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    sx={{ minWidth: 120, height: 40 }}
                    size="small"
                >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                    <MenuItem value="INR">INR</MenuItem>
                </Select>
            </Box>
            <Button variant="outlined" color="secondary" onClick={onReset} size="small">
                Reset Table
            </Button>
        </Box>
    </Paper>
);

export default LoanResult;
