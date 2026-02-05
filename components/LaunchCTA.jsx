'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';
import AppleIcon from '@mui/icons-material/Apple';

function LaunchCTA() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 16 }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '520px', md: '1249px' },
          height: { xs: '520px', md: '1249px' },
          borderRadius: '50%',
          border: '1px solid #f1eded',
          pointerEvents: 'none'
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '360px', md: '932px' },
          height: { xs: '360px', md: '932px' },
          borderRadius: '50%',
          border: '1px solid #f1eded',
          pointerEvents: 'none'
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '260px', md: '568px' },
          height: { xs: '260px', md: '568px' },
          borderRadius: '50%',
          border: '1px solid #f1eded',
          pointerEvents: 'none'
        }}
      />

      <Box
        sx={{
          position: 'relative',
          maxWidth: '760px',
          mx: 'auto',
          px: 2,
          textAlign: 'center',
          zIndex: 1
        }}
      >
        <Typography
          fontSize={{ xs: '14px', md: '16px' }}
          letterSpacing="1.5px"
          color="#6B7280"
          mb={2}
          fontWeight={600}
        >
          SPECIAL LAUNCH OFFER
        </Typography>

        <Typography
          fontSize={{ xs: '30px', sm: '42px', md: '64px' }}
          fontWeight={700}
          color="#111827"
          mb={2}
          lineHeight={1.15}
        >
          Your journey to better
          <br />
          health starts now
        </Typography>

        <Typography
          fontSize={{ xs: '16px', md: '18px' }}
          color="#777E90"
          mb={4}
          lineHeight={1.6}
        >
          Get 50% off your first 3 months when you start your trial today!
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            startIcon={<AppleIcon />}
            sx={{
              width: { xs: '100%', sm: '189px' },
              height: '55px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'none',
              border: '1px solid #F7F7F7',
              '&:hover': {
                boxShadow: '0px 1px 3px rgba(0,0,0,0.06)'
              }
            }}
          >
            Download
          </Button>

          <Button
            startIcon={
              <Image
                src="/playstore.png"
                alt="Play"
                width={20}
                height={20}
              />
            }
            sx={{
              width: { xs: '100%', sm: '189px' },
              height: '55px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'none',
              border: '1px solid #F7F7F7',
              '&:hover': {
                boxShadow: '0px 1px 3px rgba(0,0,0,0.06)'
              }
            }}
          >
            Download
          </Button>
        </Stack>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Image
          src="/icon-doc.png"
          alt="Document"
          width={100}
          height={100}
          style={{
            position: 'absolute',
            top: '18%',
            left: '18%',
            transform: 'rotate(-8deg)',
            zIndex: 2
          }}
        />

        <Image
          src="/icon-chat.png"
          alt="Chat"
          width={100}
          height={100}
          style={{
            position: 'absolute',
            top: '18%',
            right: '18%',
            transform: 'rotate(8deg)',
            zIndex: 2
          }}
        />

        <Image
          src="/icon-user.png"
          alt="User"
          width={100}
          height={100}
          style={{
            position: 'absolute',
            bottom: '30%',
            left: '22%',
            transform: 'rotate(6deg)',
            zIndex: 2
          }}
        />

        <Image
          src="/icon-like.png"
          alt="Like"
          width={100}
          height={100}
          style={{
            position: 'absolute',
            bottom: '30%',
            right: '22%',
            transform: 'rotate(-6deg)',
            zIndex: 2
          }}
        />
      </Box>
    </Box>
  );
}

export default LaunchCTA;
