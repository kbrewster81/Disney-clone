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
    <div className="flex items-center gap-1 cursor-pointer">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;
