import React from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Switch,
} from '@mui/material';
import { Link } from 'react-router-dom';


const MobileDrawer = ({ open, onClose, navItems, mode, toggleColorMode }) => {
    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={onClose}
            onKeyDown={onClose}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton component={Link} to={item.path}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    <Switch
                        checked={mode === 'dark'}
                        onChange={() => toggleColorMode((prev) => !prev)}
                    />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            {drawerContent}
        </Drawer>
    );
}

export default MobileDrawer