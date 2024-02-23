import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setTopRated } from "../store/nowPlayingMovieSlice";

const useGetTopRated = () => {
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const reponse = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",options)
            const data = await reponse.json()
            dispatch(setTopRated(data?.results))
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        fetchData()
    }, []);
}

export default useGetTopRated;