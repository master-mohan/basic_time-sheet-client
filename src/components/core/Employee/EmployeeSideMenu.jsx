import classNames from "classnames";
import { produce } from "immer";
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const defaultMenus = [
  {
    name: "Employee ",
    icon: "columns",
    menus: [ 
      {
        name: "Your Tasks",
        url: "/#/employee/layout/tasks/list", 
      },                               
    ],
  },
  
];

const EmployeeSideMenu = () => {
  const [menus, setMenus] = useState([...defaultMenus]);

  const onMainMenuClick = (index) => {
    setMenus(
      produce((draft) => {
        draft[index]._showSubMenu = !draft[index]._showSubMenu;
      })
    );
  };

  return (
    <>
      <div className="app-sidebar flex-column">
        <div className="app-sidebar-logo px-6">
          <a href="/metronic8/react/demo1/dashboard">
            <img
              alt="Logo"
              src="media/logos/default-dark.svg"
              className="h-25px app-sidebar-logo-default"
            />
            <img
              alt="Logo"
              src="media/logos/default-small.svg"
              className="h-20px app-sidebar-logo-minimize"
            />
          </a>
          <div className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate">
            <i className="ki-duotone ki-black-left-line fs-3 rotate-180 ms-1">
              <span className="path1" />
              <span className="path2" />
            </i>
          </div>
        </div>
        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
          <div className="app-sidebar-wrapper hover-scroll-overlay-y my-5">
            <div className="menu menu-column menu-rounded menu-sub-indention px-3">
              {menus.map((m, i) => (
                <div
                  className={classNames(
                    "menu-item",
                    m.menus?.length ? "menu-accordion" : "",
                    m._showSubMenu ? "show" : ""
                  )}
                  key={i}
                >
                  {/* for menu with submenu */}
                  {m.menus?.length > 0 ? (
                    <div
                      className="menu-link"
                      onClick={() => onMainMenuClick(i)}
                      aria-controls={"menu-" + i}
                      aria-expanded={m._showSubMenu}
                    >
                      <span className="menu-icon">
                        <i
                          className={classNames("bi fs-2", "bi-" + m.icon)}
                        ></i>
                      </span>
                      <span className="menu-title">{m.name}</span>
                      <span className="menu-arrow"></span>
                    </div>
                  ) : (
                    <Link className="menu-link">
                      <span className="menu-icon">
                        <i
                          className={classNames("bi fs-2", "bi-" + m.icon)}
                        ></i>
                      </span>
                      <span className="menu-title">{m.name}</span>
                    </Link>
                  )}

                  {/* submenu list */}
                  {(m.menus || []).map((sm, si) => (
                    <Collapse key={i + "-" + si} in={m._showSubMenu}>
                      <div
                        className="menu-sub menu-sub-accordion"
                        id={"menu-" + i}
                      >
                        <div className="menu-item">
                          <a className="menu-link" href={`${sm.url}`}  >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">{sm.name}</span>
                          </a>
                        </div>
                      </div>
                    </Collapse>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeSideMenu;
