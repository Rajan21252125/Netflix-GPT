import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setNowPlaying } from "../store/nowPlayingMovieSlice";

const useNowPlayingData = () => {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        try {
          const reponse = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options)
          const data = await reponse.json()
          dispatch(setNowPlaying(data.results))
        } catch (error) {
          console.log(error)
        }
      };
    
    
    
      useEffect(() => {
        fetchMovies()
      },[])
};


export default useNowPlayingData;