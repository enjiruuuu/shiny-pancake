import Card from "./Card";
import InputField from "./InputField";

const NewTrip: React.FC<any> = (props) => {
    const closeCard = (): void => {
        props.parentCallback();
    }

    return (
        <Card>
            <div className="card_header">
                <h2>Create new trip  🎉</h2>
                <button onClick={closeCard}>Close</button>
            </div>
            <InputField label="Custom trip title (optional)" type="text" placeholder="Type here"></InputField>
        </Card>
    );
};

export default NewTrip;