import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AiTemplate from './index';

// Mock the hooks and components
jest.mock('@/hooks/useAskAi', () => ({
  useAskAi: () => ({
    trigger: jest.fn(),
    loading: false,
  }),
}));

jest.mock('@/components/molecules/TextMarkdown', () => ({
  __esModule: true,
  default: ({ text }: { text: string }) => <div data-testid="markdown">{text}</div>,
}));

describe('AiTemplate', () => {
  it('renders correctly in initial state', () => {
    const { asFragment } = render(<AiTemplate />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with answer', () => {
    // Mock useState to return an answer
    const originalUseState = React.useState;
    jest.spyOn(React, 'useState').mockImplementationOnce(() => ['Test question', jest.fn()]);
    jest.spyOn(React, 'useState').mockImplementationOnce(() => ['This is a test answer', jest.fn()]);

    const { asFragment } = render(<AiTemplate />);
    expect(asFragment()).toMatchSnapshot();

    // Restore useState
    jest.spyOn(React, 'useState').mockImplementation(originalUseState);
  });

  it('renders correctly in loading state', () => {
    // Mock useAskAi to return loading=true
    jest.mock('@/hooks/useAskAi', () => ({
      useAskAi: () => ({
        trigger: jest.fn(),
        loading: true,
      }),
    }));

    const { asFragment } = render(<AiTemplate />);
    expect(asFragment()).toMatchSnapshot();
  });
});
