import { DECREMENT, INCREMENT, RESET } from "./actions";

export const initialState = {
    count: 0,
  };

 export const reducer = (store, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          count: store.count + 1,
        };

      case DECREMENT:
        return {
          count: store.count - 1,
        };

      case RESET:
        return {
          count: initialState.count,
        };

      default:
        return store;
    }
  };
