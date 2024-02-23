import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setUpcoming } from "../store/nowPlayingMovieSlice";

const useGetUpcoming = () => {
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const reponse = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",options)
            const data = await reponse.json()
            dispatch(setUpcoming(data?.results))
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        fetchData()
    }, []);
}

export default useGetUpcoming;