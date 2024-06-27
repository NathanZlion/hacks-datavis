
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface lastSyncTime {
    successOnce: boolean,
    payload: Date
}


export const lastSyncTime = createSlice({
    name: "lastSynced",
    initialState: {
        value: {
            successOnce: false,
            payload: Date.now(),
        }
    },
    reducers: {
        updateLastSyncTimeJustNow: (state, _: PayloadAction<void>) => {
            state.value.successOnce = true;
            state.value.payload = Date.now();  // current timestamp
        },
    }
});

export const { updateLastSyncTimeJustNow } = lastSyncTime.actions;

export default lastSyncTime.reducer;

