import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SpreadSheetLoader() {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      component="form"
      noValidate
      autoComplete="off"
      p={2}
      columnGap={2}
      sx={{
        border: '1px solid #333',
        borderRadius: '3px',
      }}
    >
      <TextField
        color="primary"
        label="Google Form URL"
        placeholder="Paste your Google Form link here..."
        value={input}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Button variant="contained">Generate Invoices</Button>
    </Box>
  );
}
