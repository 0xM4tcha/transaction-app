const formatDate = (dateProps:string | undefined) => {
  const currentDate: any = dateProps?.split(/-| /);
  const day = parseInt(currentDate[3]);
  const month = parseInt(currentDate[2]);
  const year = parseInt(currentDate[0]);
  const date = new Date(Date.UTC(year, month, day));
  
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(date);
}
export default formatDate;