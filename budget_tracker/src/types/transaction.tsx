export type Transaction = {
  id: number;
  category: string;
  amount: number;
  date: string;
  optionalLabel?: string;
  type: string
};
