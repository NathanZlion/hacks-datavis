import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "@/lib/utils";
import { ApiService } from "@/services/apiService";
import { RootState } from "@/store";

export interface SingleDayDataInterface {
    date: Date,
    individual: number,
    group: number,
    groupCount: number
}
    
export enum TimeseriesRangeOptions {
    Last7Days = 7,
    Last14Days = 14,
    Last30Days = 30,
    AllTime = -1
}

export const TimeseriesRangeOptionHumanReadable = {
    [TimeseriesRangeOptions.Last7Days]: 'Last 7 Days',
    [TimeseriesRangeOptions.Last14Days]: 'Last 2 Weeks',
    [TimeseriesRangeOptions.Last30Days]: 'Last Month',
    [TimeseriesRangeOptions.AllTime]: 'All Time'
}

export interface TimeseriesDataInterface {
    loadingState: LoadingState,
    value: {
        range: TimeseriesRangeOptions,
        fullData: SingleDayDataInterface[],
        dataInRange: SingleDayDataInterface[],
    },
    lastSyncTime: string
}

export const timeseriesSlice = createSlice({
    name: 'timeseries',
    initialState: {
        loadingState: LoadingState.LoadingInitial,
        value: {
            range: TimeseriesRangeOptions.Last14Days,
            fullData: [] as SingleDayDataInterface[],
            dataInRange:  [] as SingleDayDataInterface[],
        },
        lastSyncTime: new Date().toLocaleDateString(),
    } as TimeseriesDataInterface,

    reducers: {
        setFullData: (state, action: PayloadAction<SingleDayDataInterface[]>) => {
            state.value.fullData = action.payload;
        },

        setDataInRange: (state, action: PayloadAction<SingleDayDataInterface[]>) => {
            state.value.dataInRange = action.payload;
        },

        setRange: (state, action: PayloadAction<TimeseriesRangeOptions>) => {
            const lastXDays = action.payload;
            state.value.range = lastXDays;
            state.value.dataInRange = _dataInRange(state.value.fullData, lastXDays);
        },
        
        setLoadingState: (state, action: PayloadAction<LoadingState>) => {
            state.loadingState = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateFullTimeseriesData.fulfilled, (state) => {
            state.loadingState = LoadingState.LoadingSuccess;
        });

        builder.addCase(updateFullTimeseriesData.rejected, (state) => {
            state.loadingState = LoadingState.LoadingError;
        });
    }
});


export const updateFullTimeseriesData = createAsyncThunk<void, void, { state: RootState }>(
    'timeseries/updateFullTimeseriesData',
    async (_, { dispatch, getState }) => {
        dispatch(timeseriesSlice.actions.setLoadingState(LoadingState.Loading));
        const result = await ApiService.getTimeseriesData();

        if (result.success) {
            dispatch(timeseriesSlice.actions.setFullData(result.value || []));
            const state = getState();
            dispatch(timeseriesSlice.actions.setDataInRange(_dataInRange(state.timeseries.value.fullData, state.timeseries.value.range)));
            dispatch(timeseriesSlice.actions.setLoadingState(LoadingState.LoadingSuccess));
        } else {
            dispatch(timeseriesSlice.actions.setLoadingState(LoadingState.LoadingError));
        }
    }
);


const _dataInRange = (sortedData: SingleDayDataInterface[], range: TimeseriesRangeOptions) : SingleDayDataInterface[]=> {
    if (range === TimeseriesRangeOptions.AllTime) {
        return sortedData;
    }
    return sortedData.slice(-range);
}



export const { setRange } = timeseriesSlice.actions;
export default timeseriesSlice.reducer;