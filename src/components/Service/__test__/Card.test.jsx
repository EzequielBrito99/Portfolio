import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import GitHubIcon from '@mui/icons-material/GitHub';

describe('Card Component', () => {
  const mockProps = {
    Icon: GitHubIcon,
    title: 'Test Title',
    disc: 'This is a test description.',
  };

  beforeEach(() => {
    render(<Card {...mockProps} />);
  });

  it('renders the icon', () => {
    const icon = screen.getByTestId('GitHubIcon');
    expect(icon).toBeInTheDocument();
  });

  it('renders the title', () => {
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the description', () => {
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
  });
});
