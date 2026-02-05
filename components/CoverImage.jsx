'use client';

import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  AvatarGroup,
} from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import Image from 'next/image';

function CoverImage() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#FAFAFA',
        minHeight: { xs: '70vh', md: '1100px' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ===== Bottom Blue Background Glow ===== */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-35%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: 420,
          background:
            'radial-gradient(circle, #70D9FF 0%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* ===== Decorative Circles ===== */}
      {[1249, 932, 568].map((size) => (
        <Box
          key={size}
          sx={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: size / 2.5, md: size },
            height: { xs: size / 2.5, md: size },
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
          width: '100%',
          maxWidth: 1237,
          mx: 'auto',
          px: 2,
          textAlign: 'center',
        }}
      >
        {/* ===== IMAGES (HIDDEN ON MOBILE) ===== */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '100%',
            mb: 6,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              height: 520,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              mt: { xs: 4, md: 6 },
            }}
          >
            {/* LEFT IMAGE */}
            <Box
              sx={{
                position: 'relative',
                height: 600,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              {/* LEFT CARD */}
              <Box
                sx={{
                  position: 'relative',
                  height: 640,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* LEFT CARD */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { md: '-320px', lg: '-450px' },
                    top: 120,
                    zIndex: 1,
                    transform: 'rotate(-3deg)',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 520,
                      height: 520,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background:
                        'radial-gradient(circle, #70D9FF 0%, transparent 70%)',
                      filter: 'blur(110px)',
                      opacity: 0.6,
                      zIndex: -1,
                    }}
                  />
                  <Image
                    src="/cover-img-left.png"
                    alt="Left preview"
                    width={440}
                    height={440}
                    style={{ height: 'auto' }}
                  />
                </Box>

                {/* CENTER PHONE */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    transform: 'translateY(20px)', // 👈 reduce dominance
                  }}
                >
                  <Image
                    src="/cover-img-center.png"
                    alt="Center preview"
                    width={540}
                    height={680}
                    style={{ height: 'auto' }}
                  />
                </Box>

                {/* RIGHT CARD */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: { md: '-220px', lg: '-450px' },
                    top: 120,
                    zIndex: 1,
                    transform: 'rotate(3deg)',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 520,
                      height: 520,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background:
                        'radial-gradient(circle, #FFE5AA 0%, transparent 70%)',
                      filter: 'blur(110px)',
                      opacity: 0.6,
                      zIndex: -1,
                    }}
                  />
                  <Image
                    src="/cover-img-right.png"
                    alt="Right preview"
                    width={440}
                    height={440}
                    style={{ height: 'auto' }}
                  />
                </Box>
              </Box>

            </Box>

          </Box>


        </Box>

        {/* ===== USERS ===== */}
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <AvatarGroup
            max={4}
            sx={{
              '& .MuiAvatar-root': {
                width: 48,
                height: 48,
              },
            }}
          >
            <Avatar src="/avatar1.jpg" />
            <Avatar src="/avatar2.jpg" />
            <Avatar src="/avatar3.jpg" />
          </AvatarGroup>

          <Typography fontSize={{ xs: 14, sm: 16 }} fontWeight={500}>
            <Box component="span" sx={{ fontSize: 24, fontWeight: 700 }}>
              59,182
            </Box>{' '}
            Happy Users
          </Typography>
        </Stack>

        {/* ===== TITLE ===== */}
        <Typography
          fontSize={{ xs: '30px', sm: '44px', md: '64px' }}
          fontWeight={700}
          mb={1.5}
        >
          Your AI Health Coach
        </Typography>

        {/* ===== DESCRIPTION ===== */}
        <Typography
          fontSize={{ xs: 14, sm: 16, md: 18 }}
          color="#6B7280"
          maxWidth={720}
          mx="auto"
          mb={4}
        >
          Transform your wellness journey with personalized AI-powered
          guidance that adapts to your unique needs.
        </Typography>

        {/* ===== BUTTONS ===== */}
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
    </Box>
  );
}

export default CoverImage;
