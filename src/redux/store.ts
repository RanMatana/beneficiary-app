import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit';
import BeneficiariesSlice from './features/BeneficiariesSlice';

export const store = configureStore({
  reducer: {
    beneficiaries: BeneficiariesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
