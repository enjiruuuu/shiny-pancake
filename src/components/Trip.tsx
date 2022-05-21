import '../styles/trip.css';
import GenericHelper from "../helpers/GenericHelper";
import { ITripData } from "../models/TripModel";

const Trip: React.FC<ITripData> = (props: any) => {
    return(
        <li className="c_trip">
            <div>
                <h4>{props.name ? props.name : props.city}</h4>
                <div className="sub_info">
                    {props.name? <span className='city'>{props.city}</span> : null}
                    <span>{GenericHelper.formatDate(new Date(props.startDate))} - {GenericHelper.formatDate(new Date(props.endDate))}</span>
                </div>
            </div>
        </li>
    );
}

export default Trip;