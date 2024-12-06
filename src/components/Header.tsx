import { BsFillInfoCircleFill } from "react-icons/bs";
import { MenuItem } from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4">
          <MenuItem title="HOME" address="/">
            {" "}
            <AiFillHome className="sm:hidden text-2xl" />
          </MenuItem>
          <MenuItem title="ABOUT" address="/about">
            <BsFillInfoCircleFill className="sm:hidden text-2xl" />
          </MenuItem>
        </div>
        <div className="flex items-center gap-4">
          <DarkModeSwitch />
          <Link href={"/"} className="flex gap-1 items-center">
            <span className="text-2xl bg-amber-500 font-bold rounded-lg py-1 px-2">
              IMDb
            </span>
            <span className="hidden sm:inline">Clone</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
