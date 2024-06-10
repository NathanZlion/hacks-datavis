import { useSelector } from "react-redux";
import './count.css'

export const Count = () => {
    const people = useSelector((state: any ) => state.people.value);

    return (
        <div>
            <div className="title text-center">
                Summary Stat
            </div>
            <div className="count-wrapper">
                <div className="count-card">
                    <div className="count-card-number">{people!.totalParticipants}</div>
                    <div className="count-card-description">Students</div>
                </div>
                <div className="count-card">
                    <div className="count-card-number">{people!.individualParticipants}</div>
                    <div className="count-card-description">Individials</div>
                </div>
                <div className="count-card">
                    <div className="count-card-number">{people!.groupParticipants}</div>
                    <div className="count-card-description">Groups</div>
                </div>
                <div className="count-card">
                    <div className="count-card-number">{people!.totalCountries}</div>
                    <div className="count-card-description">Countries</div>
                </div>
            </div>
        </div>
    );
}