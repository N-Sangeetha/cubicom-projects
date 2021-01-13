import moment from 'moment';

const getFormattedDate = (newdate) => {
  const dd = moment(newdate).format('YYYY-MM-DD HH:mm:ss');
  return dd;
};

export const convertToLocalTimeStamp = (datetime) => {
  const ts=  new Date(datetime);
  return moment(ts).format('YYYY-MM-DD HH:mm:ss');
}

export const convertToUTCTimestamp = (datetime) => {
  return new Date(datetime).toISOString();
}


export const getDate = (datetime) => {
  const ts=  new Date(datetime);
  return moment(ts).format('YYYY-MM-DD');
}

export const getTime = (datetime) => {
  const ts=  new Date(datetime);
  return moment(ts).format('HH:mm');
}

export default getFormattedDate;
