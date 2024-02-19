
import { Accordion } from "react-bootstrap";
import "./AccordionComp.scss"
import EditProducer from "../EditProducer/EditProducer";

const AccordionComp = () => {
  return <div className="cardComp">
    <Accordion className="py-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add +</Accordion.Header>
        <Accordion.Body>
        <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>New Producer</Accordion.Header>
        <Accordion.Body className="accordion__body">
          ADD Producer FORM
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Add New Product</Accordion.Header>
        <Accordion.Body className="accordion__body">
        ADD Product FORM
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Edit</Accordion.Header>
        <Accordion.Body>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Edit Producer</Accordion.Header>
        <Accordion.Body className="accordion__body">
        <EditProducer />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Edit Product</Accordion.Header>
        <Accordion.Body className="accordion__body">
        Edit Product FORM
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Delete</Accordion.Header>
        <Accordion.Body>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Delete Producer</Accordion.Header>
        <Accordion.Body className="accordion__body">
        Delete Producer form
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Delete Product</Accordion.Header>
        <Accordion.Body className="accordion__body">
          Delete product form 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>;
};

export default AccordionComp;
