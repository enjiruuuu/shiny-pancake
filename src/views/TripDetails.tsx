import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

const TripDetails = () => {
    let { id } = useParams();

    return(
        <Wrapper>
            <Header></Header>
            <p>{ id }</p>
        </Wrapper>
    );
}

export default TripDetails;