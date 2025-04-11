import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Avatar from './index';

describe('Avatar Component', () => {
  it('renders without crashing', () => {
    render(<Avatar />);
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  it('renders fallback with initials when no src is provided', () => {
    render(<Avatar fallback="JD" />);
    const fallbackElement = screen.getByText('JD');
    expect(fallbackElement).toBeInTheDocument();
  });

  it('displays single initial for single-word names', () => {
    render(<Avatar fallback="J" />);
    const fallbackElement = screen.getByText('J');
    expect(fallbackElement).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Avatar className="custom-avatar-class" />);
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toHaveClass('custom-avatar-class');
  });
});
