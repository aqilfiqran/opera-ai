import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from './index';

describe('Container Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Container>
        <div data-testid="test-child">Child content</div>
      </Container>
    );

    const childElement = screen.getByTestId('test-child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Child content');
  });

  it('applies custom className', () => {
    const { container } = render(<Container className="custom-container" />);
    const containerElement = container.firstChild;
    expect(containerElement).toHaveClass('custom-container');
  });

  it('passes through additional props', () => {
    render(<Container data-testid="custom-container" id="unique-id" />);
    const containerElement = screen.getByTestId('custom-container');

    expect(containerElement).toHaveAttribute('id', 'unique-id');
  });
});
