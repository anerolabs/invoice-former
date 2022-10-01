import React from 'react';
import AppProviders from './providers/AppProviders';

import SpreadSheetLoader from './components/SpreadsheetLoader/SpreadsheetLoader';

export default function App() {
  return (
    <AppProviders>
      <div>Hello world!!!</div>
      <SpreadSheetLoader />
    </AppProviders>
  );
}
