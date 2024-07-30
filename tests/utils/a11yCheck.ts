import { axe } from 'jest-axe';

export const a11yQuickCheck = async (container: Element): Promise<void> => {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
};
