import Button from "../Button/Button";
import { Form, FormGroup, FormControl, Col, FormLabel } from "react-bootstrap";
import "./Form.scss";

const FormComp = () => {
  return (
    <Form horizontal className="py-2 form__login">
  <FormGroup className="form__login--group">
    <FormLabel className="form__login--label">
      Email
      <Col>
      <FormControl type="email" placeholder="Email" className="form__login--input"/>
      <FormControl.Feedback />
    </Col>
    </FormLabel>
  </FormGroup>

  <FormGroup className="form__login--group">
    <FormLabel className="form__login--label">
      Password
      <Col>
      <FormControl type="password" placeholder="Password" className="form__login--input"/>
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
