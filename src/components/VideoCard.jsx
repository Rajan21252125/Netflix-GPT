/* eslint-disable react/prop-types */
import { IMG_URL } from "../utils/constant"

const VideoCard = ({movie}) => {
  return (
    <div className="min-w-40 mr-4">
      <img src={IMG_URL+movie} alt="" />
    </div>
  )
}

export default VideoCard
