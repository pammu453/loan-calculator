import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Button,
    useMediaQuery,
    useTheme,
    Switch,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MobileDrawer from './MobileDrawer';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { mode, toggleColorMode } = useContext(AppContext);
    const location = useLocation();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Exchange Rates (Live)', path: '/exchange-rates' },
        { label: 'About', path: '/about' },
        { label: 'Error Page', path: '/error-page' },
    ];

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Loan Calculator
                    </Typography>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Button
                                        key={item.label}
                                        color={isActive ? 'primary' : 'inherit'}
                                        variant={isActive ? 'contained' : 'text'}
                                        component={Link}
                                        to={item.path}
                                    >
                                        {item.label}
                                    </Button>)
                            })}
                            <Switch
                                checked={mode === 'dark'}
                                onChange={toggleColorMode}
                            />
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <MobileDrawer
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                navItems={navItems}
                mode={mode}
                toggleColorMode={toggleColorMode}
            />
        </>
    );
}
