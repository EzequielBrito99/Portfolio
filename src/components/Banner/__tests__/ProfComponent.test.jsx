import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfComponent from '../ProfComponent';

describe('ProfComponent', () => {
  beforeEach(() => {
    render(<ProfComponent />);
  });

  it('renders the main headings and name', () => {
    expect(screen.getByRole('heading', { name: /ezequiel brito/i })).toBeInTheDocument();
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /i am/i })).toBeInTheDocument();
  });

  it('renders the job title and description', () => {
    expect(screen.getByRole('heading', { name: /senior front-end developer/i })).toBeInTheDocument();
    expect(screen.getByText(/highly skilled senior front-end developer/i)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    expect(screen.getByRole('link', { name: /let's talk/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /check cv/i })).toBeInTheDocument();
  });

  it('renders social media links with correct attributes', () => {
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/EzequielBrito99');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/ezequiel-brito-navarro-a606a9252');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders the profile image with correct attributes', () => {
    const profileImage = screen.getByAltText(/profile/i);
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', '/assets/banner/bannerImageAnimated.svg');
  });
});