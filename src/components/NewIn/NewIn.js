import {Container, Row, Col} from "react-bootstrap"
import Banner from "../Banner/Banner";
import "./NewIn.scss"

const NewIn = () => {
  return <section className="newIn">
            <Banner text={"New bottles that just came in"} />
        </section>
};

export default NewIn;
