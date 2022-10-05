import { delay } from './utils';
import { GridRowsProp } from '@mui/x-data-grid';

export async function useGetInvoices() {
  const invoices = await delay(2000);
  return mockRows;
}

const mockRows: GridRowsProp = [
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
