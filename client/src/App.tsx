import React, { useId } from 'react';
import AppProviders from './providers/AppProviders';

function App() {
  const id = useId();
  console.log(id);
  return (
    <AppProviders>
      <div>Hello world!!!</div>
    </AppProviders>
  );
}

export default App;
