import React, { useState } from 'react';
import { useAlert } from '../../providers/alert';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SpreadSheetLoader() {
  const [input, setInput] = useState('');
  const { isOpen, setIsOpen, setAlert } = useAlert();
  const [inputError, setInputError] = useState({
    isError: false,
    helperText: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateSpreadsheetURL(e.target.value);
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (inputError.isError) {
      setAlert({
        message: 'Make sure you are using a valid Google Form Spreadsheet URL',
        severity: 'error',
      });
      setIsOpen(!isOpen);
      return;
    }
  };

  const validateSpreadsheetURL = (url: string) => {
    if (url.length < 3) {
      setInputError({
        isError: true,
        helperText: 'URL should be longer than 3 characters',
      });
    } else {
      setInputError({
        isError: false,
        helperText: '',
      });
    }
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
        error={inputError.isError}
        helperText={inputError.helperText}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Generate Invoices
      </Button>
    </Box>
  );
}
