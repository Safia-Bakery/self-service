export enum Language {
  ru = "ru",
  uz = "uz",
}

export enum OrderStatus {
  new,
  received,
  collected,
}

export interface CartType extends OrderTypes {
  orderStatus: number;
}

export type BaseCartType = { [key: string]: CartType };

export interface OrderTypes {
  Id: string;
  Number: number;
  Status: number;
  FullSum: number;
  ResultSum: number;
  OriginName: null | string;
  IsBanquetOrder: false;
  OpenTime: string;
  BillTime: string;
  ProcessedPaymentsSum: number;
  WaiterName: string;
  CashierName: string;
  TableNum: number;
  Waiter: string;
  Cashier: string;
  Table: string;
  TabName: null;
  Guests: [
    {
      Id: string;
      Rank: number;
      Name: string;
      Items: [
        {
          Id: string;
          Amount: number;
          Price: number;
          Cost: number;
          Deleted: false;
          PrintTime: string;
          CookingStartTime: string;
          CookingFinishTime: null;
          CookingTime: string;
          Size: null;
          ServeTime: null;
          Name: string;
          Product: string;
          Comment: null;
          Status: number;
          Course: number;
          Modifiers: [
            {
              Id: string;
              Amount: number;
              Price: number;
              Cost: number;
              Deleted: false;
              Name: string;
              Product: string;
              AmountIndependentOfParentAmount: false;
            }
          ];
          IsCompound: boolean;
          PrimaryComponent: null;
          SecondaryComponent: null;
          Template: null;
        }
      ];
    }
  ];
  IsDeliveryOrder: false;
  Customers: [];
  Delivery: null;
  OrderType: null;
  OrderServiceType: number;
  Url: string;
}
