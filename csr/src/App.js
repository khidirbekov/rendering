import {useEffect, useState} from "react";
import Card from "./Card";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch('./db/movies.json')
        .then(response => response.json())
        .then(data => {
            setMovies(data);
            setIsLoading(false);
        })
  }, [])


  return (
    <>
      <section>
        <h1>Киноафиша</h1>
        <p>
          Киноафиша – это наиболее полная информация о кино и кинотеатрах.
          <br />
          У нас вы найдёте подробные сведения о фильмах, новостях мира кино и кинозвёзд
        </p>
          <div className="movies">
              { isLoading ?
                  "Загрузка..."
                  : movies.map(movie =>
                      <Card key={movie.title} url={movie.url} title={movie.title} rating={movie.rating} />)
              }
          </div>
      </section>
    </>
  );
}

export default App;
