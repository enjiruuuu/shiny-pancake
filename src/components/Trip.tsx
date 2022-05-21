import GenericHelper from "../helpers/GenericHelper";
import { ITripData } from "../models/TripModel";

const Trip: React.FC<ITripData> = (props: any) => {
    return(
        <div className="c_trip">
            <h4>{props.name ? props.name : props.city}</h4>
            <div className="sub_info">
                {props.name? props.city : null}
                <span>{GenericHelper.formatDate(new Date(props.startDate))} - {GenericHelper.formatDate(new Date(props.endDate))}</span>
            </div>
        </div>
    );
}

export default Trip;