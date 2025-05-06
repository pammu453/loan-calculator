import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableFooter,
    TablePagination, TableRow, Paper
} from '@mui/material';
import TablePaginationActions from './TablePaginationActions';

export default function ExchangeRateTable({ rates }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rates.length) : 0;

    return (
        <TableContainer component={Paper}>
            <Table aria-label="exchange rate table">
                <TableBody>
                    {(rowsPerPage > 0
                        ? rates.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rates
                    ).map((row) => (
                        <TableRow key={row.currency}>
                            <TableCell>{row.currency}</TableCell>
                            <TableCell align="right">{row.rate}</TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={2} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={2}
                            count={rates.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
