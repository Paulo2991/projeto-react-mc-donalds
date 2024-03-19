import logo from "../../assets/logo.jpg";
import app from "../../assets/app.png";
import appButton from "../../assets/app.svg";
import * as S from "./header_styled";
function Header(){
    return (
        <>
           <S.Header>
              <img src={logo} alt=""/>
              <section>
                 <div>
                     <img src={appButton} alt="" /> 
                     <h3>Baixe o App</h3>      
                 </div> 
                 <S.ContainerPedido>
                    <h3>Peça sua máquina</h3>    
                    <img src={app} alt="" />    
                 </S.ContainerPedido>       
              </section>
           </S.Header>                 
        </>                    
    );                        
}

export default Header;