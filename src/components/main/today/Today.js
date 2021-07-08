import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../hooks/context";
import { Container } from "../../layoutComponent/Container";
import styled from 'styled-components';
import { Preloader } from "../../layoutComponent/Preloader";

const ItemWrapper = styled.div`
  padding: 15px;
  border: 1px solid #d0021b;
  border-radius: 10px;
  margin: 15px;
  color: #e2777a;
  font-size: 3vw;

  & span:nth-child(odd) {
    color: #f8c555;
    font-size: 0.7em;
  }

  & span:nth-child(2) {
    cursor: pointer;
  }

  @media(max-width: 1400px) {
    font-size: 5vw;
  }
`;

export const Today = () => {
  const { token, setToken, setModalItem, isFetching, setIsFetching } = useContext(Context);
  const [dataToday, setDataToday] = useState(null);
  
  useEffect(() => {
    (async() => {
      if(!isFetching) setIsFetching(true);

      await axios.get("https://acits-test-back.herokuapp.com/api/executions/today", { 
        headers: { 
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
         } 
      })
      .then(res => {
        setDataToday(res.data);
      }) 
      .catch(error => {
        setToken(null);
        localStorage.removeItem('token');
        console.warn(error, "errror");
      });
      setIsFetching(false);
    })();
  }, []);
  console.log(dataToday);
  return (
    <Container>
      <h1 >Процедуры на сегодня</h1> 
      {dataToday && dataToday.results.map(item => (
        <ItemWrapper key={item.id}><span>{item.animal.spec.name}</span> <span onClick={() => setModalItem(item)}>{item.animal.name}</span> - <span>{item.type}</span> {item.time.match(/\d\d:\d\d/)}</ItemWrapper>
      ))}
      {!dataToday && <Preloader />}
    </Container>
  )
};