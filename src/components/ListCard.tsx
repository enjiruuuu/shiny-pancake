import { IListCard } from '../models/ListCardModel';
import '../styles/listCard.css';
import Place from './Place';

const ListCard: React.FC<IListCard> = (props) => {
    function toggleOpen(e: any): void {
        e.target.parentElement.classList.toggle('open');
    }
    
    return (
        <div className='c_listCard' onClick={(e) => toggleOpen(e)}>
            <div className='listCard_header'>
                <div className='image'></div>
                <p>{props.title}</p>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2864 1.17C12.0799 0.983749 11.8006 0.879208 11.5095 0.879208C11.2184 0.879208 10.9391 0.983749 10.7326 1.17L6.77666 4.71L2.87578 1.17C2.66932 0.983749 2.39003 0.879208 2.09891 0.879208C1.8078 0.879208 1.52851 0.983749 1.32205 1.17C1.21876 1.26296 1.13678 1.37356 1.08084 1.49542C1.0249 1.61728 0.996094 1.74799 0.996094 1.88C0.996094 2.01201 1.0249 2.14272 1.08084 2.26458C1.13678 2.38644 1.21876 2.49704 1.32205 2.59L5.99428 6.83C6.09672 6.92373 6.21859 6.99812 6.35287 7.04889C6.48716 7.09966 6.63119 7.1258 6.77666 7.1258C6.92212 7.1258 7.06615 7.09966 7.20044 7.04889C7.33472 6.99812 7.45659 6.92373 7.55903 6.83L12.2864 2.59C12.3896 2.49704 12.4716 2.38644 12.5276 2.26458C12.5835 2.14272 12.6123 2.01201 12.6123 1.88C12.6123 1.74799 12.5835 1.61728 12.5276 1.49542C12.4716 1.37356 12.3896 1.26296 12.2864 1.17Z" fill="black"/>
                </svg>
            </div>

            <div className='listCard_content'>
                <Place title='Bar Luca' placeId='123'></Place>
                <Place title='Bar Luca' placeId='123'></Place>
            </div>
        </div>
    );
};

export default ListCard;