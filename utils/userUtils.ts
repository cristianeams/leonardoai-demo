export const getUserInfo = (): { userName: string; jobTitle: string } => {
  const userName = localStorage.getItem('userName') || '';
  const jobTitle = localStorage.getItem('jobTitle') || '';
  return { userName, jobTitle };
};
