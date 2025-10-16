import React from 'react'
import { Box,Logo, TextField, Typography,Input } from '@mui/material';
import styles from './style';
import ButtonMUI from '../../ui/Button/index';

function Header({setIsAuth}) {
  return (
	 <Box sx={styles.headerContainer}>
		<Box sx={styles.headerContent}>
			<img src="img/logo (5).svg"/>
			<ButtonMUI 
			text={'Logout'}
			onClick={() => setIsAuth(false)} />
		</Box>
	 </Box>
  )
}

export default Header