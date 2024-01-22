
"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import  CustomizedTabs from '@/components/Select'

export default function HomePage() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        textAlign: 'center',
      }}
    >
      <Grid container >
        <Grid item xs={12}>
          < CustomizedTabs>
          </ CustomizedTabs>
        </Grid>

      </Grid>
    </Paper>

  );
}
