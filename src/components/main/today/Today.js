import { useContext, useState } from "react";
import { Context } from "../../hooks/context";
import { Container } from "../../layoutComponent/Container";
import { Preloader } from "../../layoutComponent/Preloader";
import { useFetch } from "../../hooks/useFetch";
import { ItemWrapper } from "../../layoutComponent/ItemWrapper";
import { Redirect } from "react-router";

export const Today = () => {
  const { token, setModalItem } = useContext(Context);
  const [dataToday, setDataToday] = useState(null);
  useFetch("/executions/today", setDataToday);

  if(!token) return (<>
    <Redirect to="/login"/>
  </>);
  
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