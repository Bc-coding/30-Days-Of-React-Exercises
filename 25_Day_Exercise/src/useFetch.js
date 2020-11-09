import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [dataForCountry, setDataForCountry] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        const data = await response.data;
        setData(data);
        setDataForCountry(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryData();
  }, [url]);

  return { data, dataForCountry, loading };
};

export default useFetch;

//       const response = await axios.get(url);
//       const data = await response.data;
//       setData(data);
//       setDataMatched([...data]);
//       let obj1 = JSON.parse(JSON.stringify(data));
//       setDataForGraph(obj1);
