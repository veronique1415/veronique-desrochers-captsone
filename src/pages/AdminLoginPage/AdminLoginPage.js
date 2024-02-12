import Banner from "../../components/Banner/Banner";
import FormComp from "../../components/Form/Form";
import "./AdminLoginPage.scss"


export const AdminLoginPage = () => {
  return (
    <main className="login">
        <Banner text={"Admin Dashboard"}/>
        <section className="login__form">
            <h2 className="login__form--header">Please Log In</h2>
        <FormComp />
        </section>
    </main>
  )
};
