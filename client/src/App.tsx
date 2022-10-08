import React from 'react';
import AppProviders from './providers/AppProviders';

import { ViewContainer } from './components/viewcontainer/ViewContainer';
import { RouterProvider, Route } from 'react-router-dom';
import { router } from './app-routes';

import Box from '@mui/material/Box';

import Header from './components/header/Header';
import Alert from './components/alert/Alert';
import SpreadSheetLoader from './components/spreadsheetloader/SpreadsheetLoader';

export default function App() {
  return (
    <AppProviders>
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
          <Header />
          <SpreadSheetLoader />

          <ViewContainer>
            <RouterProvider router={router} />
          </ViewContainer>
        </Box>
      </Box>
    </AppProviders>
  );
}
