import React from 'react';
import { Box, Container, Grid, Typography, Paper, Divider } from '@mui/material';
import Navbar from './components/Navbar';
import MatrixBg from './components/MatrixBg';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const githubProjects = [
  { title: "Neo_Core", description: "A high-performance microservices framework built with Node.js and TypeScript. Features advanced caching and real-time monitoring.", tags: ["Node.js", "TypeScript", "Redis"], githubUrl: "https://github.com/alanbausano" },
  { title: "Zion_UI", description: "Atomic design component library with Material UI and Framer Motion. Focused on performance and modularity.", tags: ["React", "MUI", "Framer Motion"], githubUrl: "https://github.com/alanbausano" },
  { title: "Sentinel_API", description: "GraphQL API Gateway for secure and scalable data fetching across distributed systems.", tags: ["GraphQL", "Apollo", "Express"], githubUrl: "https://github.com/alanbausano" },
  { title: "Oracle_Data", description: "Data visualization dashboard for real-time analytics using D3.js and WebSockets.", tags: ["D3.js", "WebSockets", "React"], githubUrl: "https://github.com/alanbausano" },
  { title: "Rabbit_Hole", description: "A deep learning experiment for sequence prediction using TensorFlow.js in the browser.", tags: ["TensorFlow.js", "React", "AI"], githubUrl: "https://github.com/alanbausano" },
  { title: "Agent_Smith_JS", description: "A collection of utility functions for DOM manipulation and state management with zero dependencies.", tags: ["JavaScript", "Vanilla", "Performance"], githubUrl: "https://github.com/alanbausano" },
];

const liveDemos = [
  { title: "Nebuchadnezzar_OS", description: "A terminal-themed operating system simulation with real-time process monitoring and file system explorer.", tags: ["React", "PostgreSQL", "TypeORM"], demoUrl: "https://example.com" },
  { title: "Matrix_Store", description: "Full-stack e-commerce platform with stripe integration and dynamic inventory management.", tags: ["Next.js", "Stripe", "Prisma"], demoUrl: "https://example.com" },
  { title: "Glitch_Chat", description: "End-to-end encrypted messaging app with ephemeral rooms and voice support.", tags: ["Socket.io", "WebRTC", "React"], demoUrl: "https://example.com" },
  { title: "Code_Breaker", description: "Interactive coding challenge platform with real-time execution environment.", tags: ["React", "Node.js", "Docker"], demoUrl: "https://example.com" },
  { title: "Morpheus_Music", description: "Lossless audio streaming service with spatial audio support and social playlist sharing.", tags: ["WebAudio", "Firebase", "React"], demoUrl: "https://example.com" },
  { title: "The_Construct", description: "A 3D portfolio template builder using Three.js and React Three Fiber.", tags: ["Three.js", "R3F", "Typescript"], demoUrl: "https://example.com" },
];

const App: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#000000', color: '#00FF41' }}>
      <MatrixBg />
      <Navbar />
      
      <Hero />

      {/* GitHub Projects Section */}
      <Box id="github" component="section">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.75rem' } }}>
            {'>'} REPOS_ARCHIVE
          </Typography>
          <Grid container spacing={4}>
            {githubProjects.map((project, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Live Demos Section */}
      <Box id="demos" component="section">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.75rem' } }}>
            {'>'} ACTIVE_TRANSMISSIONS
          </Typography>
          <Grid container spacing={4}>
            {liveDemos.map((demo, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <ProjectCard {...demo} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box id="experience" component="section" sx={{ backgroundColor: 'rgba(5, 5, 5, 0.8)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.75rem' } }}>
            {'>'} PROFESSIONAL_TIMELINE
          </Typography>
          <Paper elevation={0} sx={{ p: 4, backgroundColor: 'transparent', borderLeft: '2px solid #008F11' }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" color="primary">Senior Front-End Engineer</Typography>
              <Typography variant="subtitle1" color="text.secondary">Present | Remote</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Developing high-performance React applications, optimizing bundle sizes, and mentoring junior developers.
              </Typography>
            </Box>
            <Divider sx={{ my: 3, borderColor: '#008F11' }} />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" color="primary">Full-Stack Developer</Typography>
              <Typography variant="subtitle1" color="text.secondary">Earlier Years | Tech Solutions Inc.</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Built and maintained complex APIs with Node.js and SQL while delivering responsive UIs with React and Redux.
              </Typography>
            </Box>
            <Divider sx={{ my: 3, borderColor: '#008F11' }} />
            <Box>
              <Typography variant="h5" color="primary">Core Technologies</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                React, TypeScript, Next.js, Redux, Node, Express, PostgreSQL, MySQL, Jest, MaterialUI, Tailwind, AntD.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" component="section">
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ mb: 4, fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.75rem' } }}>
            {'>'} ESTABLISH_LINK
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Ready for a new mission. Feel free to reach out for collaborations or opportunities.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <Box 
              component="a" 
              href="mailto:alan.bausano@gmail.com" 
              sx={{ color: '#00FF41', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1, '&:hover': { color: '#ffffff' } }}
            >
              <EmailIcon /> alan.bausano@gmail.com
            </Box>
            <Box 
              component="a" 
              href="https://www.linkedin.com/in/alan-bausano" 
              target="_blank"
              sx={{ color: '#00FF41', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1, '&:hover': { color: '#ffffff' } }}
            >
              <LinkedInIcon /> LinkedIn
            </Box>
          </Box>
          <Typography variant="caption" display="block" sx={{ mt: 10, opacity: 0.5 }}>
            © 2026 ALAN_BAUSANO. ALL RIGHTS RESERVED. [DECRYPTED_SESSION]
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
