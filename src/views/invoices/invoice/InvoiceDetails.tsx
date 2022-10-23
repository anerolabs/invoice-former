import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {
  invoice: Invoice;
};

export function InvoiceDetails({ invoice }: Props) {
  // console.log(invoice);
  // const { invoice } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '100%' }} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.key}>
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell component="th" scope="row">
                  {invoice[row.key]}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const rows: InfoRow[] = [
  {
    key: 'orderPlaced',
    label: 'Order placed',
  },
  {
    key: 'firstName',
    label: 'First name',
  },
  {
    key: 'lastName',
    label: 'Last name',
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'phone',
    label: 'Phone',
  },
  {
    key: 'pickupTime',
    label: 'Pickup Date',
  },
];

type Invoice = {
  id: number;
  formId: string;
  orderPlaced: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  pickupTime: string;
  subtotal: number;
  salesTax: number;
  total: number;
  sent: string;
  paid: string;
};

type InfoRow = {
  key: keyof Invoice;
  label: string;
};
