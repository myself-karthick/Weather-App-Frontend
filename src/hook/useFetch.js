import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (city) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_URL || "";
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post(url, {
        city
      });
      setData(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () =>{
    fetchData()
  }

  return { data, isLoading, error ,refetch };
};

export default useFetch;
