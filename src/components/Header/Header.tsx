import { HeaderContainer } from "./styles";

import { House } from "phosphor-react";

import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Marvel Store Commics</h1>
      <nav>
        <NavLink to="/" title="Home">
          <House size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
