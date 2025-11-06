import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Image from '../components/Image';
import '../fonts.css';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0D0D0D',
        width: '100%',
        py: { xs: 3, md: 12 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Image
              src="/images/white-background_blue-logo.svg"
              alt="FreightFi Logo"
              sx={{ width: '40px', height: '40px', mr: 1.5 }}
            />
            <Typography
              sx={{
                fontSize: '32px',
                fontWeight: 500,
                color: '#E9E9E9',
              }}
            >
              FreightFi
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 400,
              color: '#E9E9E9',
              maxWidth: '600px',
            }}
          >
            Modern fintech for logistics companies. Automate invoicing, payments, and reconciliation.
          </Typography>
        </Box>

        <Box sx={{ mb: 6, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/company/freightfi/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: 0,
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn"
              sx={{ width: '32px', height: '32px' }}
            />
          </IconButton>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid #484848',
            mb: 3,
          }}
        />

        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#E9E9E9',
            textAlign: 'center',
          }}
        >
          <Box component="span" sx={{ color: '#808080' }}>©</Box> 2025 FreightFi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

