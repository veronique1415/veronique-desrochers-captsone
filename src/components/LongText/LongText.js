import { Container, Row, Stack, Col } from "react-bootstrap";
import "./LongText.scss"

const LongText = ({p1, p2, p3}) => {
  return (
    <section>
      <Container>
            <Row>
                 <Col className="paragraph__container p-3 mx-2">
                    <Stack gap={3}>
                        <p>{p1}</p>
                        <p>{p2}</p>
                        <p>{p3}</p>
                     </Stack>
                </Col>
            </Row>
          </Container>
      </section>
  )
};

export default LongText;
