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
            <MyTitle primary>{props.Title}</MyTitle>
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
                    <ListGroupItem>
                      <strong>{props.Title}</strong>
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Director :</strong> {props.Director}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Actors :</strong> {props.Actors}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Runtime :</strong> {props.Runtime}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Plot :</strong> {props.Plot}
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
