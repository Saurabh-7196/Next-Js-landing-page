'use client';

import { Box, Typography, Button, IconButton, Stack } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';

function HealthPotential() {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4 }
      }}
    >
      <Box
        sx={{
          maxWidth: '1500px',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 4, md: 8 }
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            fontSize={{ xs: '28px', sm: '34px', md: '48px' }}
            fontWeight={700}
            color="#111827"
            lineHeight={1.2}
            mb={2}
          >
            Maximizing Your Health
            <br />
            Potential Together
          </Typography>

          <Typography
            fontSize={{ xs: '16px', md: '18px' }}
            color="#111827"
            mb={1.5}
          >
            Smart Nutrition Planning
          </Typography>

          <Typography
            fontSize={{ xs: '15px', md: '18px' }}
            color="#777E90"
            lineHeight={1.7}
            maxWidth="460px"
            mb={3}
          >
            Your AI-powered health companion transforms the way you approach wellness, making healthy living effortless and personalized.
          </Typography>

          <Button
            sx={{
              width: { xs: '140px', md: '155px' },
              height: '48px',
              backgroundColor: '#fff',
              color: '#111827',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '999px',
              border: '1px solid #F7F7F7',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#fff',
                boxShadow: '0px 1px 3px rgba(0,0,0,0.06)'
              }
            }}
          >
            Read More
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: '544px' },
            backgroundColor: '#F3F1F5',
            borderRadius: '24px',
            p: { xs: 2, sm: 3, md: '42px' }
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              p: { xs: 2, md: 3 }
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Image
                  src="/stopwatch.png"
                  alt="stopwatch"
                  width={22}
                  height={22}
                />
                <Typography fontSize={{ xs: '16px', md: '18px' }} fontWeight={600}>
                  Time Tracker
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  border: '1px solid #E5E7EB',
                  borderRadius: '999px',
                  px: 1.5,
                  py: 0.5
                }}
              >
                <HistoryIcon sx={{ fontSize: 14, color: '#6B7280' }} />
                <Typography fontSize="14px" color="#6B7280">
                  History
                </Typography>
              </Stack>
            </Stack>

            <Box
              sx={{
                backgroundColor: '#F1F3F5',
                borderRadius: '16px',
                p: 2,
                mb: 2
              }}
            >
              <Typography fontSize="14px" color="#6B7280">
                Design System
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  fontSize={{ xs: '36px', sm: '44px', md: '52px' }}
                  fontWeight={700}
                  color="#111827"
                >
                  10:34:
                  <Box component="span" sx={{ color: '#2563EB' }}>
                    00
                  </Box>
                </Typography>

                <IconButton
                  sx={{
                    width: 52,
                    height: 52,
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    '&:hover': { backgroundColor: '#1D4ED8' }
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 28 }} />
                </IconButton>
              </Stack>
            </Box>

            <Typography fontSize="14px" fontWeight={600} mb={2}>
              Previous Tasks
            </Typography>

            <Stack spacing={2}>
              {[
                { title: 'Loom UI Design System', time: '1:20:35' },
                { title: 'Loom UI / UX Designer', time: '1:45:35' }
              ].map((task, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#EEF2FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Image
                        src="/icon-loom.png"
                        alt="Loom"
                        width={20}
                        height={20}
                      />
                    </Box>

                    <Box>
                      <Typography fontSize="14px" fontWeight={600}>
                        {task.title}
                      </Typography>
                      <Typography fontSize="12px" color="#6B7280">
                        {task.time}
                      </Typography>
                    </Box>
                  </Stack>

                  <IconButton size="small">
                    <MoreVertIcon sx={{ fontSize: 18, color: '#9CA3AF' }} />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HealthPotential;
