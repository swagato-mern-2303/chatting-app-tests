import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiFillMessage, AiOutlineBell } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userLoginInfo } from "../slices/userSlice";
import ProfileImgUpload from "./ProfileImgUpload";
import { useState } from "react";

function Sidebar() {
  const userData = useSelector((state) => state.userLoginInfo.userLoginInfo);
  const [showImgPopup, setShowImgPopup] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.removeItem("userLoginInfo");
    dispatch(userLoginInfo(null));
    navigate("/login");
  };
  return (
    <>
      <div className="rounded-[20px] bg-primary-accent">
        <div className="flex min-h-screen flex-col items-center justify-between pb-[48px] pt-[38px]">
          <div className="flex flex-col items-center gap-y-2">
            <div className="overflow-hidden rounded-full">
              <span
                onClick={() => setShowImgPopup(true)}
                className="group relative cursor-pointer before:absolute before:h-full before:w-full before:bg-black before:opacity-0 before:duration-200 before:content-[''] hover:before:opacity-40"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 duration-200 group-hover:opacity-100">
                  <FaCloudUploadAlt color="white" size={40} />
                </span>
                <picture>
                  <img
                    className="w-[100px] rounded-full"
                    src={userData.photoURL}
                    alt="profile image"
                  />
                </picture>
              </span>
            </div>
            <h1 className="font-nunito text-xl font-semibold text-white">
              {userData.displayName}
            </h1>
          </div>
          <ul className="mb-[50px] flex flex-col gap-y-[70px] px-16">
            <li>
              <a className="text-[#BAD1FF]">
                <AiOutlineHome size={46} />
              </a>
            </li>
            <li>
              <a className="text-[#BAD1FF]">
                <AiFillMessage size={46} />
              </a>
            </li>
            <li>
              <a className=" text-[#BAD1FF]">
                <AiOutlineBell size={46} />
              </a>
            </li>
            <li>
              <a className=" text-[#BAD1FF]">
                <BsGear size={46} />
              </a>
            </li>
          </ul>
          <div>
            <button
              className="text-[#a3b6de] duration-200 hover:text-white"
              onClick={handleSignout}
            >
              <RiLogoutBoxRLine size={50} />
            </button>
          </div>
        </div>
      </div>

      {showImgPopup && (
        <div className="absolute z-10 h-full w-full">
          <ProfileImgUpload onShowImgPopup={setShowImgPopup} />
        </div>
      )}
    </>
  );
}

export default Sidebar;
