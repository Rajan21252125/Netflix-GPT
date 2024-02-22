import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/fireBaseSetup";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;
        dispatch(login({ displayName, email, uid }));
        navigate("/browse");
      } else {
        dispatch(logout());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-48"
      />
      {userName && (
        <div className="flex space-x-2 mr-6 items-center">
          <img
            src="https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe2o8umEtkTqWBI6ibhXaPZ2VSqaWHMQOHXlO4HH-N3nkteI0pVm8bVTTBX_KbQVRtd9-etbS-ym3OszFzqPWRClS4qPUSw.png?r=02d"
            alt="logo"
            className="w-9"
          />
          <p className="text-white">Welcome back, {userName?.displayName}</p>
          <button
            className="text-white px-4 py-2 bg-red-600 rounded-md"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
