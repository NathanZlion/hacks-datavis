import * as React from "react"
import { cn } from "@/lib/utils";
import { changeRangeForTimeseriesData, TimeseriesDataInterface } from "@/state/timeseries.slice";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux";


export const DatePickerWithRange = ({ className, }: React.HTMLAttributes<HTMLDivElement>) => {
    const { value: { range: [from, to] } }: TimeseriesDataInterface = useSelector((state: any) => state.timeseries);
    const dispatch = useDispatch();

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", (!from || !to) && "text-muted-foreground")} >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {from ? (
                            to ? (
                                <> {format(from, "LLL dd, y")} -{" "} {format(to, "LLL dd, y")} </>
                            ) : (format(from, "LLL dd, y"))
                        ) : (<span>Pick a date</span>)}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={new Date(from!)}
                        selected={
                            (to && from && new Date(from) <= new Date(to)) ?
                                { from: new Date(from!), to: new Date(to!) } :
                                { from: new Date(), to: new Date() }
                        }
                        onSelect={
                            (newDate) => {
                                const from = newDate ? newDate.from! : null;
                                const to = newDate ? newDate.to! : null;
                                dispatch(changeRangeForTimeseriesData([from?.toLocaleDateString()!, to?.toLocaleDateString()!]));
                                // @ts-ignore
                                dispatch(updateTimeseriesDataInRange());
                            }
                        }
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
