import Header from "./components/Header/Header"
import * as S from "./components/Header/header_styled";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <S.GlobalStyle/>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App;
