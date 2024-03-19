import logo from "../../assets/logo.jpg";
import playStore from "../../assets/pla.jpg"
import app from "../../assets/app_store_3x_d293084ca1 1.jpg";
import * as S from "./footerstyled";

function Footer() {
  return (
    <>
      <S.Footer>
        <img src={logo} />
        <section>
          <div>
            <img src={playStore}/>
          </div>
          <div>
            <img src={app} alt="App" />
          </div>
        </section>
      </S.Footer>
    </>
  );
}

export default Footer;
