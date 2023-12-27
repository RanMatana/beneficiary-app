import {createSlice, Reducer} from '@reduxjs/toolkit';
import {ContactType} from '../../types';

interface State {
  contacts: ContactType[];
}

const initialState: State = {
  contacts: [],
};

const BeneficiariesSlice = createSlice({
  name: 'beneficiaries',
  initialState,
  reducers: {
    addBeneficiaries: (state: State, action: {payload: ContactType}) => {
      state.contacts.push(action.payload);
    },
    setBeneficiaries: (state: State, action: {payload: ContactType[]}) => {
      state.contacts = action.payload;
    },
    resetBeneficiaries: (state: State) => {
      state.contacts = [];
    },
  },
});

export const {addBeneficiaries, setBeneficiaries, resetBeneficiaries} =
  BeneficiariesSlice.actions;
const reducer = BeneficiariesSlice.reducer as Reducer<State>;
export default reducer;
