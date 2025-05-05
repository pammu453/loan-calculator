import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [mode, setMode] = useState('light');

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
        },
    }), [mode]);

    const contextValue = useMemo(() => ({
        mode,
        toggleColorMode,
    }), [mode]);

    return (
        <AppContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
}
