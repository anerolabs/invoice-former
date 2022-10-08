import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGetInvoices } from '../../hooks/useGetInvoices';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export function Invoices() {
  const { data: invoices, isLoading } = useQuery(['invoices'], useGetInvoices);

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
      <DataGrid rows={invoices || []} loading={isLoading} columns={columns} />
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
