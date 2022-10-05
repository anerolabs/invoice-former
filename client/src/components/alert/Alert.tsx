import React from 'react';
import { useAlert } from '../../providers/alert/useAlert';

import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import { default as MUIAlert } from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

export default function Alert() {
  const { isOpen, setIsOpen, alert, setAlert } = useAlert();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
      // action={action}
    >
      <Fade in={true}>
        <MUIAlert severity={alert.severity}>
          {alert.message}
          <CloseIcon
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
            fontSize="small"
          />
        </MUIAlert>
      </Fade>
    </Snackbar>
  );
}
/*
severity,
open,
autoHideDuration,
*/
