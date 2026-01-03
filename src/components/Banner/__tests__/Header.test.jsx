import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  const setScreenWidth = (width) => {
    Object.defineProperty(window, 'screen', {
      writable: true,
      configurable: true,
      value: { width },
    });
  };

  const links = ['Home', 'Services', 'Skills', 'Projects', 'Contact'];

  it('renders logo and title', () => {
    render(<Header />);
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
    expect(screen.getByTestId('WebhookIcon')).toBeInTheDocument();
  });

  describe('Mobile Menu (width < 640px)', () => {
    beforeEach(() => {
      setScreenWidth(400);
      render(<Header />);
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
      links.forEach(link => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });

    it('closes menu when a navigation link is clicked', () => {
      fireEvent.click(screen.getByTestId('MenuOpenIcon'));
      fireEvent.click(screen.getByText('Home'));
      expect(screen.getByTestId('MenuOpenIcon')).toBeInTheDocument();
    });
  })

  describe('Desktop View (width >= 640px)', () => {
    beforeEach(() => {
      setScreenWidth(1024);
      render(<Header />);
    });

    it('does not toggle state on click and links are always visible', () => {
      const menuIcon = screen.getByTestId('MenuOpenIcon');
      fireEvent.click(menuIcon);      
      expect(screen.queryByTestId('CloseIcon')).not.toBeInTheDocument();      
      links.forEach(link => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });
  })
});