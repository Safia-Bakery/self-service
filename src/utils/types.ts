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
  Number: number;
  WaiterName: string;
  TableNum: number;
  Waiter: string;
  Table: string;
  Items: [
    {
      Id: string;
      Amount: number;
      ProductName: string;
      Product: string;
      KitchenName: string;
      Kitchen: string;
      Deleted: false;
      Course: number;
      ServeGroupNumber: number;
      IsCookingStarted: true;
      PrintTime: string;
      EstimatedCookingBeginTime: string;
      Processing1BeginTime: null;
      Processing2BeginTime: null;
      Processing3BeginTime: null;
      Processing4BeginTime: null;
      ProcessingCompleteTime: null;
      ServeTime: null;
      ProcessingStatus: number;
      CookingTime: string;
      Size: null;
      Comment: null;
      Modifiers: [
        {
          Id: string;
          Amount: number;
          AmountIndependentOfParentAmount: false;
          ProductName: string;
          Product: string;
          KitchenName: string;
          Kitchen: string;
          Deleted: false;
          EstimatedCookingBeginTime: string;
          Processing1BeginTime: null;
          Processing2BeginTime: null;
          Processing3BeginTime: null;
          Processing4BeginTime: null;
          ProcessingCompleteTime: null;
          ServeTime: null;
          ProcessingStatus: 0;
          CookingTime: null;
          IsSeparate: false;
        }
      ];
      IsCompound: false;
      PrimaryComponent: null;
      SecondaryComponent: null;
      Template: null;
    }
  ];
  BaseOrder: string;
  OrderType: null;
  OrderServiceType: number;
  IsDeliverySelfService: false;
  Url: string;
}
