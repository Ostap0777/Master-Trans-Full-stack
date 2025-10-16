import React from 'react'
import { Box, TextField, Typography,Input } from '@mui/material';
import InputMUI from '../../components/ui/Input/index';
import Header from '../../components/layout/Header/index';
import Footer from '../../components/layout/Footer/index';

function HomePage({setIsAuth}) {
  return (
	 <Box>
		<Header  setIsAuth={setIsAuth} />
		Ви увійшли
		<Footer/>
	 </Box>
  )
}

export default HomePage;