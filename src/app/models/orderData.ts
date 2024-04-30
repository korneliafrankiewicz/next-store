export type OrderData = {
  method: string;
  data: {
    products: {
      Title: string;
      Description: string;
      Price: number;
      Amount: number;
    }[];
    TotalAmount: number;
    TotalPrice: number;
    User: string | undefined;
  };
};
