import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="absolute w-full bg-gradient-to-b from-black/60 flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-48"
      />
      {user && (
        <div className="flex space-x-2 mr-6 items-center">
          <img src="https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe2o8umEtkTqWBI6ibhXaPZ2VSqaWHMQOHXlO4HH-N3nkteI0pVm8bVTTBX_KbQVRtd9-etbS-ym3OszFzqPWRClS4qPUSw.png?r=02d" alt="logo"  className="w-9"/>
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
