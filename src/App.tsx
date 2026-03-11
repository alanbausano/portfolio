import React from 'react';
import { Box, Container, Grid, Typography, Paper, Divider } from '@mui/material';
import Navbar from './components/Navbar';
import MatrixBg from './components/MatrixBg';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const projects = [
  { 
    title: "AI Employee Performance", 
    description: "A data-driven platform for measuring and improving employee performance through AI-generated insights and metrics.", 
    tags: ["TypeScript", "React", "Node.js", "AI Analytics", "GROQ"], 
    githubUrl: "https://github.com/alanbausano/ai-employee-performance",
    demoUrl: "https://ai-employee-performance.vercel.app/employees"
  },
  { 
    title: "AI Form Assistant", 
    description: "Intelligent form handling and validation using AI to streamline data entry and improve user experience.", 
    tags: ["React", "AI", "Formik", "Vercel", "AI reformatting", "GROQ"], 
    githubUrl: "https://github.com/alanbausano/ai-form-assistant",
    demoUrl: "https://ai-form-assistant-coral.vercel.app/"
  },
  { 
    title: "Nexus Land", 
    description: "Landing page concept for gaming industry, featuring CSS-only animations and an interactive user experience.", 
    tags: ["React 19", "TypeScript", "Tailwind CSS 4", "Vite"], 
    githubUrl: "https://github.com/alanbausano/nexus-land",
    demoUrl: "https://nexus-sable-six.vercel.app/"
  },
];

const experience = [
  {
    role: "Front-End Developer",
    company: "Glofy",
    period: "March 2025 – Present",
    description: "Developing complex booking systems, price negotiation logic, and waitlists for a large-scale golf reservation platform using Next.js and TanStack Query.",
    tech: "Next, React, TypeScript, TanStack Query, NeonDB"
  },
  {
    role: "Front-End Developer",
    company: "YPF",
    period: "September 2024 – March 2025",
    description: "Built mobile-first UIs and integrated APIs for a critical industrial records tool used in oil field documentation and task management.",
    tech: "Next, React, Redux Toolkit, TypeScript, MaterialUI, .Net, SQL"
  },
  {
    role: "Front-End Developer",
    company: "Eleks",
    period: "March 2023 – September 2024",
    description: "Collaborated on a logistics tool for lighting product ordering, focusing on accessible UI components and performance optimizations.",
    tech: "React, React-Query, TypeScript, MaterialUI, Styled-components"
  },
  {
    role: "Front-End Developer",
    company: "Scrap at Magnético",
    period: "March 2021 – March 2023",
    description: "Led the UI development and refactoring for a recycling logistics platform, providing mentorship to junior developers and optimizing API requests.",
    tech: "React, React-Query, TypeScript, AntDesign, PostgreSQL"
  },
  {
    role: "Front-End Developer",
    company: "Metegol at Magnético",
    period: "December 2021 – December 2022",
    description: "Developed a comprehensive backoffice tool for entertainment statistics and implemented testing suites for cleaner code quality.",
    tech: "React, React Native, React-Query, Jest, Styled-components"
  },
  {
    role: "Full-Stack Developer",
    company: "Academia at Magnético",
    period: "February 2020 – March 2021",
    description: "Created educational platform interfaces and secure backend endpoints, focusing on video performance and data validation.",
    tech: "React, Node, Express, TypeORM, PostgreSQL, Joi"
  }
];

const App: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#000000', color: '#00FF41' }}>
      <MatrixBg />
      <Navbar />
      
      <Hero />

      {/* Projects Section */}
      <Box id="projects" component="section">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.75rem' } }}>
            {'>'} MISSION_PROJECTS
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <ProjectCard {...project} />
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
            {experience.map((exp, index) => (
              <React.Fragment key={index}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" color="primary">{exp.role}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{exp.period} | {exp.company}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {exp.description}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
                    Stack: {exp.tech}
                  </Typography>
                </Box>
                {index < experience.length - 1 && <Divider sx={{ my: 3, borderColor: '#008F11', opacity: 0.3 }} />}
              </React.Fragment>
            ))}
            
            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" color="primary">Core Technologies</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                React, TypeScript, Next.js, Redux, Node, Express, PostgreSQL, MySQL, NeonDB, TanStack Query, Jest, MaterialUI, Tailwind, AntD.
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
