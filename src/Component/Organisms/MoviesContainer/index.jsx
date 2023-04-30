import React from "react";
import { RowMoviesContainer } from "../../GlobalStyles";
import Cards from "../../Molecules/Cards";
import BeatLoader from "react-spinners/BeatLoader";
import colors from "../../../Misc/colors";
import Lottie from "lottie-react";
import notFound from "../../../Assets/Lottie/not-found.json";

const MoviesContaier = ({ movies, loading }) => {
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
  };

  return (
    <RowMoviesContainer style={conditionStyle}>
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
            />
          );
        })
      )}
    </RowMoviesContainer>
  );
};

export default MoviesContaier;
