/**
 * @remarks
 * This guard checks that the value is not null, use isNotNullish to also
 * exclude undefined
 * @category Type Guard
 */
export function isNotNull<T>(input: T | null): input is T {
  return input !== null;
}
