import { useSelector, useDispatch } from "react-redux";
import './count.css'

export const Count = () => {
    const dispatch = useDispatch();
    const people = useSelector((state: any ) => state.people.value);

    return (
        <div className="count-wrapper">
            <div className="count-card">
                <div className="count-card-number">690</div>
                <div className="count-card-description">Students</div>
            </div>
            <div className="count-card">
                <div className="count-card-number">390</div>
                <div className="count-card-description">Individials</div>
            </div>
            <div className="count-card">
                <div className="count-card-number">90</div>
                <div className="count-card-description">Groups</div>
            </div>
            <div className="count-card">
                <div className="count-card-number">45</div>
                <div className="count-card-description">Countries</div>
            </div>
        </div>
    );
}