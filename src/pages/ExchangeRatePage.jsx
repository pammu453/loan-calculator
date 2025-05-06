import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import ExchangeRateTable from '../components/ExchangeRateTable';

export default function ExchangeRatePage() {
    const [rates, setRates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        setError('');

        axios.get(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_API_KEY}/latest/USD`)
            .then((res) => {
                if (res.data?.conversion_rates) {
                    const formatted = Object.entries(res.data.conversion_rates).map(([currency, rate]) => ({
                        currency, rate,
                    }));
                    setRates(formatted);
                } else {
                    setError('Exchange rate data is not available.');
                }
            })
            .catch((err) => {
                console.error('Error fetching exchange rates:', err);
                setError('Failed to fetch exchange rates. Please try again later.');
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <Box sx={{ margin: 'auto', padding: 3, maxWidth: 900 }}>
            <Typography variant="h5" sx={{ marginY: 2 }}>
                Live Exchange Rates (Base: USD)
            </Typography>

            {loading && <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {!loading && !error && <ExchangeRateTable rates={rates} />}
        </Box>
    );
}