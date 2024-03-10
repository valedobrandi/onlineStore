export type CartProductListType = {
  title: string;
  id: string;
  price: number;
  thumbnail: string;
  available_quantity: number;
  shipping: boolean
  quantity: number;
  specification: [ { name: string; value_name: string } ]
};

export type ProductListType = {
  title: string;
  id: string;
  price: number;
  thumbnail: string;
  attributes: [
    { name: string;
      value_name: string },
  ]
  available_quantity: number;
  shipping: {
    free_shipping: boolean
  }
  quantity: number;
};

export type ProductcategoryType = {
  name: string;
  id: string
};
