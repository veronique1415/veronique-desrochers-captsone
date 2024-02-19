import Button from "../Button/Button";
import { Form, FormGroup, FormControl, Col, FormLabel } from "react-bootstrap";
import "./Form.scss";



const FormComp = ({handleSubmit, error}) => {
  
  return (
    <Form className="py-2 form__login" onSubmit={handleSubmit}>
  <FormGroup className="form__login--group">
    <FormLabel className="form__login--label" htmlFor="#email">
      Email
      <Col>
      <FormControl type="email" placeholder="Email" id="email" name="email" className="form__login--input"/>
      <FormControl.Feedback />
    </Col>
    </FormLabel>
  </FormGroup>

  <FormGroup className="form__login--group">
    <FormLabel className="form__login--label" htmlFor="#password">
      Password
      <Col>
      <FormControl type="password" placeholder="Password"  id="password" name="password" className="form__login--input"/>
      <FormControl.Feedback />
    </Col>
    </FormLabel>
  </FormGroup>
  <FormGroup className="form__login--group">
    <Col className="form__button--container">
      <Button type={"submit"} text={"Sign in"} className={"pale-beige"}/>
    </Col>
  </FormGroup>
  {error && <p className="form__error">{error}</p>}
</Form>
  )
};

export default FormComp;
