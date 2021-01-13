import _ from 'lodash';
/*
  @params source:=> source object
  @params destination:=> destination object
  @params field:=> field array

  return new object with the fields defined in field array
*/
export const intersection = (source, destination, fields) => {
  const result = {};
  fields.forEach((field) => {
    if (destination[field]) {
      result[field] = destination[field];
    } else {
      result[field] = source[field];
    }
  });
  return result;
};

export const compareObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  return _.difference(keys1, keys2);
};


/* Below are the functions only specific to data table component */

export const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getSorting = (order, orderBy) => (order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy));

export const sortTable = (array, cmp) => {
  const elementsArray = array.map((el, index) => [el, index]);
  elementsArray.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return elementsArray.map((el) => el[0]);
};

/* ------ */
export const logout = () => {
  localStorage.removeItem('usr');
  localStorage.removeItem('usrn');
  localStorage.removeItem('access_token');
  localStorage.removeItem('expiresAt');
  localStorage.removeItem('scope');
  // window.location.reload();
};
