import { StringOrUndefined } from '../models';

const getStatus = (status:StringOrUndefined) => {
  let card = '';
  let label = '';
  switch (status) {
    case 'SUCCESS':
      label = 'Berhasil';
      card = 'primary';
      break;
    case 'PENDING':
      label = 'Pengecekan';
      card = 'outline';
    default:
      break;
  }
  return { label, card};
}
export default getStatus;