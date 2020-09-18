import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const [isDrawerVisible, setDrawerVisibility] = useState(false);
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className="menuButton"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setDrawerVisibility(!isDrawerVisible)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="title">
                    Project Hub
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            <Drawer
                open={isDrawerVisible}
                anchor={'left'}
                variant={'temporary'}
                onClose={() => setDrawerVisibility(false)}
            >
                <p>item 1 </p>
                <p>item 2</p>
                <p>item 3 </p>
            </Drawer>
        </AppBar>
    );
};
export default Navbar;
