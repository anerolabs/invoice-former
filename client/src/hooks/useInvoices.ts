import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGetInvoices } from './useGetInvoices';
import { Invoice } from '../views/invoices/invoice/InvoiceView';

export function useInvoices() {
  const [invoices, setInvoices] = useState([] as Invoice[]);
  const { data, isLoading } = useQuery(['invoices'], useGetInvoices);

  useEffect(() => {
    if (data && invoices.length === 0) {
      setInvoices(data);
    }
  }, [data]);

  return { invoices, isLoading };
}
