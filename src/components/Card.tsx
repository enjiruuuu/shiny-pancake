import { ICard } from '../models/CardModel';
import '../styles/card.css';

const Card: React.FC<ICard> = (props: any) => {
    return (
        <div className="c_card">
            { props.children }
        </div>
    );
};

export default Card;