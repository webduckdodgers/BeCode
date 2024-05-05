/*
 * COMPONENT DATA
 */

import React, { useState, useEffect } from "react";
import API from "./api.js";

const Data = () => {
  const URL = "https://api.chucknorris.io/jokes/random";
  const [data, setData] = useState();
  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);

      setData(request.value);
    };
  }, []);

  return <p>{data}</p>;
};

export default Data;
