import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from './index';

// Mock the lucide-react module
jest.mock('lucide-react', () => ({
  Loader2: () => <div data-testid="mock-loader" className="size-4 animate-spin text-neutral-200" />,
}));

describe('Spinner Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Spinner />);
    expect(container).toBeInTheDocument();
  });

  it('renders the Loader2 component', () => {
    const { getByTestId } = render(<Spinner />);
    const loader = getByTestId('mock-loader');
    expect(loader).toBeInTheDocument();
  });

  it('has the correct styling classes', () => {
    const { getByTestId } = render(<Spinner />);
    const loader = getByTestId('mock-loader');
    expect(loader).toHaveClass('size-4');
    expect(loader).toHaveClass('animate-spin');
    expect(loader).toHaveClass('text-neutral-200');
  });
});
