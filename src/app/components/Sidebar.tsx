"use client";

import { useState } from "react";
import { Navlink } from "./Navlink";

type Menu = {
  name: string;
  link: string;
  icon: string;
};

export const Sidebar = () => {
  const [menuList, setMenuList] = useState<Menu[]>([
    { name: "Home", link: "/", icon: "home" },
    { name: "Search", link: "/search", icon: "search" },
    { name: "Notification", link: "/notification", icon: "notification" },
    { name: "Account", link: "/account", icon: "person" },
  ]);

  return (
    <nav className="h-full w-full bg-slate-400 ">
      <ul className="text-3xl pl-6 pt-4">
        {menuList.map((menu, index) => (
          <li key={index}>
            <Navlink
              name={menu.name}
              link={menu.link}
              icon={menu.icon}
            ></Navlink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
