import React from 'react';
import AppProviders from './providers/AppProviders';

import Box from '@mui/material/Box';

import SpreadSheetLoader from './components/SpreadsheetLoader/SpreadsheetLoader';

export default function App() {
  return (
    <AppProviders>
      <Box id="root-container" height="100vh" width="100vw" margin="auto">
        <Box
          id="app-shell"
          height="100vh"
          width="80vw"
          margin="auto"
          sx={{
            padding: 2,
          }}
        >
          <SpreadSheetLoader />
        </Box>
      </Box>
    </AppProviders>
  );
}
