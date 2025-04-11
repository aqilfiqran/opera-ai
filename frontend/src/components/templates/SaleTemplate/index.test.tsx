import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SaleTemplate from './index';

// Mock potential hooks
jest.mock('@/hooks/useGetSales', () => ({
  useGetSales: () => ({
    data: [
      {
        id: 1,
        name: 'John Doe',
        role: 'Sales Representative',
        region: 'North America',
        skills: ['Negotiation', 'Product Knowledge'],
        deals: [
          { client: 'Acme Corp', value: 50000, status: 'Closed' },
          { client: 'Tech Inc', value: 75000, status: 'In Progress' },
        ],
        clients: [
          { name: 'Acme Corp', industry: 'Manufacturing', contact: 'jane@acme.com' },
          { name: 'Tech Inc', industry: 'Technology', contact: 'sam@tech.com' },
        ],
      },
    ],
    loading: false,
    error: null,
    fetchSalesReps: jest.fn(),
  }),
}));

describe('SaleTemplate', () => {
  it('renders correctly in initial state', () => {
    const { asFragment } = render(<SaleTemplate />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Test with loading state
  it('renders correctly in loading state', () => {
    // Override the mock to return loading: true
    jest.mock('@/hooks/useGetSales', () => ({
      useGetSales: () => ({
        data: [],
        loading: true,
        error: null,
        fetchSalesReps: jest.fn(),
      }),
    }));

    const { asFragment } = render(<SaleTemplate />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Test with error state
  it('renders correctly in error state', () => {
    jest.mock('@/hooks/useGetSales', () => ({
      useGetSales: () => ({
        data: [],
        loading: false,
        error: 'Failed to fetch data',
        fetchSalesReps: jest.fn(),
      }),
    }));

    const { asFragment } = render(<SaleTemplate />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Test empty data state
  it('renders correctly with empty data', () => {
    jest.mock('@/hooks/useGetSales', () => ({
      useGetSales: () => ({
        data: [],
        loading: false,
        error: null,
        fetchSalesReps: jest.fn(),
      }),
    }));

    const { asFragment } = render(<SaleTemplate />);
    expect(asFragment()).toMatchSnapshot();
  });
});
