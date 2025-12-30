import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('renders logo and title', () => {
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
    expect(screen.getByTestId('WebhookIcon')).toBeInTheDocument();
  });

  it('renders menu icon initially', () => {
    expect(screen.getByTestId('MenuOpenIcon')).toBeInTheDocument();
  });

  it('toggles menu on icon click', () => {
    const menuIcon = screen.getByTestId('MenuOpenIcon');
    fireEvent.click(menuIcon);    
    expect(screen.getByTestId('CloseIcon')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('CloseIcon'));
    expect(screen.getByTestId('MenuOpenIcon')).toBeInTheDocument();
  });

  it('displays navigation links when menu is open', () => {
    fireEvent.click(screen.getByTestId('MenuOpenIcon'));    
    const links = ['Home', 'Services', 'Skills', 'Projects', 'Contact'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('closes menu when a navigation link is clicked', () => {
    fireEvent.click(screen.getByTestId('MenuOpenIcon'));
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByTestId('MenuOpenIcon')).toBeInTheDocument();
  });
});