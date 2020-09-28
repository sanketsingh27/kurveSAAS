import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable(props) {
    const classes = useStyles();
    let { data: rows } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="justify">Title</TableCell>
                        <TableCell align="justify">URL</TableCell>
                        <TableCell align="justify">Domain</TableCell>
                        <TableCell align="justify">Domain Rating</TableCell>
                        <TableCell align="justify">Date</TableCell>
                        <TableCell align="justify">Number Of Words</TableCell>
                        <TableCell align="justify">Author</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="justify">
                                {row['Content Title']}
                            </TableCell>
                            <TableCell align="justify">
                                {row['Content URL']}
                            </TableCell>
                            <TableCell align="justify">
                                {row['Domain']}
                            </TableCell>
                            <TableCell align="justify">
                                {row['Domain Rating']}
                            </TableCell>

                            <TableCell align="justify">{row['Date']}</TableCell>
                            <TableCell align="justify">
                                {row['Number of Words']}
                            </TableCell>
                            <TableCell align="justify">
                                {row['Author']}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                {/* <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: 'All', value: -1 },
                            ]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            //   ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter> */}
            </Table>
        </TableContainer>
    );
}
