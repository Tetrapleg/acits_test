import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../hooks/context";
import { Container } from "../../layoutComponent/Container";
import styled from 'styled-components';
import { ItemWrapper } from "../../layoutComponent/ItemWrapper";

const Pagination = styled.nav`
  padding: 15px;
  text-align: center;
  color: #f8c555;
  font-size: 20px;

  & span {
    padding: 0px 5px;
  }
`;

const ActiveSpan = styled.span`
  cursor: pointer;
`;

const DisabledSpan = styled.span`
  color: #e2777a;
`;

export const Animals = () => {
  const { token, setToken, setModalItem, isFetching, setIsFetching } = useContext(Context);
  const [dataAnimals, setDataAnimals] = useState(null);
  const [paginationPage, setPaginationPage] = useState(0);
  const [paginationCount, setPaginatiobCount] = useState(0);

  const paginationArray = [];

  for(let i = 0; i < paginationCount; i++) {
    paginationArray.push(i + 1);
  }

  useEffect(() => {
    (async() => {
      if(!isFetching) setIsFetching(true);
      await axios.get("https://acits-test-back.herokuapp.com/api/animals/?limit=5&offset=0", { 
        headers: { 
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
        } 
      })
      .then(res => {
        setDataAnimals(res.data);
        setPaginationPage(1);
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

  const changePage = async(page) => {
    setIsFetching(true);
    setPaginationPage(page);
    await axios.get(`https://acits-test-back.herokuapp.com/api/animals/?limit=5&offset=${(page - 1) * 5}`, { 
      headers: { 
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
       } 
    })
    .then(res => {
      setDataAnimals(res.data);
    }) 
    .catch(error => {
      setToken(null);
      localStorage.removeItem('token');
      console.warn(error, "errror");
    });
    setIsFetching(false);
  };

  return (
    <Container>
      <h1 >Все подопечные</h1> 
      <Pagination >
        {paginationArray.length > 1 && paginationArray.map(item => item !== paginationPage ? 
            <ActiveSpan key={item} onClick={() => changePage(item)}>{item}</ActiveSpan> :
            <DisabledSpan key={item} >{item}</DisabledSpan>
        )}
      </Pagination>
      {dataAnimals && dataAnimals.results.map(item => (
        <ItemWrapper key={item.id}>
          <span>{item.spec.name}</span> <span onClick={() => setModalItem(item)}>{item.name}</span>
        </ItemWrapper>
      ))}
    </Container>
  )
};