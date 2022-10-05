import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box
      p={2}
      sx={{
        border: '1px solid #333',
        borderRadius: '3px',
      }}
    >
      <Typography variant="h4">Bulldog BBQ Invoice Manager</Typography>
    </Box>
  );
}
