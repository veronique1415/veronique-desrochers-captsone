
import {Container, Row, Col} from "react-bootstrap"
import "./Banner.scss"

const Banner = ({text}) => {
  return (
    <article>
      <Container className="mw-100 my-4">
          <Row>
              <Col className="p-0">
              <h2 className="banner__heading">
                  {text} 
              </h2>
              </Col>
          </Row>
      </Container>
    </article>
  )
};

export default Banner;
