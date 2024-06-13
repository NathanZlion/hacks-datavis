
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface summaryDataInterface {
    totalParticipants: number,
    individualParticipants: number,
    groupParticipants: number,
    countryCount: number
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        value: {
            totalParticipants: 0,
            individualParticipants: 0,
            groupParticipants: 0,
            countryCount: 0
        }
    },
    reducers: {
        updateParticipantsInfo: (state, payload: PayloadAction<summaryDataInterface>) => {
            state.value = payload.payload;
        }
    }
});

export const { updateParticipantsInfo } = peopleSlice.actions;

export default peopleSlice.reducer;