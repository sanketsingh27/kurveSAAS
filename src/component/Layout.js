import React from 'react';
import Navbar from './navbar';
import { Grid, Input, Button, Box } from '@material-ui/core';
import Papa from 'papaparse';
import { Assignment, Book } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { filterCSVdata } from './filterData';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

let fileReader = undefined;

const parseFile = () => {
    let { data: parsedData } = Papa.parse(fileReader.result, { header: true });
    filterCSVdata(parsedData);
};

const processFile = (file) => {
    fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onloadend = parseFile;
};

const Layout = () => {
    const classes = useStyles();

    return (
        <>
            <Grid
                style={{ marginTop: 20, marginLeft: 30, marginRight: 30 }}
                container
                justify="space-around"
            >
                <Grid item>
                    <Button
                        size="medium"
                        variant="outlined"
                        style={{ borderRadius: 50 }}
                    >
                        <Assignment />
                        Test Me{' '}
                    </Button>
                </Grid>

                <Grid item>
                    <Button size="medium" variant="contained" color="primary">
                        <Book />
                    </Button>
                </Grid>
            </Grid>
            <Button className={classes.root}>Hook</Button>
            <br />

            <Box m={1}>
                <Input
                    onChange={(e) => processFile(e.target.files[0])}
                    id="fileInput"
                    type="file"
                />
            </Box>
        </>
    );
};
export default Layout;
