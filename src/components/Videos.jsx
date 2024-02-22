import { useSelector } from "react-redux"
import VideoCat from "./VideoCat"

const Videos = () => {
  const movies = useSelector(store => store.nowPlayingMovie?.nowPlaying)
  return (
    <div className="m-10">
      <VideoCat title={"nowPlaying"} movies={movies}/>
      <VideoCat title={"Popular"} movies={movies}/>
      <VideoCat title={"Top Rated"} movies={movies}/>
      <VideoCat title={"Upcoming"} movies={movies}/>
    </div>
  )
}

export default Videos
