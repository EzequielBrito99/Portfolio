import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects Component', () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it('renders the section title', () => {
    expect(screen.getByText(/Recent/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
  });

  it('renders the section description', () => {
    expect(
      screen.getByText(/In this section some of my latest projects appear/i)
    ).toBeInTheDocument();
  });

  it('renders the Slider component', () => {
    const slider = screen.getByTestId('slider-component');
    expect(slider).toBeInTheDocument();
  });
});
