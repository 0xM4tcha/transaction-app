const handleFilterList = (list, value) => {
  const filteredTransaction = list.filter((transaction) => {
    const searchStr = value.toLowerCase();
    const nameMatches = transaction.beneficiary_name.toLowerCase().includes(searchStr);
    const beneficiaryBankMatches = transaction.beneficiary_bank.toLowerCase().includes(searchStr);
    const senderBankMatches = transaction.sender_bank.toLowerCase().includes(searchStr);
    const amountMatches = transaction.amount.toString().toLowerCase().includes(searchStr);
    return nameMatches || beneficiaryBankMatches || senderBankMatches || amountMatches;
  });
  return filteredTransaction;
}
export default handleFilterList;