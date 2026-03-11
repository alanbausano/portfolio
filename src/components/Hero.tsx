import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "WAKE UP, NEO... THE MATRIX HAS YOU... FOLLOW THE WHITE RABBIT, AND CHECK OUT ALAN'S REPOS DOWN BELOW.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <Box id="home" component="section" sx={{ textAlign: 'center' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" gutterBottom sx={{ mb: 4, letterSpacing: 4, fontSize: { xs: '2.5rem', md: '4rem' } }}>
            SYSTEM {'>'} INITIALIZED
          </Typography>
          <Typography variant="h2" color="secondary" sx={{ mb: 6, minHeight: '3.6rem' }}>
            {text}<span className="cursor">|</span>
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', textAlign: 'justify' }}>
            I'm a frontend engineer with 6+ years of experience in React and TypeScript. 
            Lately, I've been building AI tools that integrate smoothly into any website. 
            I enjoy turning complex AI capabilities into simple, high-performance experiences 
            that anyone can use. Take a look at my projects below!
          </Typography>
        </motion.div>
      </Container>
      <style>{`
        .cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { color: transparent }
          50% { color: #00FF41 }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
