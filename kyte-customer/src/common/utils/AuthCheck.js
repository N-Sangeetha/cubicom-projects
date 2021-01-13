// Authentication utiliity functions
const isAuthenticated = () => {
  const token = localStorage.getItem('access_token');
  const expiresAt = localStorage.getItem('expiresAt');
  const usrn = localStorage.getItem('usrn');
  const isExpired = new Date().valueOf() > new Date(expiresAt).valueOf();
  if (token !== undefined && !isExpired && usrn) return true;
  return false;
}

const getToken = () => localStorage.getItem('access_token');

export { isAuthenticated, getToken };
