import { useState } from "react";
import { Container } from "./Component/GlobalStyles";
import MoviesContaier from "./Component/Organisms/MoviesContainer";
import Navbar from "./Component/Organisms/Navbar";
import { useEffect } from "react";
function App() {
  const [input, setInput] = useState("");
  const [listMovies, setListMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // submit function
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmitButton = (event) => {
    setLoading(true);
    event.preventDefault();
    fetch(`https://www.omdbapi.com/?apikey=5aabd46d&s=${input}`)
      .then((res) => res.json())
      .then((res) => {
        setListMovies(res.Search);
        setInput("");
        setLoading(false);
      });
  };

  // initial render
  useEffect(() => {
    setLoading(true);
    fetch("https://www.omdbapi.com/?apikey=5aabd46d&s=pirates of the caribbean")
      .then((res) => res.json())
      .then((res) => {
        setListMovies(res.Search);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Navbar
        handleSubmit={handleSubmitButton}
        handleChange={handleInputChange}
        myValue={input}
      />
      <MoviesContaier movies={listMovies} loading={loading} />
    </Container>
  );
}

export default App;
