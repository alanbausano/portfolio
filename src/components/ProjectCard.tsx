import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubUrl, demoUrl, tags }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {'>'} {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {tags.map((tag) => (
            <Typography key={tag} variant="caption" sx={{ color: '#008F11', border: '1px solid #008F11', px: 1, borderRadius: 1 }}>
              {tag}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        {githubUrl && (
          <Button size="small" startIcon={<GitHubIcon />} onClick={() => window.open(githubUrl, '_blank')}>
            Repo
          </Button>
        )}
        {demoUrl && (
          <Button size="small" startIcon={<LaunchIcon />} variant="outlined" onClick={() => window.open(demoUrl, '_blank')}>
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
