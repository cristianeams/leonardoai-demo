/**
 * A utility function designed to format date to local us
 * @param date string representing a date
 * @returns a formatted local US date
 */
export const formattedDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US');
