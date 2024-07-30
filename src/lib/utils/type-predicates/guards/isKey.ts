import { isUnion } from '../utils';
import { isNumber } from './isNumber';
import { isString } from './isString';
import { isSymbol } from './isSymbol';

/**
 * @remarks
 * Tests true for all objects that have a typeof 'object' excluding null
 * @category Type Guard
 * @example
 *
 * ```typescript
 * // true
 * isObject({});
 *
 * // true
 * isObject([]);
 *
 * // false
 * isObject(null);
 * ```
 */
export const isKey = isUnion<string | number | symbol>(isString, isNumber, isSymbol);
