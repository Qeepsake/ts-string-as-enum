/**
 * Converts a string to an enum
 *
 * @param enumType - enum type
 * @param value - string to convert
 *
 * @returns enum of type specified
 * or undefined if value is invalid
 */
export function tsStringAsEnum(enumType, value) {
    return Object.values(enumType).includes(value)
        ? value
        : undefined;
}
