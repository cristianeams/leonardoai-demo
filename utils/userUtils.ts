/**
 * A utility function designed to retrieve user information,
 * specifically the username and job title, from the client's local storage.
 * @param userName string representing the user's username.
 * @param jobTitle string representing the user's jobTitle
 * @returns an object containing user information:
 */

export const getUserInfo = (): { userName: string; jobTitle: string } => {
  // Check if localStorage is available
  if (typeof window !== 'undefined' && window.localStorage) {
    const userName = localStorage.getItem('userName') || '';
    const jobTitle = localStorage.getItem('jobTitle') || '';
    return { userName, jobTitle };
  }

  // If localStorage is not available, return default values or handle it as needed
  return { userName: '', jobTitle: '' };
};

/**
 * A utility function designed to sign the user out by clearing user information
 * from the client's local storage.
 */
export const signOutUser = (): void => {
  localStorage.removeItem('userName');
  localStorage.removeItem('jobTitle');
};

/**
 * A utility function designed to update user information in the client's local storage.
 * @param userInfo An object containing user information (userName and jobTitle).
 */
export const setUserInfo = (userInfo: {
  userName: string;
  jobTitle: string;
}): void => {
  // Check if localStorage is available
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('userName', userInfo.userName);
    localStorage.setItem('jobTitle', userInfo.jobTitle);
  } else {
    // Handle the case where localStorage is not available
    console.warn('localStorage is not available. User information not stored.');
  }
};
