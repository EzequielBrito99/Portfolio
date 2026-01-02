import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Project from '../Project';

describe('Project Component', () => {
  const mockProject = {
    name: 'Test Project',
    img: 'test-image',
    disc: 'This is a test project description.',
    urlDemo: 'https://example.com',
  };

  beforeEach(() => {
    render(<Project item={mockProject} />);
  });

  it('renders the project name', () => {
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders the project description', () => {
    expect(screen.getByText(/This is a test project description./i)).toBeInTheDocument();
  });

  it('renders the project image with correct alt text', () => {
    const projectImage = screen.getByAltText('Screenshot of Test Project');
    expect(projectImage).toBeInTheDocument();
  });

  it('renders a live link if urlDemo is provided', () => {
    const liveLink = screen.getByText('Live');
    expect(liveLink).toBeInTheDocument();
    expect(liveLink).toHaveAttribute('href', 'https://example.com');
  });

  it('renders "private" text if urlDemo is not provided', () => {
    const privateProject = {
      ...mockProject,
      urlDemo: null,
    };
    render(<Project item={privateProject} />);
    expect(screen.getByText('private')).toBeInTheDocument();
  });
});
