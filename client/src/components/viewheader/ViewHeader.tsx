import React from 'react';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ViewHeaderProps = {
  title: string;
  action?: {
    /** Route to be navigated to on button click. */
    route: string;
    label: string;
    /** If present, on click function is called instead of navigating to route. */
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'text' | 'outlined' | 'contained' | undefined;
  };
};

export function ViewHeader(props: ViewHeaderProps) {
  const { title, action } = props;
  const navigate = useNavigate();

  const handleActionClick = () => {
    return action?.onClick ? action?.onClick() : navigate('/invoices');
  };

  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <Typography variant="h4">{title}</Typography>
      {action && (
        <Button
          variant={action.variant || 'contained'}
          disabled={action.disabled}
          onClick={handleActionClick}
        >
          {action.label}
        </Button>
      )}
    </Stack>
  );
}
