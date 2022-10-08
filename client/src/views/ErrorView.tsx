import React from 'react';
import { useRouteError } from 'react-router-dom';

import Typography from '@mui/material/Typography';

export default function ErrorView() {
  const error = useRouteError();
  console.error(error);

  return <Typography variant="h3">Something went wrong.</Typography>;
}
