import { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const searchMovie = async (searchText) => {
    setIsLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_TOKEN}&query=${searchText}`
      )
      .then((res) =>
        setTimeout(() => {
          const data = res.data.results;
          setMovies(data);
          setIsLoading(false);
        }, 800)
      );
  };

  return (
    <>
      <div className="inputArea">
        <h1 className="hero is-dark" data-aos="flip-left">
          MOOVIFY
        </h1>
        <p>映画を検索しましょう！</p>
        <input
          placeholder="映画名で検索"
          type="text"
          value={searchText}
          onChange={handleChange}
        />
        <button className="button" onClick={() => searchMovie(searchText)}>
          SEARCH
        </button>
      </div>
      <div className="movieArea">
        <div data-aos="fade-up">
          <h1 className="hero is-dark">検索結果</h1>
          {isLoading === true && <p>Loading...</p>}

          {movies.map((item) => (
            <div className="list" key="item" data-aos="fade-up-right">
              <h1>{item.title}</h1>
              <img
                src={
                  "https://www.themoviedb.org/t/p/w94_and_h141_bestv2" +
                  `${item.poster_path}`
                }
                alt="映画ポスター"
              />
              <h4>{item.release_date.slice(0, 4)}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
