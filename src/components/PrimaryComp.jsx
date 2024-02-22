/* eslint-disable react/prop-types */
import VideoBg from "./VideoBg";
import Title from "./Title";

const PrimaryComp = ({movies}) => {
  if (!movies) return;
  const mainMovie = movies[0];

  return (
    <div className="relative">
      <VideoBg id={mainMovie?.id}/>
        <Title title={mainMovie?.title} desc={mainMovie?.overview}/>
    </div>
  )
}

export default PrimaryComp
