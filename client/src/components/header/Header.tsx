import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type HeaderProps = {
  logoClickRoute: string;
};

export default function Header(props: HeaderProps) {
  const { logoClickRoute } = props;
  return (
    <Box
      p={2}
      sx={{
        border: '1px solid #333',
        borderRadius: '3px',
      }}
    >
      <Link to={logoClickRoute}>
        <Typography variant="h4">Bulldog BBQ Invoice Manager</Typography>
      </Link>
    </Box>
  );
}
