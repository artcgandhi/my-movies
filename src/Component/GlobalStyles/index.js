import styled from "styled-components";
import colors from "../../Misc/colors";

export const Container = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
`;

export const RowMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const CardsContainer = styled.div`
  margin-bottom: 3rem !important;
  margin-top: 3rem !important;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const ImageContainer = styled.img`
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  width: 100%;
  flex-shrink: 0;
  vertical-align: middle;
  border-style: none;
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const HomeButton = styled.a`
  color: ${colors.light};
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  text-decoration: none;
`;

export const MyTitle = styled.h2`
  color: ${(props) => (props.primary ? colors.primary : colors.light)};
  font-size: ${(props) => (props.normal ? "normal" : "18px")};
  margin: 0;
`;

export const MyYear = styled.h5`
  color: ${colors.primary};
  margin: 0;
`;

export const MyInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 5vh;
  width: 18vw;
  font-size: 16px;
  padding: 0 0 0 5px;
`;

export const MyButton = styled.button`
  height: 5vh;
  color: ${colors.light};
  background-color: ${colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  font-size: 20px;
  padding: 4px 8px;
  transition: all 0.1s ease-out;
  &:hover {
    background-color: ${colors.dark};
    transform: translateY(-3px);
  }
  &:active {
    background-color: ${colors.darker};
  }
`;
