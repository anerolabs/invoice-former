import React from 'react';
import { useInvoices } from './hooks/useInvoices';

import Box from '@mui/material/Box';
import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import SpreadSheetLoader from './components/spreadsheetloader/SpreadsheetLoader';
import { ViewContainer } from './components/viewcontainer/ViewContainer';

import { Outlet } from 'react-router-dom';

export default function App() {
  const invoices = useInvoices();

  return (
    <>
      <Alert />
      <Box id="root-container" height="100vh" width="100vw" margin="auto">
        <Box
          id="app-shell"
          height="100vh"
          width="80vw"
          margin="auto"
          display="flex"
          flexDirection="column"
          rowGap={2}
          sx={{
            padding: 2,
          }}
        >
          <Header logoClickRoute="/invoices" />
          <SpreadSheetLoader />

          <ViewContainer>
            <Outlet />
          </ViewContainer>
        </Box>
      </Box>
    </>
  );
}
