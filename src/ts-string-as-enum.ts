/**
 * Converts a string to an enum
 *
 * @param enumType - enum type
 * @param value - string to convert
 *
 * @returns enum of type specified
 * or undefined if value is invalid
 */
export function tsStringAsEnum<T>(
  enumType: { [s: string]: T },
  value: string,
): T | undefined {
  return (Object.values(enumType) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : undefined
}
