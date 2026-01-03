import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from '../Services';

// mock de los iconos de servicios
vi.mock('@mui/icons-material/DesignServices', () => ({
  default: () => <div data-testid="icon-design" />
}));
vi.mock('@mui/icons-material/Handyman', () => ({
  default: () => <div data-testid="icon-handyman" />
}));
vi.mock('@mui/icons-material/Speed', () => ({
  default: () => <div data-testid="icon-speed" />
}));

describe('Services Component', () => {
  beforeEach(() => {
    render(<Services />);
  });

  it('renders the section title', () => {
    expect(screen.getByTestId(/section-title/i)).toBeInTheDocument();
    expect(screen.getByText(/What I Do/i)).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    const services = [
      { title: 'ui/ux', description: 'Design and development of user interfaces.' },
      { title: 'maintenance', description: 'Website maintenance and migrations.' },
      { title: 'performance', description: 'Optimization of website performance and loading speed.' },
    ];

    services.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it('renders icons for each service card', () => {
    expect(screen.getByTestId('icon-design')).toBeInTheDocument();
    expect(screen.getByTestId('icon-handyman')).toBeInTheDocument();
    expect(screen.getByTestId('icon-speed')).toBeInTheDocument();
  });
});
