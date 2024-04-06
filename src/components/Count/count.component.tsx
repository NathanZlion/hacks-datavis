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
                <div className="count-card-number">690</div>
                <div className="count-card-description">Students</div>
            </div>
            <div className="count-card">
                <div className="count-card-number">690</div>
                <div className="count-card-description">Students</div>
            </div>
            <div className="count-card">
                <div className="count-card-number">690</div>
                <div className="count-card-description">Students</div>
            </div>
        </div>
    );
}