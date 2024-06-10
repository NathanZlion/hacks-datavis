
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface peopleDataInterface {
    totalParticipants: number,
    individualParticipants: number,
    groupParticipants: number,
    totalCountries: number
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        value: {
            totalParticipants: 0,
            individualParticipants: 0,
            groupParticipants: 0,
            totalCountries: 0
        }
    },
    reducers: {
        updateParticipantsInfo: (state, payload: PayloadAction<peopleDataInterface>) => {
            state.value = payload.payload;
        }
    }
});

export const { updateParticipantsInfo } = peopleSlice.actions;

export default peopleSlice.reducer;