import React from 'react';
import { Box, TextField, Typography, Button, Divider } from '@mui/material';
import styles from './styles';

function CreateItemsPage() {
  return (
    <Box sx={styles.page}>
      <Typography variant="h4" sx={styles.title}>
        Create Cargo
      </Typography>

      {/* Company info */}
      <Box sx={styles.section}>
        <Typography variant="h6">Company Information</Typography>

        <TextField label="Company Name" fullWidth />
        <TextField label="Contact Person" fullWidth />
        <TextField label="Phone Number" fullWidth />
        <TextField label="Email" fullWidth />
      </Box>

      <Divider />

      {/* Cargo info */}
      <Box sx={styles.section}>
        <Typography variant="h6">Cargo Details</Typography>

        <TextField label="Cargo Description" fullWidth multiline rows={3} />
        <TextField label="Cargo Type" fullWidth />
        <TextField label="Weight (kg)" fullWidth />
        <TextField label="Volume (m³)" fullWidth />
      </Box>

      <Divider />

      {/* Route info */}
      <Box sx={styles.section}>
        <Typography variant="h6">Route</Typography>

        <Typography sx={styles.subTitle}>From</Typography>
        <TextField label="Country" fullWidth />
        <TextField label="City" fullWidth />
        <TextField label="Address" fullWidth />

        <Typography sx={styles.subTitle}>To</Typography>
        <TextField label="Country" fullWidth />
        <TextField label="City" fullWidth />
        <TextField label="Address" fullWidth />
      </Box>

      <Divider />

      {/* Transport info */}
      <Box sx={styles.section}>
        <Typography variant="h6">Transport</Typography>

        <TextField label="Truck Type" fullWidth />
        <TextField label="Loading Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
        <TextField label="Delivery Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
      </Box>

      <Button variant="contained" sx={styles.submitButton}>
        Create Cargo
      </Button>
    </Box>
  );
}

export default CreateItemsPage;
