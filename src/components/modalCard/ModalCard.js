import { useContext } from "react";
import styled from "styled-components";
import { getAge } from "../functions/getAge";
import { Context } from "../hooks/context";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.3);
  backdrop-filter: blur(0.2em);
`;

const CardItem = styled.div`
  max-width: 500px;
  max-height: 350px;
  padding-bottom: 15px;
  background-color: #000;
  width: 90%;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid red;
  font-size: 40px;
  color: #e2777a;

  @media(max-width: 500px) {
    font-size: 8vw;
  }
`;

const TitleItem = styled.p`
  padding: 5px 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div:nth-child(1) {
    color: #f8c555;
    font-size: 0.7em;
  }

  @media(max-width: 500px) {
    padding: 5px 1em;
  }
`;

const Values = styled.div`

`;

const CloseButton = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255,21,49,0.9);
  border-radius: 50%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
  &::before,
    ::after {
      position: absolute;
      content: "";
      width: 30px;
      height: 3px;
      background-color: rgba(255,21,49,0.7);
      top: 47%;
      left: 12%;
    }
  &::before{
    transform: rotate(45deg);
  }
  &::after{
    transform: rotate(-45deg);
  }

  &:hover {
  &::before,
    ::after {
      background-color: rgba(255,21,49,1);
      filter: drop-shadow(0 0 4px rgba(255,0,0,0.7));
    }
  }
`;

export const ModalCard = () => {
  const { modalItem, setModalItem } = useContext(Context);
  const item = modalItem.animal || modalItem
  console.log(modalItem);
  return (<Overlay onClick={() => setModalItem(null)}>
      <CardItem >
        <CloseButton onClick={() => setModalItem(null)}/>
        <TitleItem >
          <Values >Вид</Values>
          <Values >{item.spec.name}</Values>
        </TitleItem>
        <TitleItem >
          <Values >Кличка</Values>
          <Values >{item.name}</Values>
        </TitleItem>
        <TitleItem >
          <Values >Возраст</Values>
          <Values >{getAge(item.age)}</Values>
        </TitleItem>
        <TitleItem >
          <Values >Рост</Values>
          <Values >{item.height} {item.heightUnit}</Values>
        </TitleItem>
        <TitleItem >
          <Values >Вес</Values>
          <Values >{item.weight} {item.weightUnit}</Values>
        </TitleItem>
      </CardItem>
    </Overlay>
  )
}