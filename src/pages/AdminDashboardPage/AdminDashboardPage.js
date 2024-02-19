import { Container, Col, Row } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import "./AdminDashboardPage.scss"
import AccordionComp from "../../components/AccordionComp/AccordionComp";

const AdminDashboardPage = () => {
  return <main>
    <Banner text={"Welcome to your Dashboard, Larry!"} />
    <section className="dashboard">
    <Container className="py-4">
      <Row>
        <Col className="dashboard__paragraph--container">
          <p className="dashboard__paragraph" >Here you can choose to either add new producer and products or modify and delete existing ones.</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
        <AccordionComp />
        </Col>
      </Row>
    </Container>
    </section>
  </main>;
};

export default AdminDashboardPage;
