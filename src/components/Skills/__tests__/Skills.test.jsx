import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

vi.mock('../../../data/data', () => ({
  skills: ['React', 'JavaScript', 'Node.js']
}));

describe('Skills Component', () => {
  beforeEach(() => {
    render(<Skills />);
  })

  it('renders the section title correctly', () => {
    const title = screen.getByRole('heading', { level: 4, name: /my skills/i });
    expect(title).toBeInTheDocument();
  });

  it('renders the correct number of Skill components based on data', () => {
    const skillItems = screen.getAllByRole('heading', { level: 5 });
    expect(skillItems).toHaveLength(3);
    expect(skillItems[0]).toHaveTextContent('React');
    expect(skillItems[1]).toHaveTextContent('JavaScript');
    expect(skillItems[2]).toHaveTextContent('Node.js');
  });

  it('renders the grid container with Material UI classes', () => {
    const { container } = render(<Skills />);
    const gridContainer = container.querySelector('.MuiGrid-container');
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveClass('MuiGrid-container');
  });

  it('renders all skill logos with correct alt texts', () => {
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('alt', 'React logo');
    expect(images[2]).toHaveAttribute('alt', 'Node.js logo');
  });
});