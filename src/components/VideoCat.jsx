/* eslint-disable react/prop-types */
import VideoCard from "./VideoCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const VideoCat = ({ title, movies }) => {
  const slideLeft = () => {
    document.getElementById("scroll").scrollLeft -= 500;
  };
  const slideRight = () => {
    document.getElementById("scroll").scrollLeft += 500;
  };
  return (
    <div className="my-10">
      <h1 className="font-semibold text-2xl text-white my-6">
        Category: {title}
      </h1>
      <div className="relative flex items-center">
        <MdChevronLeft className="text-white bg-white/20 rounded-full h-14 mr-2 opacity-50 cursor-pointer hover:opacity-100" size={100} onClick={slideLeft}/>
        <div id="scroll" className="inline-block overflow-y-hidden overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <div className="flex">
            {movies &&
              movies?.map((movie) => (
                <VideoCard key={movie?.id} movie={movie?.poster_path} />
              ))}
          </div>
        </div>
        <MdChevronRight className="text-white bg-white/20 rounded-full h-14 ml-2 opacity-50 cursor-pointer hover:opacity-100" size={100} onClick={slideRight}/>
      </div>
    </div>
  );
};

export default VideoCat;
