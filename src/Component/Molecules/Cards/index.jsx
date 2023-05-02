import React from "react";
import {
  CardBody,
  CardsContainer,
  CardsWrapper,
  ImageContainer,
  MyButton,
  MyTitle,
  MyYear,
} from "../../GlobalStyles";
import noImage from "../../../Assets/Image/noImage.jpg";

const Cards = ({ Image, Title, Year, onClick }) => {
  return (
    <CardsContainer>
      <CardsWrapper>
        <ImageContainer src={Image === "N/A" ? noImage : Image} />
        <CardBody>
          <MyTitle primary>{Title}</MyTitle>
          <MyYear>{Year}</MyYear>
          <MyButton onClick={onClick}>Details</MyButton>
        </CardBody>
      </CardsWrapper>
    </CardsContainer>
  );
};

export default Cards;
