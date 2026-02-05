'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Avatar,
  Paper
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Ava L.',
    role: 'Marketing Executive',
    text: `I've tried countless health apps, but none come close to this.
The AI truly understands my needs—it suggested daily routines and nutrition tips that actually fit my lifestyle.
Within weeks, I felt more energized, slept better, and became more mindful.
It's like having a personal wellness coach in my pocket.`,
    avatar: '/avatar4.png',
    tag: 'Empowered by AI Wellness Journeys'
  },
  {
    name: 'Namo Serlina',
    role: 'CEO Delego',
    text: 'The personalization level is outstanding. It adapts as my routine changes.',
    avatar: '/avatar4.png',
    tag: 'CEO Delego'
  },
  {
    name: 'Namo Serlina',
    role: 'CEO Delego',
    text: 'Simple, clean, and actually useful on a daily basis.',
    avatar: '/avatar4.png',
    tag: 'CEO Delego'
  }
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive(active === 0 ? testimonials.length - 1 : active - 1);

  const next = () =>
    setActive(active === testimonials.length - 1 ? 0 : active + 1);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#F1F5F6',
        textAlign: 'center'
      }}
    >
      <Typography fontSize={{ xs: 28, md: 48 }} fontWeight={700} mb={1}>
        Our Users Feel the
        <br />
        Transformation
      </Typography>

      <Typography fontSize="18px" color="#777E90" mb={6}>
        Real Stories from People Empowered by Personalized
        <br />
        Wellness
      </Typography>

      <Box
        sx={{
          maxWidth: '760px',
          mx: 'auto'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            mb: 2
          }}
        >
          <IconButton
            onClick={prev}
            sx={{
                  display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              left: { xs: -50, md: -96 },
              top: '50%',
              transform: 'translateY(-50%)',
              width: 62,
              height: 62,
              border: '1px solid #E5E7EB',
              backgroundColor: '#fff',
              color: '#9CA3AF',
              '&:hover': {
                backgroundColor: '#2563EB',
                color: '#fff',
                borderColor: '#2563EB'
              }
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <Paper
            elevation={0}
            sx={{
              borderRadius: '20px',
              px: { xs: 3, md: 8 },
              py: { xs: 4, md: 5 }
            }}
          >
            <Box
              sx={{
                maxWidth: 520,
                minHeight: '250px',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Typography fontSize="18px" mb={4} whiteSpace="pre-line">
                “{testimonials[active].text}”
              </Typography>

              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  src={testimonials[active].avatar}
                  sx={{ width: 56, height: 56 }}
                />

                <Box textAlign="left">
                  <Typography fontWeight={600} fontSize="20px">
                    {testimonials[active].name},{' '}
                    {testimonials[active].role}
                  </Typography>

                  <Typography fontSize="16px" color="#777E90">
                    {testimonials[active].tag}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>

          <IconButton
            onClick={next}
            sx={{
                  display: { xs: 'none', md: 'flex' }, 
              position: 'absolute',
              right: { xs: -50, md: -96 },
              top: '50%',
              transform: 'translateY(-50%)',
              width: 62,
              height: 62,
              border: '1px solid #E5E7EB',
              backgroundColor: '#fff',
              color: '#9CA3AF',
              '&:hover': {
                backgroundColor: '#2563EB',
                color: '#fff',
                borderColor: '#2563EB'
              }
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        <Stack
          sx={{
            width: '100%',
            maxWidth: '760px',
            mx: 'auto'
          }}
          direction="row"
          flexWrap="wrap"
          gap={2}
        >
          {testimonials.map((item, index) => (
            <Paper
              key={index}
              onClick={() => setActive(index)}
              sx={{
                boxSizing: 'border-box',
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 8px)',
                  md: '240px'
                },
                height: {
                  xs: '100%',
                  sm: 'calc(50% - 8px)',
                  md: '90px'
                },
                px: 3,
                py: 2,
                borderRadius: '16px',
                cursor: 'pointer',
                opacity: active === index ? 1 : 0.45,
                transition: 'all 0.3s ease',
                backgroundColor: '#fff',
                '&:hover': {
                  opacity: 1
                }
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar src={item.avatar} sx={{ width: 52, height: 52 }} />
                <Box textAlign="left">
                  <Typography fontSize="18px" fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Typography fontSize="16px" color="#6B7280">
                    5 Star Rated
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>

      </Box>
    </Box>
  );
}

export default Testimonials;
