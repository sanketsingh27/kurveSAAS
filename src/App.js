import React from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './component/Layout';

const theme = createMuiTheme({
    palette: {
        newColor: {
            main: '#FF5859',
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Layout />
            </div>
        </ThemeProvider>
    );
}
