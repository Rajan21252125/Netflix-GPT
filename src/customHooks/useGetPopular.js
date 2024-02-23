import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setPopular } from "../store/nowPlayingMovieSlice";

const useGetPopular = () => {
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const reponse = await fetch("https://api.themoviedb.org/3/movie/popular?&page=1",options)
            const data = await reponse.json()
            dispatch(setPopular(data?.results))
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        fetchData()
    }, []);
}

export default useGetPopular;