import React from "react";
import { MyButton, MyInput } from "../../GlobalStyles";
import MyGap from "../../Atoms/MyGap";
import styled from "styled-components";

const MyForm = styled.form`
  display: flex;
  width: 25vw;
  justify-content: center;
`;

function MySearch({ onSubmit, onChange, value }) {
  return (
    <MyForm onSubmit={onSubmit}>
      <MyInput
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <MyGap width="10px" />
      <MyButton type="submit">Search</MyButton>
    </MyForm>
  );
}

export default MySearch;
