import { useDispatch, useSelector } from 'react-redux';
import { grandStateEnum, loadComplete, loadFailed, resetLoading, startLoading } from '../../state/grandstate.slice'
import { updateHeardFromData } from '../../state/heard-from.slice';
import { summaryDataInterface, updateParticipantsInfo } from '../../state/summary.slice';
import { useEffect } from 'react';
import { ApiService } from '../../services/apiService';
import { updateCountries } from '../../state/countries.slice';
import darkLogo from '../../assets/A2SV_logo_black.svg';
import lightLogo from '../../assets/A2SV_logo_white.svg';
import { updatePrevParticipationData } from '../../state/prevParticipation.slice';
import { ModeToggle } from '../ui/modetoggle';
import { useToast } from '../ui/use-toast';
import { ProgressCircle } from '@tremor/react';
import { updateLastSyncTimeJustNow } from '@/state/lastSync.slice';
import { updateFullTimeseriesData } from '@/state/timeseries.slice';
import { useTheme } from 'next-themes';

export const Navbar = () => {
    const dispatch = useDispatch();
    const grandstate: string = useSelector((state: any) => state.grandState.value);
    const lastSyncTime = useSelector((state: any) => state.lastSynced.value)
    const { toast } = useToast()
    const { theme } = useTheme();


    const handleReload = async (userTrigerred: boolean = false) => {
        // avoid multiple reloads
        if (grandstate === grandStateEnum.Loading) return;

        try {
            if (userTrigerred) {
                dispatch(startLoading());
            } // Dispatch a pending action

            const countryResponse = await ApiService.getCountryData();
            if (!countryResponse.success) throw countryResponse.error;
            dispatch(updateCountries(countryResponse.value));

            const heardFromResponse = await ApiService.getHeardFrom();
            if (!heardFromResponse.success) throw heardFromResponse.error;
            dispatch(updateHeardFromData(heardFromResponse.value as [string, number][] & void));

            const summaryResponse = await ApiService.getSummaryData();
            if (!summaryResponse.success) throw summaryResponse.error;
            dispatch(updateParticipantsInfo(summaryResponse.value as summaryDataInterface));


            const prevParticipationResponse = await ApiService.getPreviousHackathonParticipation();
            if (!prevParticipationResponse.success) throw prevParticipationResponse.error;
            dispatch(updatePrevParticipationData(prevParticipationResponse.value));

            const timeseriesDataResponse = await ApiService.getTimeseriesData();
            if (!timeseriesDataResponse.success) throw timeseriesDataResponse.error;
            // @ts-ignore
            dispatch(updateFullTimeseriesData());
            dispatch(loadComplete());
            dispatch(updateLastSyncTimeJustNow());

            toast(
                {
                    title: userTrigerred? "Refreshed Success": "Synced",
                    description: userTrigerred ? "Your data is now upto date!" : "",
                    className: "shadow shadow-sm shadow-slate-700 dark:shadow-white h-fit w-fit ml-auto"
                }
            )
        } catch (error) {
            dispatch(loadFailed())

            if (userTrigerred) {
                toast(
                    {
                        variant: "destructive",
                        title: "Uh oh, Rehresh Failed...",
                        description: "It might be due to your slow internet connection.",
                        className: "shadow shadow-sm shadow-slate-700 dark:shadow-white"
                    }
                );
            }

            // wait for 3 seconds
            await new Promise(resolve => setTimeout(resolve, 3000));
            dispatch(resetLoading());
        }
    };


    useEffect(() => {
        handleReload();
        const MILLISECONDS_IN_MINUTE = 60000;
        const reloadIntervalInMinutes = 10;
        const reloadInterval = reloadIntervalInMinutes * MILLISECONDS_IN_MINUTE;

        const interval = setInterval(() => {
            handleReload();
        }, reloadInterval);

        return () => clearInterval(interval);
    }, []);


    return (
        <nav className='h-16 py-4 shadow-md bg-secondary  w-full text-3xl sticky top-0 flex flex-row align-center justify-between z-50 p-5 '>

            {/* Logo */}
            <div className='flex justify-center content-center h-auto p-0 w-10 mx-5'>
                <img src={theme === 'light' ? darkLogo : lightLogo} alt="A2SV" className='w-full h-full' />
            </div>

            <h2 className='flex-1 text-base md:text-3xl my-auto font-thin'> AI for Impact Hackathon </h2>
            <div className='flex flex-row gap-2 md:gap-5 align-middle justify-center px-3'>
                {
                    lastSyncTime.successOnce &&
                    <div className='text text-sm text-secondary-foreground text-center hidden lg:block'>
                            <p className='text-base'>Last Synced {new Date(lastSyncTime.payload).toLocaleTimeString()}</p>
                    </div>
                }

                {/* {lastSyncTime.successOnce} */}
                <button onClick={() => { handleReload(true) }}
                    className='w-8 h-8 my-auto flex hover:cursor-pointer items-center rounded-sm text-sm outline-none focus:bg-accent'>
                    <ProgressCircle
                        className={grandstate === grandStateEnum.Loading ? 'animate-spin w-fit text-primary my-auto' : 'text-primary bg-accent my-auto'}
                        tooltip="Refresh"
                        value={72}
                        radius={16} >
                        {
                            grandstate === grandStateEnum.Loaded &&
                            <span>
                                {/* Tick */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>

                            </span>
                        }
                        {
                            grandstate === grandStateEnum.Error && 
                            <span>
                                {/* Cross */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        }
                    </ProgressCircle>
                </button>
                <div className='h-8 w-8 flex justify-center align-middle p-0'>
                    <ModeToggle/>
                </div>
            </div>
        </nav>
    );
};