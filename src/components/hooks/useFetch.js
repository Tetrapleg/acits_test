import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./context"

export const useFetch = ( method, setData ) => {
  const { token, setToken,isFetching, setIsFetching } = useContext(Context);
  const [paginationCount, setPaginatiobCount] = useState(0);

  useEffect(() => {
    (async() => {
      if(!isFetching) setIsFetching(true);

      await axios.get(`https://acits-test-back.herokuapp.com/api${method}`, { 
        headers: { 
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
         } 
      })
      .then(res => {
        setData(res.data);
        setPaginatiobCount(Math.ceil(res.data.count / 5));
      }) 
      .catch(error => {
        setToken(null);
        localStorage.removeItem('token');
        console.warn(error, "errror");
      });
      setIsFetching(false);
    })();
  }, []);

  if(paginationCount) return paginationCount;

  return;
};