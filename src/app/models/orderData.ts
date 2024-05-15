export type OrderData = {
  data: {
      Title: string;
      Description: string;
      Price: number;
      Amount: number;
  };
    TotalAmount: number;
    TotalPrice: number;
    User: string | 'defaultUser';
};
