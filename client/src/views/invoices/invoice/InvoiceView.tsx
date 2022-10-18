import React, { useState } from 'react';
import { ViewHeader } from '../../../components/viewheader/ViewHeader';
import { InvoiceDetails } from './InvoiceDetails';
import { OrderBreakdown } from './OrderBreakdown';

import Grid from '@mui/material/Grid';

export function InvoiceView() {
  const invoice = mockInvoice;

  const invoiceSentChip = {
    label: invoice.sent
      ? `Invoice sent ${invoice.sent}`
      : 'Invoice not yet sent',
    color: invoice.sent ? 'primary' : 'error',
  };

  return (
    <>
      <ViewHeader
        action={{
          label: 'Back to invoices',
          route: '/invoices',
        }}
        title={`Invoice #${invoice.id}`}
      />
      <Grid pt={5} container spacing={1}>
        <Grid item xs={12} md={5}>
          <InvoiceDetails invoice={mockInvoice} />
        </Grid>
        <Grid item xs={12} md={7}>
          <OrderBreakdown />
        </Grid>
      </Grid>
    </>
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

export type Invoice = {
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
