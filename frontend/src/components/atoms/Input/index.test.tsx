import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './index';

describe('Input Component', () => {
  it('renders without crashing', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies placeholder correctly', () => {
    render(<Input placeholder="Enter your name" />);
    const inputElement = screen.getByPlaceholderText('Enter your name');
    expect(inputElement).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
  });

  it('renders with proper type attribute', () => {
    render(<Input type="email" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('applies disabled state correctly', () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });
});
