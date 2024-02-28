
import { produce } from "immer";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/core/Header";
import SideMenu from './../components/core/SideMenu';

const origMenus = [
  {
    name: "Dashboard",
    icon: "bi-grid",
  },
  {
    name: "Vendors",
    icon: "bi-box-fill",
    subMenus: [
      {
        name: "List",
        icon: "bi-journal-text",
      },
      {
        name: "Create",
        icon: "bi-layout-text-window-reverse",
      },
    ],
  },
];

const Layout = () => {
  const [menus, setMenus] = useState([...origMenus]);

  const onMenuClick = (index) => {
    setMenus(
      produce((draft) => {
        if (draft[index].subMenus && draft[index].subMenus.length > 0) {
          draft[index]._showSubMenu = !draft[index]._showSubMenu;
          return;
        }
      })
    );
  };

  const onMenuIconClick = () => {
    if (document.body.classList.contains("toggle-sidebar")) {
      document.body.classList.remove("toggle-sidebar");
    } else {
      document.body.classList.add("toggle-sidebar");
    }
  };

  return (
    <>
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <Header />
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
          <SideMenu /> 
          <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
