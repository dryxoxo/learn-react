import {
  INCREMENT_KERANJANG,
  DECREMENT_KERANJANG,
} from "../action/keranjangAction";

const initailState = {
  totalKeranjang: 0,
};

export default function keranjangReducer(state = initailState, action) {
  switch (action.type) {
    case INCREMENT_KERANJANG:
      return {
        totalKeranjang: state.totalKeranjang + 1,
      };

    case DECREMENT_KERANJANG:
      return {
        totalKeranjang: state.totalKeranjang > 0 ?  state.totalKeranjang - 1 : 0 ,
      };

    default:
      return state;
  }
}
