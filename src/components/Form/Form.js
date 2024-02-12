import Button from "../Button/Button";
import { Form, FormGroup, FormControl, Col, FormLabel } from "react-bootstrap";
import "./Form.scss";

const FormComp = () => {
  return (
    <Form horizontal className="py-5 form__login">
  <FormGroup className="form__login--group">
    <FormLabel className="form__login--label">
      Email
      <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
      <FormControl.Feedback />
    </Col>
    </FormLabel>
  </FormGroup>

  <FormGroup className="form__login--group">
    <FormLabel className="form__login--label">
      Password
      <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
      <FormControl.Feedback />
    </Col>
    </FormLabel>
  </FormGroup>
  <FormGroup className="form__login--group">
    <Col className="form__button--container">
      <Button type={"submit"} text={"Sign in"} className={"pale-beige"}/>
    </Col>
  </FormGroup>
</Form>
  )
};

export default FormComp;
