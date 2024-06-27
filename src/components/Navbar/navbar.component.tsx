import { useDispatch, useSelector } from 'react-redux';
import './navbar.css'
import { grandStateEnum, loadComplete, loadFailed, startLoading } from '../../state/grandstate.slice'
import { updateHeardFromData } from '../../state/heard-from.slice';
import { summaryDataInterface, updateParticipantsInfo } from '../../state/summary.slice';
import { useEffect } from 'react';
import { ApiService } from '../../services/apiService';
import { updateCountries } from '../../state/countries.slice';
import a2svLogo from '../../assets/A2SV_LOGO.svg';
import a2svLogoSmall from '../../assets/A2SV Logo Small.svg';
import { updatePrevParticipationData } from '../../state/prevParticipation.slice';
import { ModeToggle } from '../ui/modetoggle';
import { useToast } from '../ui/use-toast';
import { ProgressCircle } from '@tremor/react';
import { updateLastSyncTimeJustNow } from '@/state/lastSync.slice';
// import { lastSyncTime } from '@/state/lastSync.slice';

export const Navbar = () => {
    const dispatch = useDispatch();
    const grandstate: string = useSelector((state: any) => state.grandState.value);
    const lastSyncTime = useSelector((state: any) => state.lastSynced.value)
    const { toast } = useToast()


    const handleReload = async () => {
        try {
            dispatch(startLoading()); // Dispatch a pending action

            const countryData = await ApiService.getCountryData();
            if (!countryData.success) throw countryData.error;
            dispatch(updateCountries(countryData.value));

            const heardFromData = await ApiService.getHeardFrom();
            if (!heardFromData.success) throw heardFromData.error;
            dispatch(updateHeardFromData(heardFromData.value as [string, number][] & void));

            const summaryData = await ApiService.getSummaryData();
            if (!summaryData.success) throw summaryData.error;
            dispatch(updateParticipantsInfo(summaryData.value as summaryDataInterface));


            const prevParticipation = await ApiService.getPreviousHackathonParticipation();
            if (!prevParticipation.success) throw prevParticipation.error;
            dispatch(updatePrevParticipationData(prevParticipation.value));

            dispatch(loadComplete());
            dispatch(updateLastSyncTimeJustNow());

            toast({
                title: "Refreshed Success",
                description: "Your data is now upto date!",
                className: "shadow shadow-sm shadow-slate-700 dark:shadow-white"

            })
        } catch (error) {
            dispatch(loadFailed())
            toast({
                variant: "destructive",
                title: "Uh oh, Rehresh Failed...",
                description: "It might be due to your slow internet connection.",
                className: "shadow shadow-sm shadow-slate-700 dark:shadow-white"

            });

            // wait for 3 seconds
            await new Promise(resolve => setTimeout(resolve, 3000));
            dispatch(loadComplete());
        }
    };


    useEffect(() => {
        handleReload();
        // const MILLISECONDS_IN_MINUTE = 60000;
        // const reloadIntervalInMinutes = 10;
        // const reloadInterval = reloadIntervalInMinutes * MILLISECONDS_IN_MINUTE;

        // const interval = setInterval(() => {
        //     handleReload();
        // }, reloadInterval);

        // return () => clearInterval(interval);
    }, []);


    return (
        <nav className='h-20 py-4 shadow-md bg-secondary flex align-center'>
            <div className='d-flex justify-center content-center h-auto p-2 md:p-3'>
                <img src={a2svLogo} alt="A2SV" className='object-contain hidden md:block' />
                <img src={a2svLogoSmall} alt="A2SV" className='object-contain md:hidden' />
            </div>
            <div className='flex flex-row gap-16 align-center justify-center'>
                {
                    lastSyncTime.successOnce &&
                    <div className='text text-sm text-secondary-foreground hidden lg:block'>
                            Last Synced {new Date(lastSyncTime.payload).toLocaleTimeString()}
                    </div>
                }

                {/* {lastSyncTime.successOnce} */}
                <button onClick={handleReload} className='w-8 h-8 my-auto flex hover:cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent'>
                    <ProgressCircle
                        className={grandstate === grandStateEnum.Loading ? 'animate-spin w-fit text-primary' : 'text-primary bg-accent'}
                        tooltip="Refresh"
                        value={72}
                        radius={16} />
                </button>
                <ModeToggle />
            </div>
        </nav>
    );
};