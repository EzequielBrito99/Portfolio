import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skill from '../Skill';
import { beforeEach } from 'vitest';

describe('Skill Component', () => {
  const mockName = 'react';

  beforeEach(() => {
    render(<Skill name={mockName} />);
  });

  it('renders the skill name correctly', () => {    
    const heading = screen.getByRole('heading', { level: 5 });
    expect(heading).toHaveTextContent(mockName);
    expect(heading).toHaveClass('green');
  });

  it('renders the image with correct alt text', () => {
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', `${mockName} logo`);
  });

  it('resolves the image src correctly', () => {    
    const image = screen.getByRole('img');
    expect(image.src).toBeTruthy();  
    // Verificamos que sea un Data URI (comportamiento de Vite en tests)
    // O que contenga el nombre si en el futuro se cambia la config
    const isDataUri = image.src.startsWith('data:image/');
    const isFilePath = image.src.includes(`${mockName}.svg`);    
    expect(isDataUri || isFilePath).toBe(true);
  });

  it('has the correct Material UI Grid classes', () => {
    const { container } = render(<Skill name={mockName} />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('skill-wrapper');
    expect(wrapper).toHaveClass('MuiGrid-item');
  });
});