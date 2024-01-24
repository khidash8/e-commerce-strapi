import { useCallback, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/Api";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);

  const makeApiCall = useCallback(async () => {
    const res = await fetchDataFromAPI(endpoint);
    setData(res.data);
  }, [endpoint]);

  useEffect(() => {
    makeApiCall();
  }, [makeApiCall]);

  return { data };
};

export default useFetch;
