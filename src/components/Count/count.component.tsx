import { useSelector } from "react-redux";
import './count.css'
// import { Card } from "../summary card/card.component";
import { faClipboardUser, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";
import {faEarthAfrica} from '@fortawesome/free-solid-svg-icons/faEarthAfrica';
import CountCard from "../Card/card.component";


export const Count = () => {
    const people = useSelector((state: any ) => state.people.value);

    return (
        <div className="">
            <div className="title text-center">
                Summary Stat
            </div>

            <div className="count-wrapper m-auto w-4/5 px-auto">
                {/* Total participation */}
                <CountCard cardTitle={"Total Registration"} cardValue={people ? people.totalParticipants : 0} cardIcon={faClipboardUser} />

                {/* Countries count */}
                <CountCard cardTitle={"Countries"} cardValue={people ? people.countryCount : 0} cardIcon={faEarthAfrica}/>

                {/* Individual participation */}
                <CountCard cardTitle={"Individuals"} cardValue={people ? people.individualParticipants : 0} cardIcon={faPerson} />

                {/* Group participation */}
                <CountCard cardTitle={"Groups"} cardValue={people ? people.groupParticipants : 0} cardIcon={faUsersLine} />
            </div>
        </div>
    );
}