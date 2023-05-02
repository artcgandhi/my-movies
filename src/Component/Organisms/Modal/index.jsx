import React from "react";
import {
  ButtonX,
  ContainerFluid,
  ListGroup,
  ListGroupItem,
  ModalBody,
  ModalCol,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalImage,
  ModalImageContainer,
  MyButton,
  MyModal,
  MyModalContainer,
  MyTitle,
  RowModal,
} from "../../GlobalStyles";

const Modal = (props) => {
  return (
    <MyModal role="dialog" isOpen={props.isOpen}>
      <MyModalContainer>
        <ModalContent>
          <ModalHeader>
            <MyTitle>{props.Title}</MyTitle>
            <ButtonX onClick={props.onCloseX}>X</ButtonX>
          </ModalHeader>
          <ModalBody>
            <ContainerFluid>
              <RowModal>
                <ModalImageContainer>
                  <ModalImage src={props.Image} />
                </ModalImageContainer>
                <ModalCol>
                  <ListGroup>
                    <ListGroupItem>{props.Title}</ListGroupItem>
                    <ListGroupItem>
                      <strong>Director : {props.Director}</strong>
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Actors : {props.Actors}</strong>
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Runtime : {props.Runtime}</strong>
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Plot : {props.Plot}</strong>
                    </ListGroupItem>
                  </ListGroup>
                </ModalCol>
              </RowModal>
            </ContainerFluid>
          </ModalBody>
          <ModalFooter>
            <MyButton onClick={props.onClose}>Close</MyButton>
          </ModalFooter>
        </ModalContent>
      </MyModalContainer>
    </MyModal>
  );
};

export default Modal;
