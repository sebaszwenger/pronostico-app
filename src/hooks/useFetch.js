import axios from "axios";
import { useQuery } from "react-query";

function useFetch(url) {
  const { data, error, isLoading } = useQuery("weather" + url, async () => {
    const { data } = await axios(url);
    return data;
  });
  return { data, error, isLoading };
}

export default useFetch;
