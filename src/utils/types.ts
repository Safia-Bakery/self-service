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
  // PrintTime(PrintTime: any): unknown;
  orderStatus: number;
}

export type BaseCartType = { [key: string]: CartType };

export interface OrderTypes {
  Id: string;
  Number: 69806;
  Status: 0;
  FullSum: 339000.0;
  ResultSum: 339000.0;
  OriginName: string;
  IsBanquetOrder: false;
  OpenTime: string;
  BillTime: null;
  ProcessedPaymentsSum: 0.0;
  WaiterName: null;
  CashierName: null;
  TableNum: 1;
  Waiter: null;
  Cashier: null;
  Table: string;
  TabName: null;
  Guests: [
    {
      Id: string;
      Rank: 0;
      Name: string;
      Items: [
        {
          Id: string;
          Amount: 1.0;
          Price: 339000.0;
          Cost: 339000.0;
          Deleted: false;
          PrintTime: string;
          CookingStartTime: string;
          CookingFinishTime: string;
          CookingTime: string;
          Size: null;
          ServeTime: null;
          Name: string;
          Product: string;
          Comment: null;
          Status: 3;
          Course: 1;
          Modifiers: [];
          IsCompound: false;
          PrimaryComponent: null;
          SecondaryComponent: null;
          Template: null;
        }
      ];
    }
  ];
  IsDeliveryOrder: true;
  Customers: [
    {
      Name: string;
      Surname: string;
      Url: string;
    }
  ];
  Delivery: string;
  OrderType: string;
  OrderServiceType: 2;
  Url: string;
}
