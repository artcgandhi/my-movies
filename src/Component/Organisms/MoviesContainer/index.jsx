import React from "react";
import { RowMoviesContainer } from "../../GlobalStyles";
import Cards from "../../Molecules/Cards";
import BeatLoader from "react-spinners/BeatLoader";
import colors from "../../../Misc/colors";
import Lottie from "lottie-react";
import notFound from "../../../Assets/Lottie/not-found.json";
import { useState } from "react";
import Modal from "../Modal";

const MoviesContaier = ({ movies, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [loadingModal, setLoadingModal] = useState(false);

  // conditional styling
  const conditionStyle = {
    justifyContent: loading || !movies ? "center" : "normal",
    paddingTop: loading || !movies ? "100px" : "0",
  };
  const lottieStyle = {
    width: "500px",
    height: "500px",
  };
  const loaderStyle = {
    alignSelf: "center",
    position: loadingModal && "fixed",
    top: loadingModal && "50%",
    left: loadingModal && "50%",
    zIndex: loadingModal && 1050,
  };
  //

  // toggle button function
  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // show detail fucntion
  const detailClicked = (id) => {
    setLoadingModal(true);
    fetch(`https://www.omdbapi.com/?apikey=5aabd46d&i=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDetail(res);
        toggle();
        setLoadingModal(false);
      });
  };

  return (
    <RowMoviesContainer style={conditionStyle}>
      {loadingModal ? (
        <BeatLoader
          color={loadingModal ? colors.light : colors.dark}
          loading={true}
          size={50}
          style={loaderStyle}
        />
      ) : (
        <Modal
          Title={detail.Title}
          Image={detail.Poster}
          Director={detail.Director}
          Actors={detail.Actors}
          Runtime={detail.Runtime}
          Plot={detail.Plot}
          onCloseX={toggle}
          onClose={toggle}
          isOpen={isModalOpen}
        />
      )}

      {!movies ? (
        <Lottie animationData={notFound} loop={true} style={lottieStyle} />
      ) : loading ? (
        <BeatLoader
          color={colors.primary}
          loading={true}
          size={50}
          style={loaderStyle}
        />
      ) : (
        movies?.map((movie) => {
          return (
            <Cards
              key={movie.imdbID}
              Image={movie.Poster}
              Title={movie.Title}
              Year={movie.Year}
              onClick={() => detailClicked(movie.imdbID)}
            />
          );
        })
      )}
    </RowMoviesContainer>
  );
};

export default MoviesContaier;
