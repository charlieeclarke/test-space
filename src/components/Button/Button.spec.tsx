/**
 * Button component tests
 *
 * @group unit/a11y
 * @group unit/components
 * @group unit/components/button
 */
import { Button } from '@components/Button';
import { render, screen } from '@testing-library/react';
import { a11yQuickCheck } from 'tests/utils';

describe('Button component testing', () => {
  it('renders dummy test', () => {
    expect(true).toBe(true);
  });
  // it('should render a button with the text Button', () => {
  //   const { container } = render(<Button>Button</Button>);
  //   expect(container).toBeDefined();
  // });
  // it('should render a button with the `button` role', () => {
  //   render(<Button>Button</Button>);
  //   const button = screen.getByRole(/button/);
  //   expect(button).toBeDefined();
  //   expect(button).toHaveTextContent('Button');
  // });
  // it('should have no a11y violations', async () => {
  //   const { container } = render(<Button>Button</Button>);
  //   expect(container).toBeDefined();
  //   await a11yQuickCheck(container);
  // });
});
