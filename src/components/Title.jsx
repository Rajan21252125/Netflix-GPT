import { useState } from "react";

/* eslint-disable react/prop-types */
const Title = ({title,desc}) => {
  const [show, setShow] = useState(true);
  const shortDesc = desc?.length > 250 ? desc?.substring(0, 250) + "..." : desc;
  return (
    <div className="absolute top-72 p-14 ml-4 w-1/2">
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="text-white text-lg w-2/3 mt-2">{show  ? shortDesc : ""}</p>
      <div className="mt-6">
        <button className="py-3 px-6 bg-white/50 rounded-lg text-xl font-semibold ">▶️ Play</button>
        <button className="py-3 px-6 bg-gray-200 text-black rounded-lg text-xl font-semibold mx-2" onClick={() => setShow(!show)}>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default Title
