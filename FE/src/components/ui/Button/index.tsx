import React from 'react'
import { Button, Box, TextField, Typography,Input } from '@mui/material';
interface ButtonMUIProps {
	disabled?:  boolean;
	text: string;
	onClick: () => void;
}
function ButtonMUI({ disabled, text, onClick }: ButtonMUIProps) {
 {
  return (
	 <Button 
	 onClick={onClick}
	   sx={{
		color: 'black', 
	   background: 'red'}}>
		{text}
	 </Button>
  )
}
}

export default ButtonMUI;