import React from 'react';
import Box from '@mui/material/Box';

type ViewContainerProps = {
  children: any;
};

export function ViewContainer(props: ViewContainerProps) {
  const { children } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      p={2}
      columnGap={2}
      sx={{
        border: '1px solid #333',
        borderRadius: '3px',
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
}
