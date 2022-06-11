import { IConfirmationModal } from '../models/ConfirmationModalModel';
import '../styles/confirmationModal.css';
import Card from './Card';

const ConfirmationModal: React.FC<IConfirmationModal> = (props) => {
    
    function closeModal(): void {
        props.parentCallback();
    }
    
    return (
        <div className="v_confirmationModal">
            <Card>
                <span className='confirmationHeader'>{props.title}</span>
                <>
                    {
                        props.details ? <div className='details'>{props.details}</div> : null
                    }
                </>
                <div className='buttons'>
                    <button className='secondary' onClick={closeModal}>Cancel</button>
                    <button className='primary small' onClick={props.onConfirm}>{props.confirmationText}</button>
                </div>
                { props.genericError ? <span className="error_message">{ props.genericError }</span> : null }
            </Card>
        </div>
    );
};

export default ConfirmationModal;