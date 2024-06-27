import { useDispatch, useSelector } from 'react-redux';
import './navbar.css'
import { grandStateEnum, loadComplete, loadFailed, startLoading } from '../../state/grandstate.slice'
// import { updateCountries } from '../../state/countries.slice';
import { updateHeardFromData } from '../../state/heard-from.slice';
import { summaryDataInterface, updateParticipantsInfo } from '../../state/summary.slice';
import { useEffect } from 'react';
import { IoReloadOutline } from "react-icons/io5";
import Snackbar from 'awesome-snackbar';
import { ApiService } from '../../services/apiService';
import { updateCountries } from '../../state/countries.slice';
import a2svLogo from '../../assets/A2SV_LOGO.svg';
import a2svLogoSmall from  '../../assets/A2SV Logo Small.svg';
import { ColorRing } from 'react-loader-spinner';
import { updatePrevParticipationData } from '../../state/prevParticipation.slice';

export const Navbar = () => {
    const dispatch = useDispatch();
    const grandstate: string = useSelector((state: any) => state.grandState.value);

    const  handleReload = async () => {
        try {
            dispatch(startLoading()); // Dispatch a pending action
            const countryData = await ApiService.getCountryData();
            const heardFromData =  await ApiService.getHeardFrom();
            const summaryData =  await ApiService.getSummaryData();
            const prevParticipation = await ApiService.getPreviousHackathonParticipation();

            // Dispatch actions to update slices' state
            dispatch(updateCountries(countryData));
            dispatch(updateHeardFromData(heardFromData as [string, number][] & void));
            dispatch(updateParticipantsInfo(summaryData as summaryDataInterface));
            dispatch(updatePrevParticipationData(prevParticipation));

            dispatch(loadComplete());

            new Snackbar('Refresh Sucessfull', {
                position: 'top-center',
                actionText: 'X',
                onAction: () => {},
                timeout: 100,
            });
        } catch (error) {
            dispatch(loadFailed())
            new Snackbar('Refresh Failed', {
                actionText: 'X',
                position: 'top-center',
                onAction: () => {},
                timeout: 100,
                style: {
                    container: [
                        ['background-color', 'red'],
                        ['border-radius', '5px']
                    ],
                    message: [
                        ['color', '#eee'],
                    ],
                    bold: [
                        ['font-weight', 'bold'],
                    ],
                    actionButton: [
                        ['color', 'white'],
                    ],
                }
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
        <nav className='h-20 py-4 shadow-md bg-secondary'>
            <div className='d-flex justify-center content-center h-auto p-2 md:p-3'>
                <img src={a2svLogo} alt="A2SV" className='object-contain hidden md:block' />
                <img src={a2svLogoSmall} alt="A2SV" className='object-contain md:hidden' />
            </div>
            <div className='flex flex-row gap-16'>
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