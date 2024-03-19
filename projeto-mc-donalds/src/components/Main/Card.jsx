import * as S from "./main_styled";
import { useState } from "react";

function Card({ imagem, texto }) {
  const [pedidos, setPedidos] = useState();
  const [nomePedido,setNomePedido] = useState();
  const[preco,setPreco] = useState();

   function pedidoBatata() {
     setPedidos("../../assets/batata.svg");
   }

   function pedidoSanduiche(){
        
   }
   
  return (
    <>
      <S.Card>
        <img src={imagem} alt="" />
        <p>{texto}</p>
        <button>Clique Aqui</button>
      </S.Card>
    </>
  );
}

export default Card;
