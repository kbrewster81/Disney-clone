import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Header from "./Header";

function HeaderItem({ name, Icon }) {
  return (
    <div className="flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb=2">
      <Icon />
      <h2 className=''>{name}</h2>
    </div>
  );
}

export default HeaderItem;
