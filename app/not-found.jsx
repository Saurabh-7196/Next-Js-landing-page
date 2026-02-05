'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        backgroundColor: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 3 },
        textAlign: 'center',
      }}
    >
      {/* ===== Bottom Blue Glow ===== */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '-35%', sm: '-30%' },
          left: '50%',
          transform: 'translateX(-50%)',
          width: '140%',
          height: { xs: 420, sm: 520 },
          background:
            'radial-gradient(circle, #70D9FF 0%, transparent 70%)',
          filter: 'blur(140px)',
          opacity: 0.45,
          pointerEvents: 'none',
        }}
      />

      {/* ===== Decorative Rings ===== */}
      {[1200, 860, 560].map((size, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: '-18%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: size * 0.7, sm: size },
            height: { xs: size * 0.7, sm: size },
            borderRadius: '50%',
            border: '1px solid #E5E7EB',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ===== CONTENT ===== */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 520,
          width: '100%',
        }}
      >
        <Typography
          fontSize={{ xs: 56, sm: 88 }}
          fontWeight={700}
          color="#111827"
          mb={{ xs: 1, sm: 1.5 }}
        >
          Oops!
        </Typography>

        <Typography
          fontSize={{ xs: 18, sm: 22 }}
          fontWeight={600}
          color="#111827"
          mb={1}
        >
          Something went wrong
        </Typography>

        <Typography
          fontSize={{ xs: 14, sm: 16 }}
          color="#6B7280"
          lineHeight={1.6}
          mb={{ xs: 3, sm: 4 }}
        >
          We’re having a little trouble right now.
          <br />
          Don’t worry — we’ll reach you soon.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            component={Link}
            href="/"
            fullWidth
            sx={{
              maxWidth: 220,
              height: 48,
              borderRadius: '999px',
              backgroundColor: '#111827',
              color: '#fff',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#000',
              },
            }}
          >
            Go to Home
          </Button>

          <Button
            component="a"
            href="mailto:support@yourdomain.com"
            fullWidth
            sx={{
              maxWidth: 220,
              height: 48,
              borderRadius: '999px',
              border: '1px solid #E5E7EB',
              backgroundColor: '#fff',
              color: '#111827',
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            Contact Support
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
