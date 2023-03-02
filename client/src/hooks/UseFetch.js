import React, { useEffect, useState } from "react";
import { fetchDataApi } from "../utils/api";

const UseFetch = (endPoint) => {
  const [data, setData] = useState();

  const makeApiCall = async () => {
    try {
      const resp = await fetchDataApi(endPoint);
      if (resp) {
        setData(resp);
        // console.log("rrrrr", resp);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(data);

  useEffect(() => {
    makeApiCall();
  }, [endPoint]);
  //   console.log(endPoint);
  return data;
};

export default UseFetch;
