import React from 'react';
import Typography from '@mui/material/Typography';

type ViewHeaderProps = {
  title: string;
};

export function ViewHeader(props: ViewHeaderProps) {
  const { title } = props;
  return <Typography variant="h4">{title}</Typography>;
}
