import React, { useContext } from 'react';
import { AlertContext } from './AlertProvider';

export default function useAlert() {
  const alert = useContext(AlertContext);
  if (!alert) {
    throw new Error('Check AlertProvider is used before AlertContext.');
  }
  return alert;
}
