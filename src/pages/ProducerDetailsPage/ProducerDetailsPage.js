import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProducerDetails from "../../components/ProducerDetails/ProducerDetails";


const ProducerDetailsPage = () => {

    const {producerId} = useParams()
    const [producerProducts, setProducerProducts] = useState([])
    const [producer, setProducer] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL
    const producerProductsUrl =  `${baseUrl}producers/${producerId}/products`
    const producerUrl =  `${baseUrl}producers/${producerId}`

    const getProducts =  async () => {
      const response = await axios.get(producerProductsUrl)
      setProducerProducts(response.data)
  }

  const getProducer =  async () => {
      const response = await axios.get(producerUrl)
      setProducer(response.data)
  }

  useEffect(() => {
      getProducts()
      getProducer()
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [producerId])

    return (
        <main>
            <ProducerDetails producer={producer} producerProducts={producerProducts}/>
        </main>
    )
}

export default ProducerDetailsPage;