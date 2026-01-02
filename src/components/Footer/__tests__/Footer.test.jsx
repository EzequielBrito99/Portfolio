import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the contact section title', () => {
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('renders contact methods', () => {
    expect(screen.getByRole('heading', {name: /Contact me/i})).toBeInTheDocument();
    const whatsAppLink = screen.getByText(/Whatsapp/i);
    const telegramLink = screen.getByText('Telegram');
    const emailLink = screen.getByText('Email');
    
    expect(whatsAppLink).toHaveAttribute(
      'href',
      'https://wa.me/message/ST66CS7X7BHZM1'
    );
    expect(telegramLink).toHaveAttribute(
      'href',
      'https://t.me/ezequielbn'
    );
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:ebritonavarro@gmail.com'
    );
  });

  it('renders profile links', () => {
    expect(screen.getByRole('heading', {name: /Check my/i})).toBeInTheDocument();
    const githubLink = screen.getByTestId('github-link');
    const linkedinLink = screen.getByTestId('linkedin-link');
    const cvLink = screen.getByTestId('cv-link');

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/EzequielBrito99'
    );
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ezequiel-brito-navarro-a606a9252'
    );
    expect(cvLink).toHaveAttribute(
      'href',
      'https://drive.google.com/drive/folders/15oOtQRvlCW_SwstKXpeV6AEgHrrmPI8Q?usp=share_link'
    );
  });

  it('renders the scroll-up button and triggers scroll', () => {
    const scrollUpButton = screen.getByTestId(/NorthIcon/i);
    expect(scrollUpButton).toBeInTheDocument();

    window.scroll = vi.fn(); // Mock the scroll function
    fireEvent.click(scrollUpButton);
    expect(window.scroll).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
