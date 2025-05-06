import React from 'react';
import {
    Typography,
    Grid,
    Link,
    Box,
    Paper,
    Divider
} from '@mui/material';
import {
    Info as InfoIcon,
    ListAlt as FeaturesIcon,
    Build as TechnologiesIcon,
    Functions as FormulaIcon,
    SyncAlt as ApiIcon,
    Assignment as PurposeIcon
} from '@mui/icons-material';

const AboutPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                padding: 2,
            }}
        >
            <Paper sx={{ width: '100%', maxWidth: 900, padding: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="left">
                    About This App
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="body1" paragraph align="left">
                        This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FeaturesIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h2" gutterBottom>
                        Features:
                    </Typography>
                </Box>
                <ul style={{ textAlign: 'left', paddingLeft: 24 }}>
                    <li>Loan EMI calculation using standard financial formulas</li>
                    <li>Dynamic amortization schedule table with monthly breakdown</li>
                    <li>Real-time currency conversion of EMI using a live exchange rate API</li>
                    <li>Paginated exchange rate table for 160+ currencies</li>
                    <li>Dark/Light mode toggle for a customizable experience</li>
                    <li>Collapsible header navigation on mobile screens</li>
                    <li>Fully responsive UI built with Material UI</li>
                </ul>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TechnologiesIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h2" gutterBottom>
                        Technologies Used:
                    </Typography>
                </Box>
                <ul style={{ textAlign: 'left', paddingLeft: 24 }}>
                    <li>React (Hooks, Routing, Context API)</li>
                    <li>Material UI for styling and responsive components</li>
                    <li>Axios for API calls</li>
                    <li>Exchange Rate API for real-time currency conversion</li>
                </ul>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FormulaIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h2" gutterBottom>
                        EMI Formula Used:
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph align="left">
                    The EMI (Equated Monthly Installment) is calculated using the standard formula:
                </Typography>
                <Typography variant="body1" paragraph align="left">
                    <strong>EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]</strong>
                    <br />
                    Where:
                </Typography>
                <ul style={{ textAlign: 'left', paddingLeft: 24 }}>
                    <li>P = Principal loan amount</li>
                    <li>R = Monthly interest rate (annual rate / 12 / 100)</li>
                    <li>N = Loan duration in months</li>
                </ul>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ApiIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h2" gutterBottom>
                        Currency Conversion API:
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph align="left">
                    This app integrates with the free tier of the ExchangeRate-API to fetch live exchange rates.
                </Typography>
                <Link href="https://v6.exchangerate-api.com" target="_blank" align="left">
                    Visit ExchangeRate API
                </Link>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PurposeIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h2" gutterBottom>
                        Purpose of This App:
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph align="left">
                    This project is designed to assess a candidate's React development skills, including:
                </Typography>
                <ul style={{ textAlign: 'left', paddingLeft: 24 }}>
                    <li>React fundamentals (state, props, hooks)</li>
                    <li>Component structure and code reusability</li>
                    <li>Third-party API integration and live data rendering</li>
                    <li>Working with tables, lists, and pagination</li>
                    <li>Theme customization (dark/light mode toggle)</li>
                    <li>Error handling and graceful UI fallbacks</li>
                    <li>Responsive design and collapsible mobile header navigation</li>
                </ul>

                <Divider sx={{ my: 3 }} />

                <Grid container justifyContent="space-between" alignItems="center" sx={{ marginTop: 4 }}>
                    <Grid>
                        <Typography variant="body2" color="text.secondary">
                            &copy; {new Date().getFullYear()} Loan Calculator App. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AboutPage;