import React from 'react';
import {
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer
} from '@mui/material';

const AmortizationTable = ({ schedule, currency }) => {
    const columns = [
        { id: 'month', label: 'Month', minWidth: 50 },
        { id: 'principal', label: 'Principal', minWidth: 100, align: 'right' },
        { id: 'interest', label: 'Interest', minWidth: 100, align: 'right' },
        { id: 'balance', label: 'Remaining Balance', minWidth: 120, align: 'right' },
    ];

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Typography variant="h6" gutterBottom sx={{ padding: 2 }}>
                Amortization Schedule ({currency})
            </Typography>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="amortization schedule">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedule.map((row) => (
                            <TableRow hover key={row.month}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.id === 'month'
                                                ? value
                                                : `${value} ${currency}`}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default AmortizationTable;
