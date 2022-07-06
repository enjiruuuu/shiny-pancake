import { useState } from 'react';
import { Countries } from '../countries';
import GenericHelper from '../helpers/GenericHelper';
import { ISideBar } from '../models/SideBarModel';
import '../styles/sideBar.css';
import PencilIcon from './icons/PencilIcon';
import PlusIcon from './icons/PlusIcon';
import InputField from './InputField';
import ListCard from './ListCard';
import ModifyTrip from './ModifyTrip';
import Overlay from './Overlay';
import Wrapper from './Wrapper';

const SideBar: React.FC<ISideBar> = (props) => {
    const [isEditTripModalOpen, setIsEditTripModalOpen] = useState<boolean>(false);

    function toggleEditModal(): void {
        const newValue: boolean = !isEditTripModalOpen;
        setIsEditTripModalOpen(newValue);

        GenericHelper.toggleScroll();
    }
    
    return (
        <Wrapper>
            <>
                {
                    isEditTripModalOpen &&
                    <Wrapper>
                        <Overlay></Overlay>
                        <ModifyTrip city={GenericHelper.binarySearchCountries(Countries, props.city)} title={props.title} startDate={props.startDate} endDate={props.endDate} header="Edit trip ✏️" parentCallback={toggleEditModal} isEdit={true} tripUuid={props.tripUuid} refreshTrip={props.refreshTrip}></ModifyTrip>
                    </Wrapper>
                }
            </>
            <div className="c_sideBar">
                <div className='sideBar_header'>
                    <button className='icon' onClick={toggleEditModal}><PencilIcon fill='#D5DAE1'></PencilIcon></button>
                    <h1>{props.title ? props.title : props.city}</h1>
                    <span>
                        {props.title ? props.city + ', ' : null}
                        {GenericHelper.formatDate(new Date(props.startDate))} - {GenericHelper.formatDate(new Date(props.endDate))}
                    </span>
                </div>

                <div className='sideBar_content'>
                    <InputField label='Search location or activity' placeholder='Start typing here...' type='text'></InputField>

                    <div className='c_lists'>
                        <div>
                            <div className='lists_header'>
                                <h3>Lists</h3>
                                <button className="tertiary"><span>Create new trip</span><PlusIcon fill="#F0FDF4"></PlusIcon></button>
                            </div>
                            <div className='lists'>
                                <ListCard title='Places to go'></ListCard>
                                <ListCard title='Places to go'></ListCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default SideBar;