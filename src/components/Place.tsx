import { IPlace } from '../models/PlaceModel';
import '../styles/place.css';

const Place: React.FC<IPlace> = (props) => {
    
    return (
        <div className='c_place'>
            <div className='image'></div>
            <div>
                <h4>{props.title}</h4>
                <p className='info'><span className='description'>Burgers</span><span>Monday – Friday / 11am - Late, Saturday / 5pm – Late</span></p>
            </div>
        </div>
    );
};

export default Place;