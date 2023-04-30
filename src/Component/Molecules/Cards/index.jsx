import React from "react";
import {
  CardBody,
  CardsContainer,
  CardsWrapper,
  ImageContainer,
  MyTitle,
  MyYear,
} from "../../GlobalStyles";
import noImage from "../../../Assets/Image/noImage.jpg";

const Cards = ({ Image, Title, Year }) => {
  return (
    <CardsContainer>
      <CardsWrapper>
        <ImageContainer src={Image === "N/A" ? noImage : Image} />
        <CardBody>
          <MyTitle primary>{Title}</MyTitle>
          <MyYear>{Year}</MyYear>
        </CardBody>
      </CardsWrapper>
    </CardsContainer>
  );
};

export default Cards;
