import React from "react";
import styled from "styled-components";
import colors from "../../../Misc/colors";
import { HomeButton } from "../../GlobalStyles";
import MySearch from "../../Molecules/MySearch";

const MyNavbar = styled.nav`
  background-color: ${colors.dark};
  display: flex;
  justify-content: space-between;
  height: 58px;
  align-items: center;
  padding: 0 5vw;
`;

const Navbar = ({ handleSubmit, handleChange, myValue }) => {
  return (
    <MyNavbar>
      <HomeButton href="/">My-Movies</HomeButton>
      <MySearch
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={myValue}
      />
    </MyNavbar>
  );
};

export default Navbar;
