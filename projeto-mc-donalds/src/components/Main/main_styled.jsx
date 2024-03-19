import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #ffc72c;
  padding: 2em;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
  }
  div h1 {
    color: white;
    font-size: 46px;
    width: 400px;
  }
  div span {
    color: red;
  }
`;

export const ContainerImagens = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  gap: 30px;
  img {
    width: 90px;
    height: 90px;
  }
`;

export const Section2 = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color: #feb706;
   h2 {
    margin-bottom: 15px;
    font-size: 36px;
    color: white;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 350px;
  height: 320px;
  align-items: center;
  margin: 0 20px;
  background-color: white;
  color: black;
  border-radius: 20px;

  img {
    width: 100%;
  }

  button {
    margin-bottom: 20px;
    cursor: pointer;
    display: inline-block;
    padding: 0.3em 0.9em;
    background-color: #feb706;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
  }
`;


