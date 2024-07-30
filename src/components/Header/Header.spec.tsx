/**
 * Header component tests
 *
 * @group unit/a11y
 * @group unit/components
 * @group unit/components/header
 */
// import React from 'react';
// import { Header } from './Header';
// import { render, screen } from '@testing-library/react';
// import { a11yQuickCheck } from 'tests/utils';

describe('Header component testing', () => {
  it('renders dummy test', () => {
    expect(true).toBe(true);
  });

  // it('should render the header', () => {
  //   const { container } = render(<Header />);

  //   expect(container).toBeDefined();
  // });

  // it('should render a header with the `header` role', () => {
  //   render(<Header />);

  //   const header = screen.getByRole(/header/);

  //   expect(header).toBeDefined();
  // });

  // it('should pass a11y test', async () => {
  //   const { container } = render(<Header />);
  //   const results = await a11yQuickCheck(container);

  //   expect(results).toHaveNoViolations();
  // });
});
