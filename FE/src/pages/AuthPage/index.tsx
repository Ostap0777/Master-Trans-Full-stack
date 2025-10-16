import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography,Input } from '@mui/material';
import InputMUI from '../../components/ui/Input/index';
import ButtonMUI from '../../components/ui/Button/index';
import { useLoginForm } from '../../hooks/useLoginForm';
import styles from './styles'


interface AuthPageProps {
	setIsAuth: (value: boolean) => void;
 }

function AuthPage({ setIsAuth }: AuthPageProps) {
	const navigate = useNavigate()
	const { email, password, error, setEmail, setPassword, handleSubmit } = useLoginForm(setIsAuth);
  return (
	<Box>
<Box
  component="img"
  src="/img/зображення_viber_2023-01-13_21-24-46-796.jpg"
  alt="Main Image"
  sx={styles.MainImage}
/>
	 <Box
	 component="form"
	 sx={styles.formBlock}
	 onSubmit={(e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted');
	 }}>
		<Typography>Autorithaion</Typography>
		<InputMUI 
		onChange={(e: React.FormEvent) => setEmail(e.target.value)}
		/>
		<InputMUI
		onChange={(e:React.FormEvent) => setPassword(e.target.value)}
		/>
		<Typography   onClick={() => navigate('/auth')}>Зареєструватися</Typography>
		{error && <Typography sx={{color: 'red'}}>{error}</Typography>}
		<ButtonMUI
		 text="Login"
		 type="submit"
		 onClick={handleSubmit}
		 />
	 </Box>
	 </Box>
  )
}

export default AuthPage;