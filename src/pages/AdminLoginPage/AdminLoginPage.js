import Banner from "../../components/Banner/Banner";
import FormComp from "../../components/Form/Form";
import "./AdminLoginPage.scss"


export const AdminLoginPage = () => {
  return (
    <main className="login">
        <Banner text={"Admin Dashboard"}/>
        <section className="login__form">
            <h2 className="login__form--heading">Cool you're back, Larry!</h2>
            <h3 className="login__form--heading">Come on in</h3>
        <FormComp />
        </section>
    </main>
  )
};
