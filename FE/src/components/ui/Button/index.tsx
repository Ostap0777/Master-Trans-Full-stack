import React from 'react'
import { Button, Box, TextField, Typography,Input } from '@mui/material';
interface ButtonMUIProps {
	disabled?:  boolean
	text: string
}
function ButtonMUI({ disabled, text }: ButtonMUIProps) {
 {
  return (
	 <Button 
	   sx={{
		color: 'black', 
	   background: 'red'}}>
		{text}
	 </Button>
  )
}
}

export default ButtonMUI;