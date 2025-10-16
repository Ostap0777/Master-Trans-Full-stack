import React from 'react'
import { Box, TextField, Typography,Input } from '@mui/material';
import styles from './style';

function Footer() {
  return (
	<Box sx={styles.FooterContainer}>
	<Box sx={styles.FooterContent}>
		<img src="img/logo (5).svg"/>
	</Box>
 </Box>
  )
}

export default Footer;