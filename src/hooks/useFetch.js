import axios from "axios";
import { useQuery } from "react-query";

function useFetch(url) {
  

  const { data } = useQuery(
    "weather" + url, async () => {
      const { data } = await axios(url);
      return data;
    }

  )
  return {data};
}


export default useFetch;
