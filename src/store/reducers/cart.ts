import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";
import { BaseCartType, OrderStatus } from "@/utils/types";

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
    handleItems: (state, { payload }: PayloadAction<BaseCartType>) => {
      state.orders = payload;
    },
    handleCart: (
      state,
      { payload }: PayloadAction<{ id: string; status: OrderStatus }>
    ) => {
      state.orders[payload.id] = payload.status;
    },
  },
});

export const cartSelector = (state: RootState) => state.status.orders;

export const { handleCart, handleItems } = statusReducer.actions;
export default statusReducer.reducer;
