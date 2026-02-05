'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqs = [
  {
    q: 'What features does the AI Health Assistant offer?',
    a: 'Experience the future of personalized health and wellness before everyone else.'
  },
  {
    q: 'Is the app customizable to my needs?',
    a: 'Yes, the app adapts recommendations based on your goals and preferences.'
  },
  {
    q: 'How accurate is the AI health tracking?',
    a: 'Experience the future of personalized health and wellness before everyone else. Join our exclusive early access program and help shape the future of AI-powered health coaching.'
  },
  {
    q: 'Do I need any special equipment?',
    a: 'No special equipment is required to use the app.'
  },
  {
    q: 'How does the free trial work?',
    a: 'You can try all premium features free for a limited time.'
  }
];

function FAQ() {
  const [expanded, setExpanded] = useState(2);

  const handleChange = (index) => {
    setExpanded(expanded === index ? false : index);
  };

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        maxHeight: '951px',
        mx: 'auto',
        px: { xs: 2, md: 0 },
        py: { xs: 6, md: 10 }
      }}
    >
      <Typography
        fontSize={{ xs: '28px', md: '48px' }}
        fontWeight={700}
        textAlign="center"
        mb={1}
      >
        Frequently Asked
        <br />
        Questions
      </Typography>

      <Typography
        fontSize="18px"
        color="#777E90"
        textAlign="center"
        mb={6}
      >
        Get answers to common questions about our AI health
        <br />
        assistant app
      </Typography>

      {faqs.map((item, index) => {
        const isOpen = expanded === index;

        return (
          <Accordion
            key={index}
            expanded={isOpen}
            onChange={() => handleChange(index)}
            disableGutters
            elevation={0}
            sx={{
              borderTop: '1px solid #E5E7EB',
              borderBottom: '1px solid #E5E7EB',
              '&:before': { display: 'none' }
            }}
          >
            <AccordionSummary
              expandIcon={isOpen ? <RemoveIcon /> : <AddIcon />}
              sx={{
                px: 0,
                py: 2,
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'none'
                }
              }}
            >
              <Typography
                fontSize={{ xs: '22px', md: '32px' }}
                color={isOpen ? '#2563EB' : '#111827'}
              >
                {item.q}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography fontSize={{ xs: '14px', md: '24px' }}
                color="#777E90">
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}

export default FAQ;
