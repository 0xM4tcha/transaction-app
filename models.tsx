export interface GeneralCardModels {
  buttonLabel: string | undefined;
  title: any;
  items: any;
  cardType: string | undefined;
  onClick: any;
}

export interface TransactionModel {
  id: string,
  amount: number,
  unique_code: number,
  status: string,
  sender_bank: string,
  account_number: string,
  beneficiary_name: string,
  beneficiary_bank: string,
  remark: string,
  created_at: string,
  completed_at: string,
  fee: number
}

export type StringOrUndefined = string | undefined;