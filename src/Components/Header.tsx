import logo from "./../assets/images/logo.png";
import profile from "./../assets/images/profile.jpg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div className="flex gap-8 items-center">
          <img src={logo} className="mb-2 w-[80px] md:w-[115px] object-cover" />
          <div className="hidden md:flex gap-8">
            {menu.map((item) => (
              <HeaderItem Name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className="flex md:hidden gap-5">
            {menu.map(
              (item, index) =>
                index < 3 && <HeaderItem Name={""} Icon={item.icon} />
            )}

            <div className="md:hidden" onClick={() => setToggle(!toggle)}>
              <HeaderItem Name={""} Icon={HiDotsVertical} />
              {toggle ? (
                <div className="absolute bg-[#121212] mt-2 ms-4 p-2 border-[1px] border-gray-700 rounded-md">
                  {menu.map(
                    (item, index) =>
                      index > 2 && (
                        <HeaderItem Name={item.name} Icon={item.icon} />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <img src={profile} className=" me-2 mb-2 w-[40px] rounded-full" alt="" />
      </div>
    </>
  );
};

export default Header;
