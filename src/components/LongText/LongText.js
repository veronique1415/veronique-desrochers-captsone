import { Container, Row, Col } from "react-bootstrap";
import "./LongText.scss"

const LongText = ({p1, p2, p3}) => {
  

  return (
    <section>
      <Container>
            <Row>
                 <Col className="paragraph__container p-3 mx-2">
                        <p>{p1}</p>
                        <p>{p2}</p>
                        <p>{p3}</p>
                </Col>
            </Row>
          </Container>
      </section>
  )
};

export default LongText;
