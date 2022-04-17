/**
 * Determines whether or not the given date is a valid date. Validation is performed
 * by the internal Date class.
 *
 * Input date strings must be in a format recognized by Date.parse()
 */
export function isValidDate(dateOrDateString: Date | string): boolean {
    const dateInstance =
        dateOrDateString instanceof Date ? dateOrDateString : new Date(dateOrDateString);
    return dateInstance.toString() !== 'Invalid Date';
}
