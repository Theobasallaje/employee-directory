import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export default function AddButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<AddIcon />}>
        Add
      </Button>
    </Stack>
  );
}