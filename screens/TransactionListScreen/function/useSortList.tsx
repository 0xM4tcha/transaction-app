const handleSortList = (list:any, item:any) => {
  switch(item.value) {
    case 'a-z':
      list.sort((a:any, b:any) => {
        return ('' + a.beneficiary_name).localeCompare(b.beneficiary_name);
      });
      break;
    case 'z-a':
      list.sort((a:any, b:any) => {
        return ('' + b.beneficiary_name).localeCompare(a.beneficiary_name);
      });
      break;
    case 'newest':
      list.sort((a:any, b:any) => {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      });
      break;
    case 'oldest':
      list.sort((a:any, b:any):any => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      break;
    default:
      break;
  }
  return list;
}
export default handleSortList;