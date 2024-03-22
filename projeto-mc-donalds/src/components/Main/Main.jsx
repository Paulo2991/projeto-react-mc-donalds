import * as S from "./main_styled";
import bigmac from "../../assets/bigmac.png";
import sofa from "../../assets/sofa.jpg";
import restaurante from "../../assets/restaurante.jpg";
import juntos from "../../assets/juntos.png";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";
import Card from "./Card";
import { useState } from "react";

function Main() {
  const [imagens, setImagens] = useState(bigmac);

  const clickImagensSrc = (imagensClick) => {
    if (
      imagensClick === bigmac ||
      imagensClick === batata ||
      imagensClick === sorvete
    ) {
      setImagens(imagensClick);
    }
  };
  
  return (
    <>
      <main>
        <S.Section>
          <div>
            <img src={imagens} alt="" onClick={() => clickImagensSrc(bigmac)} />
            <h1>
              Bateu aquela <span>#fome</span> de <span>méqui</span>?
            </h1>
          </div>
          <S.ContainerImagens>
            <img src={bigmac} alt="" onClick={() => clickImagensSrc(bigmac)} />
            <img src={batata} alt="" onClick={() => clickImagensSrc(batata)} />
            <img
              src={sorvete}
              alt=""
              onClick={() => clickImagensSrc(sorvete)}
            />
          </S.ContainerImagens>
        </S.Section>
        <S.Section2>
          <h2>Promoção</h2>
          <S.ContainerCards>
            <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"}></Card>
            <Card
              imagem={restaurante}
              texto={"venha conhecer nossa nova loja"}
            ></Card>
            <Card
              imagem={juntos}
              texto={"Confira as medidas que o Méqui adotou!"}
            >
            </Card>
          </S.ContainerCards>
        </S.Section2>
      </main>
    </>
  );
}

export default Main;
