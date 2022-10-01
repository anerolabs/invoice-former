import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

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
      <Typography variant="h4">Invoices</Typography>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

const columns: GridColDef[] = [
  { field: 'formId', headerName: 'Google form id' },
  { field: 'orderPlaced', headerName: 'Order placed' },
  { field: 'lastName', headerName: 'Last name' },
  { field: 'firstName', headerName: 'First name' },
  { field: 'email', headerName: 'Customer email' },
  { field: 'phone', headerName: 'Customer phone' },
  { field: 'pickupTime', headerName: 'Pick up date' },
  { field: 'subtotal', headerName: 'Subtotal' },
  { field: 'salesTax', headerName: 'Sales Tax' },
  { field: 'total', headerName: 'Total' },
  { field: 'sent', headerName: 'Invoice Sent' },
  { field: 'paid', headerName: 'Invoice Paid' },
];

const rows: GridRowsProp = [
  {
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
  },
  {
    id: 2,
    formId: '654321',
    orderPlaced: 'Sep 29, 2022 at 5:38 pm',
    lastName: 'Mowatt',
    firstName: 'Joseph',
    email: 'bulldogbbq65@gmail.com',
    phone: '123-456-0000',
    pickupTime: 'Oct 2, 2022',
    subtotal: '$24.00',
    salesTax: '$1.59',
    total: '$25.59',
    sent: 'Oct 1, 2022',
    paid: 'Oct 1, 2022',
  },
];
