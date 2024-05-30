export type ProductFromCMS = {
  attributes: {
    Title: string;
    Image: string;
    Description: string;
    Price: number;
    Amount: number;
    Category: string;
  };
  id: number;
};