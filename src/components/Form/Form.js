import Button from "../Button/Button";
import { Form, FormGroup, FormControl, Col, FormLabel } from "react-bootstrap";
import "./Form.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComp = () => {
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("url", {
        email: event.target.email.value,
        password: event.target.password.value
      })
      console.log(response.data);
      sessionStorage.setItem("token", response.data.token)
      navigate("/dashboard")

    } catch(error) {
      setError("Something went wrong")
    }
  }
  return (
    <Form horizontal className="py-2 form__login" onSubmit={handleSubmit}>
  <FormGroup className="form__login--group">
    <FormLabel className="form__login--label" htmlFor="#email">
      Email
      <Col>
      <FormControl type="email" placeholder="Email" value={} id="email" name="email" className="form__login--input"/>
      <FormControl.Feedback />
    </Col>
    </FormLabel>
  </FormGroup>

  <FormGroup className="form__login--group">
    <FormLabel className="form__login--label" htmlFor="#password">
      Password
      <Col>
      <FormControl type="password" placeholder="Password" value={} id="password" name="password" className="form__login--input"/>
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
