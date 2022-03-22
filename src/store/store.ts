import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cart from './cart';

const rootReducer = combineReducers({ cart: cart.reducer });

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
