import styled, { keyframes } from "styled-components";
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

// MODAL STYLES

const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

const fadeOut = keyframes`
  from {opacity: 1}
  to {opacity: 0}
`;

export const MyModal = styled.div`
  background-color: rgba(${0}, ${0}, ${0}, ${0.3});
  padding-right: ${(props) => (props.isOpen ? "17px" : "0")};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  overflow-x: ${(props) => (props.isOpen ? "hidden" : "none")};
  overflow-y: ${(props) => (props.isOpen ? "auto" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  outline: 0;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s linear;
`;

export const MyModalContainer = styled.div`
  transform: none;
  transition: transform 0.3s ease-out;
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  pointer-events: none;
  @media (min-width: 992px) {
    max-width: 800px;
  }
  @media (min-width: 576px) {
    min-height: calc(100% - 3.5rem);
    margin: 1.75rem auto;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
`;

export const ModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
`;

export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
export const RowModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
export const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
`;
export const ModalCol = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
`;

export const ListGroupItem = styled.li`
  :first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  border-top-width: 0;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  :last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
`;

export const ButtonX = styled.button`
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  appearance: none;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  text-transform: none;
  overflow: visible;
  border-radius: 0;
`;
