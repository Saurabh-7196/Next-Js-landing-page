'use client';

import {
  Box,
  Typography,
  Stack,
  Grid,
  IconButton
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <Box
        sx={{
          maxWidth: '1440px',
          mx: 'auto',
          px: { xs: 2, md: '70px' },
          pt: { xs: 2, md: '80px' },
          pb: { xs: 2, md: '40px' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 0 }
          }}
        >
          <Stack spacing={2} maxWidth="490px">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Image
                src="/logo-64.png"
                alt="logo"
                width={30}
                height={30}
              />


              <Typography fontSize="24px" fontWeight={700} color="#0C0C13">
                Reppoo
              </Typography>
            </Stack>

            <Typography fontSize="14px" color="#1F221E">
              innovative health assistant app that leverages artificial
              intelligence to provide personalized wellness recommendations.
            </Typography>

            <Typography fontSize="14px" color="#1F221E">
              hello@reppoo.com
            </Typography>
          </Stack>

          <Grid container spacing={6} maxWidth="520px">
            <Grid item xs={6} sm={4}>
              <Stack spacing={1.5}>
                <Typography fontWeight={600} fontSize="16px">Company</Typography>
                <Typography fontSize="16px" color="#696B68">Home</Typography>
                <Typography fontSize="16px" color="#696B68">Early Access</Typography>
                <Typography fontSize="16px" color="#696B68">404</Typography>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Stack spacing={1.5}>
                <Typography fontWeight={600} fontSize="16px">App</Typography>
                <Typography fontSize="16px" color="#696B68">Download For IOS</Typography>
                <Typography fontSize="16px" color="#696B68">Download For Android</Typography>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Stack spacing={1.5}>
                <Typography fontWeight={600} fontSize="16px">Legal Pages</Typography>
                <Typography fontSize="16px" color="#696B68">Privacy Policy</Typography>
                <Typography fontSize="16px" color="#696B68">Terms & Conditions</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid #E5E7EB',
            mt: '34px',
            pt: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}
        >
          <Typography fontSize="16px" sx={{ color: '#000' }}>
            © Copyright Reppoo
          </Typography>

          <Stack direction="row" spacing={4}>
            <IconButton
              sx={{
                width: 48,
                height: 48,
                border: '1px solid #E5E7EB'
              }}
            >
              <FacebookIcon sx={{ color: '#23262F', fontSize: 20 }} />
            </IconButton>

            <IconButton
              sx={{
                width: 48,
                height: 48,
                border: '1px solid #E5E7EB'
              }}
            >
              <TwitterIcon sx={{ color: '#23262F', fontSize: 20 }} />
            </IconButton>

            <IconButton
              sx={{
                width: 48,
                height: 48,
                border: '1px solid #E5E7EB'
              }}
            >
              <InstagramIcon sx={{ color: '#23262F', fontSize: 20 }} />
            </IconButton>

            <IconButton
              sx={{
                width: 48,
                height: 48,
                border: '1px solid #E5E7EB'
              }}
            >
              <LinkedInIcon sx={{ color: '#23262F', fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Box>

      </Box>
    </Box>
  );
}

export default Footer;
