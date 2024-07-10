"use client"

import { useDispatch, useSelector } from 'react-redux';
import { Count } from '../Count/count.component';
import { HorizontalLine } from '../ui/divider';
import { LineChart, TooltipProps } from '@/components/ui/linechart';
import { format } from "date-fns"
import { cx, LoadingState } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SingleDayDataInterface, TimeseriesDataInterface, updateFullTimeseriesData } from '@/state/timeseries.slice';
import { useEffect } from 'react';
import { RootState } from '@/store';
import { ProgressCircle } from '@tremor/react';


export const Hero = () => {
    const timeseriesData : TimeseriesDataInterface = useSelector((state: RootState) => state.timeseries);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(updateFullTimeseriesData());
    }, [dispatch]);

    const handleRefresh = () => {
        // @ts-ignore
        dispatch(updateFullTimeseriesData());
    }

    return (
        <div className='min-h-[calc(100vh-20px)] md:p-10 pt-24 md:pt-28 flex justify-between flex-col'>
            <div className="px-5">
                <Count />
                <div className="flex flex-wrap justify-start gap-2 m-5">
                    <Button onClick={handleRefresh}>Refresh</Button>
                </div>

                {
                    timeseriesData.loadingState === LoadingState.Loading ? (
                        <div className="flex justify-center items-center md:h-80 w-full relative bg-tremor-content-inverted dark:bg-dark-tremor-brand-faint rounded-lg overflow-hidden">
                            <ProgressCircle className="text-primary" value={72} radius={50} />
                        </div>
                    ) :
                        <LineChart
                            className="w-max-[100%]"
                            data={formatDateInTimeseriesData(timeseriesData.value.fullData)}
                            index="date"
                            categories={["individual", "group", "total"]}
                            valueFormatter={(number: number) => `${Intl.NumberFormat("us").format(number).toString()}`}
                            onValueChange={(v) => console.log(v)}
                            showLegend={false}
                            customTooltip={Tooltip}
                        />
                }
            </div>
            <HorizontalLine />
        </div>
    );
}

const formatDateInTimeseriesData = (data: SingleDayDataInterface[]) => {
    return data.map((item) => ({
        date:format(new Date(item.date), "eee, LLL dd, y"),
        individual: item.individual,
        groupCount: item.groupCount,
        group: item.group,
        total: item.individual + item.group
    }));

}

const Tooltip = ({ payload, active, label }: TooltipProps) => {
    if (!active || !payload || payload.length === 0) return null;

    const data = payload.map(
        (item) => ({
            status: item.category as string,
            value: item.value,
            color: item.color,
            type: item.type
        })
    ).filter((item) => item.type !== undefined);
    
    // 2024-06-18T00:00:00.000Z  =>  Fri, Jun 18, 2024
    const formattedLabel = format(new Date(label), "eee, LLL dd, y");

    return (
        <>
            <div className="w-60 rounded-md border border-gray-500/10  bg-blue-500 px-4 py-1.5 text-sm shadow-md dark:border-gray-400/20 ">
                <p className="flex items-center justify-between">
                    <span className="text-gray-50 dark:text-gray-50">
                        Date
                    </span>
                    <span className="font-medium text-gray-50 dark:text-gray-50">{formattedLabel}</span>
                </p>
            </div>
            <div className="mt-1 w-60 space-y-1 rounded-md border border-gray-500/10  bg-white px-4 py-2 text-sm shadow-md dark:border-gray-400/20 dark:bg-gray-900">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2.5">

                        {/* color of the item as a representation of the category */}
                        <span
                            className={cx(`size-2.5 shrink-0 rounded-sm bg-${item.color}-400`, "dark:bg-", item.color)}
                            aria-hidden={true}
                        />

                        <div className="flex w-full justify-between">
                            <span className=" text-gray-700 dark:text-gray-300">
                                {item.status}
                            </span>
                            <div className="flex items-center space-x-1">
                                <span className="font-medium text-gray-900 dark:text-gray-50">
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
