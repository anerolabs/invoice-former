import React, { useState } from 'react';
import { useInvoices } from '../../../hooks/useInvoices';

import { ViewHeader } from '../../../components/viewheader/ViewHeader';
import { InvoiceDetails } from './InvoiceDetails';
import { OrderBreakdown } from './OrderBreakdown';

import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';

export function InvoiceView() {
  const { invoiceid = 0 } = useParams();
  const { invoices } = useInvoices();

  // TODO: Optimize invoice lookup
  const invoiceIdx = Number(invoiceid) - 1;
  let invoice;
  if (invoiceid) {
    invoice = invoices[invoiceIdx];
  }

  // const invoiceSentChip = {
  //   label: invoice.sent
  //     ? `Invoice sent ${invoice.sent}`
  //     : 'Invoice not yet sent',
  //   color: invoice.sent ? 'primary' : 'error',
  // };

  return (
    <>
      <ViewHeader
        action={{
          label: 'Back to invoices',
          route: '/invoices',
        }}
        title={`Invoice #${invoiceid}`}
      />
      <Grid pt={5} container spacing={1}>
        <Grid item xs={12} md={5}>
          {invoice && <InvoiceDetails invoice={invoice} />}
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
