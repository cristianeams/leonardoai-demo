interface UserInfo {
  userName: string;
  jobTitle: string;
}

/**
 * Checks if local storage is available in the current browser.
 * @returns A boolean indicating whether local storage is supported.
 */
const isLocalStorageAvailable = (): boolean => {
  // Check if the 'window' object is defined and if 'localStorage' is available
  // The '!!' (double negation) ensures that the result is a boolean
  return typeof window !== 'undefined' && !!window.localStorage;
};

/**
 * A utility function designed to retrieve user information,
 * specifically the username and job title, from the client's local storage.
 * @returns an object containing user information.
 */
export const getUserInfo = (): UserInfo => {
  if (isLocalStorageAvailable()) {
    const userName = localStorage.getItem('userName') || '';
    const jobTitle = localStorage.getItem('jobTitle') || '';
    return { userName, jobTitle };
  }
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
export const setUserInfo = (userInfo: UserInfo): void => {
  // Check if localStorage is available
  if (isLocalStorageAvailable()) {
    localStorage.setItem('userName', userInfo.userName);
    localStorage.setItem('jobTitle', userInfo.jobTitle);
  } else {
    // Handle the case where localStorage is not available
    console.warn('localStorage is not available. User information not stored.');
  }
};
