import axios from "axios";
import { useState, useEffect } from "react";
import Products from "../../components/Products/Products";

const WinesPage = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const bottleUrl = `${baseUrl}products`
    const [bottles, setBottles] = useState([]);


    const getBottles = async () => {
        try {
            const response = await axios.get(bottleUrl)
            setBottles(response.data)
        } catch (error) {
            console.error("Unable to retrieve picture", error)
        }
    }
    useEffect(()=>{
        getBottles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

     return (
        <main>
            <Products text={"Our Products"} bottles={bottles}/>
        </main>
        
    )
}

export default WinesPage;