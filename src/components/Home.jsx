import { useSelector } from "react-redux";
import useNowPlayingData from "../customHooks/useNowPlayingData";
import Header from "./Header";
import PrimaryComp from "./PrimaryComp";
import SecondaryComp from "./SecondaryComp";
import Footer from "./Footer";

const Home = () => {
  useNowPlayingData();
  const nowPlaying = useSelector((state) => state?.nowPlayingMovie?.nowPlaying);
  return (
    <div>
        <Header />
        <div className="bg-black pb-4">
          <PrimaryComp movies={nowPlaying}/>
          <SecondaryComp />
        </div>
        <Footer />
    </div>
  )
}

export default Home
