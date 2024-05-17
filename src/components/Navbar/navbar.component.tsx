import { useDispatch, useSelector } from 'react-redux';
import './navbar.css'
import { grandStateEnum, loadComplete, loadFailed, startLoading } from '../../state/grandstate.slice'
import { updateCountries } from '../../state/countries.slice';
import { updateHeardFromData } from '../../state/heard-from.slice';
import { peopleDataInterface, updateParticipantsInfo } from '../../state/people.slice';
import { useEffect } from 'react';
import { IoReloadOutline } from "react-icons/io5";
import loadingGif from '../../assets/loading.gif';
import Snackbar from 'awesome-snackbar';
import { ApiService } from '../../services/apiService';


export const Navbar = () => {
    const dispatch = useDispatch();
    const grandstate: string = useSelector((state: any) => state.grandState.value);

    const  handleReload = async () => {
        try {
            dispatch(startLoading()); // Dispatch a pending action
            // const countryData = await ApiService.getAll("Countries");
            const heardFromData =  await ApiService.getHeardFrom();
            const summaryData =  await ApiService.getSummaryData();
            // const participantData = await ApiService.getAll("Participants")

            
            // Dispatch actions to update slices' state
            // dispatch(updateCountries(countryData));
            dispatch(updateHeardFromData(heardFromData as [string, number][] & void));

            dispatch(updateParticipantsInfo(summaryData as peopleDataInterface));
            // dispatch(updateParticipantsInfo(participantData));

            dispatch(loadComplete());

            new Snackbar('Refresh Sucessfull', {
                position: 'top-center',
                actionText: 'X',
                onAction: () => {}
            });
        } catch (error) {
            dispatch(loadFailed())
            new Snackbar('Refresh Failed', {
                actionText: 'X',
                position: 'top-center',
                onAction: () => {},
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

        // const interval = setInterval(() => {
        //     handleReload();
        // }, MILLISECONDS_IN_MINUTE/3);

        // return () => clearInterval(interval);
    }, []);


    return (
        <nav>
            <div>
                A2SV Hacks 2024 - Data Visualization
            </div>
            <button onClick={handleReload} className='reload-btn'>
                {(grandstate === grandStateEnum.Initial || grandstate === grandStateEnum.Loaded || grandstate === grandStateEnum.Error) && <IoReloadOutline />}
                {grandstate === grandStateEnum.Loading && <img src={loadingGif} alt="Loading" />}
            </button>
        </nav>
    );
};