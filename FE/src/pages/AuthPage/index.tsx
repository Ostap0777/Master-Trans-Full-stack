import React from 'react'
import { Box, TextField, Typography,Input } from '@mui/material';
import InputMUI from '../../components/ui/Input/index';
import ButtonMUI from '../../components/ui/Button/index';

function AuthPage() {
  return (
	 <Box>
		<InputMUI />
		<InputMUI />
		<ButtonMUI
		 text="Login" 
		 />
	 </Box>
  )
}

export default AuthPage;