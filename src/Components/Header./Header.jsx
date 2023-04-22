import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { context } from "../../App";
import logo from "../../Images/ZingMP3logo.svg.png";
const Header = () => {
  const { showMenu, setShowMenu } = useContext(context);
  // ! Handel Show Menu In Mobile
  const handelShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="h-20 w-full bg-bg-pr py-4 flex px-4 justify-between md:justify-center items-center ">
      <img src={logo} alt="" className="h-full" />
      <div onClick={handelShowMenu}>
        <IoMenu
          color="#fff"
          fontSize={28}
          className="cursor-pointer md:hidden"
        ></IoMenu>
      </div>
    </div>
  );
};

export default Header;
