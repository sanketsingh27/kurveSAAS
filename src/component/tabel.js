import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable(props) {
    const classes = useStyles();
    console.log('Dragan ', props);
    let { data: rows } = props;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {Object.keys(rows[0]).map((header, index) => {
                            return (
                                <TableCell key={index} align="right">
                                    {header}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row['domain']}
                            </TableCell>
                            <TableCell align="right">
                                {row['Content URL']}
                            </TableCell>
                            <TableCell align="right">
                                {row['Content Title']}
                            </TableCell>
                            <TableCell align="right">{row['email']}</TableCell>
                            <TableCell align="right">{row['Author']}</TableCell>
                            <TableCell align="right">
                                {row['Domain Rating']}
                            </TableCell>
                            <TableCell align="right">{row['Date']}</TableCell>
                            <TableCell align="right">
                                {row['Number of Words']}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
