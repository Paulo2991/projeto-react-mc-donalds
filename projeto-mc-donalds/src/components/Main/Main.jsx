import * as S from "./main_styled";
import bigmac from "../../assets/bigmac.png";
import sofa from "../../assets/sofa.jpg";
import restaurante from "../../assets/restaurante.jpg";
import juntos from "../../assets/juntos.png";
import sorvete from "../../assets/sorvete.svg"
import batata from "../../assets/batata.svg"
import Card  from "./Card";

function Main(){
   return (
     <>
       <main>
         <S.Section>
           <div>
             <img src={bigmac} alt="" />
             <h1>
               Bateu aquela <span>#fome</span> de <span>méqui</span>?
             </h1>
           </div>
           <S.ContainerImagens>
             <img src={bigmac} alt="" />
             <img src={batata} alt="" />
             <img src={sorvete} alt="" />
           </S.ContainerImagens>
         </S.Section>
         <S.Section2>
           <h2>Promoção</h2>
           <S.ContainerCards>
             <Card
               imagem={sofa}
               texto={"Que tal um #MéquiNoSofá?"}
             ></Card>
             <Card
               imagem={restaurante}
               texto={"venha conhecer nossa nova loja"}
             ></Card>
             <Card
               imagem={juntos}
               texto={"Confira as medidas que o Méqui adotou!"}
             ></Card>
           </S.ContainerCards>
         </S.Section2>
       </main>
     </>
   );                         
}

export default Main;