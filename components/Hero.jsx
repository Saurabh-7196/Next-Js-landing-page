'use client';

import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Image from 'next/image';

function Hero() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#f9f9f9',
        borderBottom: '1px solid #eee',
        px: { xs: 2, md: '70px' },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          maxWidth: '1440px',
          width: '100%',
          height: '95px',
          mx: 'auto',
          px: 4,
          py: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            sx={{ cursor: 'pointer' }}
          >
            <Image
              src="/logo-64.png"
              alt="logo"
              width={30}
              height={30}
            />
            <Typography
              fontSize="24px"
              fontWeight={600}
              color="#000"
            >
              Reppoo
            </Typography>
          </Box>
        </Link>

        <Link href="/admin/login" >
          <Button
            sx={{
              height: '55px',
              width: '166px',
              backgroundColor: '#fff',
              color: '#000',
              textTransform: 'none',
              borderRadius: '999px',
              border: '1px solid #F7F7F7',
              px: '24px',
              py: '8px',
              mr: '54px',
              fontSize: '18px',
              fontWeight: 700,
              // boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
              '&:hover': {
                backgroundColor: '#fff',
                boxShadow: '0px 1px 3px rgba(0,0,0,0.06)'
              }

            }}
          >
            Admin login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Hero;
