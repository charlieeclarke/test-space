import { isDefined } from './isDefined';
import { isNotNull } from './isNotNull';

/**
 * @remarks
 * Tests false for undefined and null, true for all other values
 * @category Type Guard
 */
export function isNotNullish<T>(input: T | undefined | null): input is NonNullable<T> {
  return isDefined(input) && isNotNull(input);
}
