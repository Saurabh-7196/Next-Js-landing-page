'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

const clients = [
  '/logoipsum1.png',
  '/Logoipsum2.png',
  '/logoipsum3.png',
  '/logoipsum4.png',
  '/logoipsum5.png'
];

function ClientsMarquee() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        height: { xs: '10vh', md: '176px' },
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'fit-content',
          animation: 'scroll 25s linear infinite'
        }}
      >
        {[...clients, ...clients].map((logo, index) => (
          <Box
            key={index}
            sx={{
              minWidth: { xs: '180px', md: '200px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 4, md: 6 }
            }}
          >
            <Image
              src={logo}
              alt="client logo"
              width={166}
              height={40}
              style={{
                objectFit: 'contain',
                filter:
                  'brightness(0) saturate(100%) invert(60%) sepia(6%) saturate(140%) hue-rotate(10deg)'
              }}
            />
          </Box>

        ))}
      </Box>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
}

export default ClientsMarquee;
