import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Booking = () => {
    const { user } = useAuth();
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        const url = `https://pure-brushlands-02882.herokuapp.com/bookings?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));
    }, [user.email])

    return (
        <div>
            <h2>Your Booking Items:{purchase.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="booking table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Products Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchase.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.cycle_name}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Booking;