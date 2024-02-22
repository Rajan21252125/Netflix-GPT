/* eslint-disable react/prop-types */
import VideoCard from "./VideoCard"

const VideoCat = ({title,movies}) => {
  return (
    <div className="my-10">
      <h1 className="font-semibold text-2xl text-white my-6">Category: {title}</h1>
      <div className="flex overflow-x-scroll">
      <div className="flex">
        {movies && movies?.map((movie) => (
          <VideoCard key={movie?.id} movie={movie?.poster_path} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default VideoCat
