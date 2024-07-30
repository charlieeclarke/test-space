import { createTypeGuard, toObjectString } from '../utils';
import { isObject } from './isObject';

/** @category Type Guard */
export const isDate = createTypeGuard<Date>(
  (value): boolean => isObject(value) && (toObjectString(value) === '[object Date]' || value instanceof Date)
);
