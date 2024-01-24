import Hero from "../../components/Hero/Hero";
import NewIn from "../../components/NewIn/NewIn";
import InsideGia from "../../assets/images/Screenshot 2023-12-19 at 8.18.02 AM.jpeg"

const HomePage = ({text, imagePath}) => {
    return (
        <>
            <main>
                <Hero text={"Small private import company, truly grand products."} imagePath={InsideGia} />
                <NewIn />
            </main>

        </>
    )
}

export default HomePage;