import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text, { textVariants } from './index';
import { cn } from '@/lib/utils';

describe('Text Component', () => {
  it('renders with default variant', () => {
    const { container } = render(<Text>Default Text</Text>);
    expect(container.firstChild).toHaveClass(cn(textVariants({ variant: 'md' })));
  });

  it('renders with a specific variant', () => {
    const { container } = render(<Text variant="h1">Heading 1</Text>);
    expect(container.firstChild).toHaveClass(textVariants({ variant: 'h1' }));
  });

  it('renders with custom className', () => {
    const { container } = render(<Text className="custom-class">Custom Class</Text>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with asChild prop', () => {
    const { container } = render(
      <Text asChild>
        <span>Child Element</span>
      </Text>
    );
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders with custom "as" prop', () => {
    const { container } = render(<Text as="h2">Custom As Prop</Text>);
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('applies ref correctly', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Text ref={ref}>With Ref</Text>);
    expect(ref.current).not.toBeNull();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Text>Test Content</Text>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with nested elements', () => {
    const { container } = render(
      <Text>
        Parent text <span data-testid="nested">with nested element</span>
      </Text>
    );
    expect(container.querySelector('[data-testid="nested"]')).toBeInTheDocument();
  });

  it('forwards additional props correctly', () => {
    const dataTestId = 'test-text';
    const { getByTestId } = render(<Text data-testid={dataTestId}>Text with props</Text>);
    expect(getByTestId(dataTestId)).toBeInTheDocument();
  });




});
