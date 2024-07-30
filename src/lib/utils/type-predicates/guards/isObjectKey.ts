import { createTypeGuard } from '../utils';
import { isKey } from './isKey';

/**
 * @remarks
 * Tests true for all keys of the object.
 * @category Type Guard
 * @example
 *
 * ```typescript
 * // true
 * isObjectKey('foo', { foo: 'bar' });
 *
 * // false
 * isObjectKey('bar', { foo: 'bar' })
 * ```
 */
export const isObjectKey = <T extends object, K extends keyof T>(
  key: string | number | symbol,
  object: T extends object ? any : any
): key is K => {
  return createTypeGuard<K>(() => isKey(key) && key in object)(key);
};
