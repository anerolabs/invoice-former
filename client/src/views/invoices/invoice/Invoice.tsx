import React, { useState } from 'react';
import { InvoiceDetails } from './InvoiceDetails';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Invoice() {
  //implement react router - use pathname to load invoice id
  const invoice = mockInvoice;

  const invoiceSentChip = {
    label: invoice.sent
      ? `Invoice sent ${invoice.sent}`
      : 'Invoice not yet sent',
    color: invoice.sent ? 'primary' : 'error',
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      component="form"
      noValidate
      autoComplete="off"
      p={2}
      columnGap={2}
      sx={{
        border: '1px solid #333',
        borderRadius: '3px',
        height: '100%',
      }}
    >
      <Typography variant="h4">Invoice </Typography>
      <InvoiceDetails invoice={mockInvoice} />
      Pickup date: {invoice.pickupTime}
      Subtotal: {invoice.subtotal}
      Sales tax: {invoice.salesTax}
      Total: {invoice.total}
    </Box>
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

const mockInvoice = {
  id: 1,
  formId: '123456',
  orderPlaced: 'Sep 29, 2022 at 12:22 pm',
  lastName: 'Carnero',
  firstName: 'Andrew',
  email: 'andrew.carnero@gmail.com',
  phone: '123-456-7890',
  pickupTime: 'Oct 3, 2022',
  subtotal: '$50.00',
  salesTax: '$3.31',
  total: '$53.31',
  sent: 'Oct 1, 2022',
  paid: 'Oct 2, 2022',
};
