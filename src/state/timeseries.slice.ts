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

export interface TimeseriesDataInterface {
    loadingState: LoadingState,
    value: {
        range: [string | null, string | null],
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
            range: [
                // june 1 - Hackathon Registration Starting Date
                new Date("2024-06-01").toLocaleDateString(),
                new Date().toLocaleDateString()
            ] ,
            fullData: [] as SingleDayDataInterface[],
            dataInRange:  [] as SingleDayDataInterface[],
        },
        lastSyncTime: new Date().toLocaleDateString(),
    } as TimeseriesDataInterface,

    reducers: {
        changeRangeForTimeseriesData: (state, action: PayloadAction<[string | null, string | null]>) => {
            state.value.range = action.payload;
        },

        resetTimeSeriesRange: (state) => {
            state.value.range = [
                // june 1 - Hackathon Registration Starting Date
                new Date("2024-06-01").toLocaleDateString(),
                new Date().toLocaleDateString()
            ];
        },

        // update the whole timeseries data, both fullData and dataInRange
        hardResetTimeseriesData: () => {
        },

        setFullData: (state, action: PayloadAction<SingleDayDataInterface[]>) => {
            state.value.fullData = action.payload;
        },

        setDataInRange: (state, action: PayloadAction<SingleDayDataInterface[]>) => {
            state.value.dataInRange = action.payload;
        },

        setRange: (state, action: PayloadAction<[string | null, string | null]>) => {
            state.value.range = action.payload;
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

        builder.addCase(updateTimeseriesDataInRange.fulfilled, (state) => {
            state.loadingState = LoadingState.LoadingSuccess;
        });

        builder.addCase(updateTimeseriesDataInRange.rejected, (state) => {
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

export const updateTimeseriesDataInRange = createAsyncThunk<void, void, { state: RootState }>(
    'timeseries/updateTimeseriesDataInRange',
    async (_, { dispatch, getState }) => {
        try {
            dispatch(timeseriesSlice.actions.setLoadingState(LoadingState.Loading));
            const state = getState();
            const [start, end] = state.timeseries.value.range;
            const result = await ApiService.getTimeseriesData(start, end);

            if (result.success) {
                dispatch(timeseriesSlice.actions.setDataInRange(result.value || []));
                dispatch(timeseriesSlice.actions.setFullData(_patchDataInRange(state.timeseries.value.fullData, result.value || [])));
                dispatch(timeseriesSlice.actions.setLoadingState(LoadingState.LoadingSuccess));
            } else {
                dispatch(timeseriesSlice.actions.setLoadingState(LoadingState.LoadingError));
            }
        }
        catch (error) {
            dispatch(timeseriesSlice.actions.setLoadingState(LoadingState.LoadingError));
        }
    }
);



const _patchDataInRange = (data: SingleDayDataInterface[], updatedDataInRange: SingleDayDataInterface[]): SingleDayDataInterface[] => {
    const dataMap = data.reduce((acc, data) => {
        acc[new Date(data.date).toLocaleDateString()] = data;
        return acc;
    }, {} as { [key: string]: SingleDayDataInterface });

    const updatedDataMap = updatedDataInRange.reduce((acc, data) => {
        acc[new Date(data.date).toLocaleDateString()] = data;
        return acc;
    }, {} as { [key: string]: SingleDayDataInterface });

    // update the dataMap with the updatedDataMap
    const mergedData = { ...dataMap, ...updatedDataMap }

    // convert the dataMap back to the original format
    return Object.values(mergedData);
}

// Uses Linear Search, to filter the data in range, for now. It should be optimized to do a binary search later on
// because the data is sorted when it comes from the backend.
const _dataInRange = (sortedData: SingleDayDataInterface[], [startDate, endDate]: [string | null, string | null]) : SingleDayDataInterface[]=> {
    return sortedData.filter(data => {
        const date = new Date(data.date).toLocaleDateString();
        return date >= startDate! && date <= endDate!;
    });

}


export const { resetTimeSeriesRange, changeRangeForTimeseriesData } = timeseriesSlice.actions;
export default timeseriesSlice.reducer;