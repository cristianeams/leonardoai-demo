/**
 * A utility function designed to retrieve user information,
 * specifically the username and job title, from the client's local storage.
 * @param userName string representing the user's username.
 * @param jobTitle string representing the user's jobTitle
 * @returns an object containing user information:
 */

export const getUserInfo = (): { userName: string; jobTitle: string } => {
  const userName = localStorage.getItem('userName') || '';
  const jobTitle = localStorage.getItem('jobTitle') || '';
  return { userName, jobTitle };
};
