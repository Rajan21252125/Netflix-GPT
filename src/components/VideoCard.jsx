/* eslint-disable react/prop-types */
import { IMG_URL } from "../utils/constant"

const VideoCard = ({movie}) => {
  return (
    <div className="min-w-40 mr-4 hover:scale-110 cursor-pointer ease-in-out duration-200">
      <img src={IMG_URL+movie} alt="" />
    </div>
  )
}

export default VideoCard
