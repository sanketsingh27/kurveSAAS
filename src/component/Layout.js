import React, { useState } from 'react';
import {
    Grid,
    Input,
    Button,
    Box,
    TextField,
    Container,
    IconButton,
} from '@material-ui/core';
import Papa from 'papaparse';
import { Assignment, Cancel } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { filterCSVdata } from './filterData';
import fileSaver from 'file-saver';
import BasicTable from './tabel';
const clearInput = () => {
    document.getElementById('fileInput').value = '';
};
const Layout = () => {
    // const classes = useStyles();
    const [keys, setKeysValue] = useState('');

    let fileReader = undefined;
    const [filteredData, setFilteredData] = useState(null);

    const parseFile = () => {
        let { data: parsedData } = Papa.parse(fileReader.result, {
            header: true,
        });

        setFilteredData(filterCSVdata(parsedData, keys));
        console.log('Final Details', filteredData);

        // clearInput();
    };

    const processFile = async (file) => {
        fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onloadend = parseFile;
    };

    const downloadFilteredFile = () => {
        const csv = Papa.unparse(filteredData);
        const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        fileSaver.saveAs(csvData, 'filteredData.csv');
    };

    return (
        <>
            <Container>
                <Box m={3}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                    >
                        <Grid item xs={5}>
                            <TextField
                                id="outlined-multiline-static"
                                fullWidth={true}
                                multiline
                                rows={4}
                                value={keys}
                                label="Restricted keywords"
                                variant="outlined"
                                onChange={(e) => setKeysValue(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Input
                                onChange={(e) => processFile(e.target.files[0])}
                                id="fileInput"
                                type="file"
                            />
                            <IconButton
                                color="primary"
                                component="span"
                                onClick={clearInput}
                            >
                                <Cancel />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                size="medium"
                                variant="outlined"
                                color="primary"
                                style={{ borderRadius: 50 }}
                                onClick={downloadFilteredFile}
                            >
                                <Assignment />
                                Download New File
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        {filteredData !== null && (
                            <BasicTable data={filteredData} />
                        )}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};
export default Layout;
