/**
 * A utility function designed to format date to a specified format or local US format by default.
 * @param date String representing a date.
 * @param format Optional format string (e.g., 'en-US', 'en-GB', 'fr-FR', etc.).
 * @returns A formatted date string.
 */
export const formattedDate = (date: string, format: string = 'en-US') =>
  new Date(date).toLocaleDateString(format);
