import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";
import { BaseCartType, OrderStatus, OrderTypes } from "@/utils/types";

interface State {
  orders: BaseCartType;
}

const initialState: State = {
  orders: {},
};

export const statusReducer = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    handleItems: (state, { payload }: PayloadAction<OrderTypes[]>) => {
      const items = payload?.reduce((acc: BaseCartType, item) => {
        acc[item.Id] = !state.orders[item.Id]
          ? OrderStatus.new
          : state.orders[item.Id];
        return acc;
      }, {});

      state.orders = { ...state.orders, ...items };
    },
    handleCart: (
      state,
      { payload }: PayloadAction<{ id: string; status: OrderStatus }>
    ) => {
      state.orders[payload.id] = payload.status;
    },
    clearItems: (state) => {
      state.orders = {};
    },
  },
});

export const cartSelector = (state: RootState) => state.status.orders;

export const { handleCart, handleItems, clearItems } = statusReducer.actions;
export default statusReducer.reducer;
