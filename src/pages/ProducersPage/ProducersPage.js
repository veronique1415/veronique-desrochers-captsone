import Producers from "../../components/Producers/Producers";
import { useState, useEffect } from "react";
import axios from "axios";

const ProducersPage = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const producersUrl = `${baseUrl}producers`;

  const [producers, setProducers] = useState([]);

  useEffect(() => {
    const getProducers = async () => {
      try {
        const response = await axios.get(producersUrl);
        setProducers(response.data);
      } catch (error) {
        console.error("Unable to retrieve producers", error);
      }
    };

    getProducers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Producers text={"Our Producers"} producersData={producers} />
    </main>
  );
};

export default ProducersPage;
