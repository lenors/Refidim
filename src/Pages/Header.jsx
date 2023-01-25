import React, { useState } from "react";
import * as S from "../Pages/Styles/StyleHeader";
import Hamburger from "../Pages/assets/menu.png";
import { GlobalStyle } from "./Styles/Globalstyle";


function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <S.Menu>
      <S.MenuH onClick={toggleMenu}><img src={Hamburger} alt="menu hamburguer" /></S.MenuH>
      {openMenu ? (
        <div>
          <S.ListasH>
            <li>Dias de Culto</li>
            <li>Sobre Nós</li>
            <li>Calendário</li>
            <li>Doe</li>
          </S.ListasH>
        </div>
      ) : null}
      <div>
          <S.Listas>
            <li>Dias de Culto</li>
            <li>Sobre Nós</li>
            <li>Calendário</li>
            <li>Doe</li>
          </S.Listas>
        </div>
        <div>
          <h1>Bem-Vindo a Igreja Cristã Refidim! </h1>

        </div>
    </S.Menu>  
     
     
  );

}

export default App;
