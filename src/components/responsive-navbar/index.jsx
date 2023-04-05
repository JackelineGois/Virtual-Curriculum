import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const ResponsiveMenu = () => {
  const [checked, setChecked] = useState(false);

  const changeMenuStatus = () => {
    setChecked(!checked);
  };

  return (
    <>
      <header className="header-menu-responsive">
        <input type="checkbox" id="btn-menu" value={checked} />
        <label for="btn-menu">
          <FontAwesomeIcon className="fa-bars" icon={faBars} />
          <div class="site-name">Jackeline de Morais</div>
        </label>
        <nav class="responsive-menu">
          <a onClick={changeMenuStatus} href="#aboutMe">
            Quem sou eu
          </a>
          <a onClick={changeMenuStatus} href="#services">
            Resumo
          </a>
          <a onClick={changeMenuStatus} href="#contact">
            Contato
          </a>
        </nav>
      </header>
    </>
  );
};

export default ResponsiveMenu;
