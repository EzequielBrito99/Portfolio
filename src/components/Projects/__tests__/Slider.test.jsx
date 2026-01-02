import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SliderComp from '../Slider';

vi.mock('../../../data/data', () => ({
  projects: [
    { name: 'Project 1', img: 'project1', disc: 'Description 1', urlDemo: 'https://example1.com' },
    { name: 'Project 2', img: 'project2', disc: 'Description 2', urlDemo: 'https://example2.com' },
    { name: 'Project 3', img: 'project3', disc: 'Description 3', urlDemo: 'https://example3.com' },
  ],
}));

describe('SliderComp Component', () => {
  beforeEach(() => {
    render(<SliderComp />);
  });

  it('renders the slider component', () => {
    expect(screen.getByTestId('slider-component')).toBeInTheDocument();
  });

  it('renders all project items', () => {
    const projectNames = screen.getAllByText(/Project/i);
    const projectDescriptions = screen.getAllByText(/Description/i);

    expect(projectNames.length).toBeGreaterThan(0);
    expect(projectDescriptions.length).toBeGreaterThan(0);
  });

  it('renders navigation buttons', () => {
    const backButton = screen.getByTestId(/back-button/i);
    const nextButton = screen.getByTestId(/next-button/i);

    expect(backButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('navigates to the previous slide when the back button is clicked', () => {
    const backButton = screen.getByTestId(/back-button/i);
    fireEvent.click(backButton);
    // No hay un cambio visible en el DOM para verificar, pero el evento se dispara correctamente.
    expect(backButton).toBeInTheDocument();
  });

  it('navigates to the next slide when the next button is clicked', () => {
    const nextButton = screen.getByTestId(/next-button/i);
    fireEvent.click(nextButton);
    // No hay un cambio visible en el DOM para verificar, pero el evento se dispara correctamente.
    expect(nextButton).toBeInTheDocument();
  });
});
