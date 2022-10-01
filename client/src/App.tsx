import React from 'react';
import AppProviders from './providers/AppProviders';

import Box from '@mui/material/Box';

import SpreadSheetLoader from './components/SpreadsheetLoader/SpreadsheetLoader';
import Invoices from './components/Invoices/Invoices';

export default function App() {
  return (
    <AppProviders>
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
          <SpreadSheetLoader />
          <Invoices />
        </Box>
      </Box>
    </AppProviders>
  );
}
