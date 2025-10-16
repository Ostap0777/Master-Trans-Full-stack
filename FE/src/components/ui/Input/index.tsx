import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

interface InputMUIProps {
  disabled?: boolean;
  title?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputMUI({ disabled = false, title = '', placeholder = '', value, onChange }: InputMUIProps) {
  return (
    <Box mb={2}>
      {title && <Typography variant="subtitle1">{title}</Typography>}
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}

export default InputMUI;
