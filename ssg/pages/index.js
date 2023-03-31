import Head from 'next/head'
import Card from "@/components/Card";
import {useEffect, useState} from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch('./db/movies.json')
        .then(response => response.json())
        .then(data => {
            setMovies(data);
            setIsLoading(false);
        });
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
  )
}
