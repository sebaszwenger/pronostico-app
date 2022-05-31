import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = useCallback(async () => {
    await axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  useEffect(() => {
    fetch();
  }, [url, fetch]);

  return { data, error };
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};

export default useFetch;
