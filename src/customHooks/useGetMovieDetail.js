import { useEffect, useState } from "react";
import { options } from "../utils/constant";

const useGetMovieDetail = (id) => {
  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const movies = data.results.filter((movie) => movie.type === "Trailer");
          if (movies.length > 0) {
            setMovieId(movies[0].key);
          } else {
            setMovieId(data.results[0].key); // Use the first available video if no trailer is found
          }
        } else {
          console.error("No video data found for the movie");
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  return movieId;
};

export default useGetMovieDetail;
