import { useEffect, useState } from "react";
import axios from "axios";

const useFetch: any = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Using Axios
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Sorry, something went wrong");
        setIsLoading(false);
      });
  }, [url]);
  ///////////////////////////

  // Using Fetch Async Await
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const persons = await response.json();
  //       console.log(persons);
  //       setData(persons);
  //       setError(null);
  //     } catch (error) {
  //       console.log("error", error);
  //       setError("Sorry, something went wrong");
  //       setIsLoading(false);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [url]);

  return { data, error, isLoading };
};

export default useFetch;