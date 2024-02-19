import Banner from "../../components/Banner/Banner";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./AdminLoginPage.scss"



export const AdminLoginPage = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const loginUrl = `${baseUrl}login`

  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(loginUrl, {
        email: event.target.email.value,
        password: event.target.password.value
      })
      sessionStorage.setItem("token", response.data.token)
      navigate("/dashboard")

    } catch(error) {
      setError("Something went wrong")
    }
  }
  return (
    <main className="login">
        <Banner text={"Log in to the Admin Dashboard"}/>
        <section className="login__form">
            <h2 className="login__form--heading">Cool you're back, Larry!</h2>
            <h3 className="login__form--heading">Come on in</h3>
        <LoginForm handleSubmit={handleSubmit} error={error} />
        </section>
    </main>
  )
};
