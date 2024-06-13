import { useSelector } from "react-redux";
import './count.css'
import { Card } from "../summary card/card.component";
import { faClipboardUser, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";
import {faEarthAfrica} from '@fortawesome/free-solid-svg-icons/faEarthAfrica';


export const Count = () => {
    const people = useSelector((state: any ) => state.people.value);

    return (
        <div className="">
            <div className="title text-center">
                Summary Stat
            </div>

            <div className="count-wrapper m-auto w-4/5 px-auto">
                <Card title="Total Registration" icon={faClipboardUser} value={people ? people.totalParticipants : 0} />
                <Card title="Countries" icon={faEarthAfrica} value={people ? people.countryCount : 0} />
                <Card title="Individuals" icon={faPerson} value={people ? people.individualParticipants : 0} />
                <Card title="Groups" icon={faUsersLine} value={people ? people.groupParticipants : 0} />
            </div>
        </div>
    );
}