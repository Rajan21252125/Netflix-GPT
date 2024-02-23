import { useSelector } from "react-redux"
import VideoCat from "./VideoCat"
import useGetPopular from "../customHooks/useGetPopular"
import useGetTopRated from "../customHooks/useGetTopRated";
import useGetUpcoming from "../customHooks/useGetUpcoming";

const Videos = () => {
  useGetPopular();
  useGetTopRated();
  useGetUpcoming();
  const movies = useSelector(store => store.nowPlayingMovie?.nowPlaying)
  const popular = useSelector(store => store.nowPlayingMovie?.popular)
  const topRated = useSelector(store => store.nowPlayingMovie?.topRated)
  const upcoming = useSelector(store => store.nowPlayingMovie?.upcoming)
  return (
    <div className="m-10">
      <VideoCat title={"nowPlaying"} movies={movies}/>
      <VideoCat title={"Popular"} movies={popular}/>
      <VideoCat title={"Top Rated"} movies={topRated}/>
      <VideoCat title={"Upcoming"} movies={upcoming}/>
    </div>
  )
}

export default Videos
