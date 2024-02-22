/* eslint-disable react/prop-types */
import useGetMovieDetail from "../customHooks/useGetMovieDetail";

const VideoBg = ({ id }) => {
  const movieData = useGetMovieDetail(id);

  return (
    <div className="overflow-hidden">
      <iframe
        className="w-screen h-[98vh]"
        src={`https://www.youtube.com/embed/${movieData}?si=n9h2rfjyOSTSoMY2?&autoplay=1&mute=1&controls=0`}
      ></iframe>
    </div>
  );
};

export default VideoBg;
