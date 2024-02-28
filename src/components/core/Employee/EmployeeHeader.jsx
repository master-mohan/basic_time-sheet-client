import { Link } from "react-router-dom";
import { useAuth } from "../../../auth/pages/AuthProvider"; 
import { useState } from "react";

const EmployeeHeader = () => {

  const [showProfile,setShowProfile] = useState(false);

  const onProfile = ()=>{
    setShowProfile(!showProfile);
  }

  const { logout } = useAuth();
  const logOut = (e) => {
    e.preventDefault();
    logout();
    
  };



  return (
    <>
      <div id="kt_app_header" className="app-header">
        <div
          id="kt_app_header_container"
          className="app-container flex-lg-grow-1 d-flex align-items-stretch justify-content-between"
        >
          <div
            className="d-flex align-items-center d-lg-none ms-n2 me-2"
            title="Show sidebar menu"
          >
            <div
              className="btn btn-icon btn-active-color-primary w-35px h-35px"
              id="kt_app_sidebar_mobile_toggle"
            >
              <i className="ki-duotone ki-abstract-14  fs-1">
                <span className="path1" />
                <span className="path2" />
              </i>
            </div>
            <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
              <a className="d-lg-none" href="/metronic8/react/demo1/dashboard">
                <img
                  alt="Logo"
                  src="media/logos/default-small.svg"
                  className="h-30px"
                />
              </a>
            </div>
          </div>
          <div
            id="kt_app_header_wrapper"
            className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
          >
            <div
              className="app-header-menu app-header-mobile-drawer align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="app-header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="225px"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_app_header_menu_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
              data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
            >
              {/* <div
                className=" menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0 "
                id="kt_app_header_menu"
                data-kt-menu="true"
              >
                <div className="menu-item me-lg-1">
                  <Link to={'/employee/list'}
                    className="menu-link py-3 active menu-here"
                  >
                    <span className="menu-title">Employee List</span>
                  </Link>
                </div>
                <div className="menu-item me-lg-1">
                <Link to={'/project/list'}
                    className="menu-link py-3 active menu-here"
                  >
                    <span className="menu-title">Project List</span>
                  </Link>
                </div>
                <div className="menu-item me-lg-1">
                <Link to={'/employee/tasks'}
                    className="menu-link py-3 active menu-here"
                  >
                    <span className="menu-title">Employee Tasks</span>
                  </Link>
                </div>
                <div
                  className="menu-item menu-lg-down-accordion me-lg-1"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">Crafted</span>
                  </span>
                  <div
                    className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                    data-kt-menu-dismiss="true"
                  >
                    <div
                      className="menu-item menu-lg-down-accordion me-lg-1"
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          <i className="bi fs-3 bi-archive" />
                        </span>
                        <span className="menu-title">Pages</span>
                        <span className="menu-arrow" />
                      </span>
                      <div
                        className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                        data-kt-menu-dismiss="true"
                      >
                        <div
                          className="menu-item menu-lg-down-accordion me-lg-1"
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Profile</span>
                            <span className="menu-arrow" />
                          </span>
                          <div
                            className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                            data-kt-menu-dismiss="true"
                          >
                            <div className="menu-item me-lg-1">
                              <a
                                className="menu-link py-3"
                                href="/metronic8/react/demo1/crafted/pages/profile/overview"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Overview</span>
                              </a>
                            </div>
                            <div className="menu-item me-lg-1">
                              <a
                                className="menu-link py-3"
                                href="/metronic8/react/demo1/crafted/pages/profile/projects"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Projects</span>
                              </a>
                            </div>
                            <div className="menu-item me-lg-1">
                              <a
                                className="menu-link py-3"
                                href="/metronic8/react/demo1/crafted/pages/profile/campaigns"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Campaigns</span>
                              </a>
                            </div>
                            <div className="menu-item me-lg-1">
                              <a
                                className="menu-link py-3"
                                href="/metronic8/react/demo1/crafted/pages/profile/documents"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Documents</span>
                              </a>
                            </div>
                            <div className="menu-item me-lg-1">
                              <a
                                className="menu-link py-3"
                                href="/metronic8/react/demo1/crafted/pages/profile/connections"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Connections</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="menu-item menu-lg-down-accordion me-lg-1"
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Wizards</span>
                            <span className="menu-arrow" />
                          </span>
                          <div
                            className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                            data-kt-menu-dismiss="true"
                          >
                            <div className="menu-item me-lg-1">
                              <a
                                className="menu-link py-3"
                                href="/metronic8/react/demo1/crafted/pages/wizards/horizontal"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Horizontal</span>
                              </a>
                            </div>
                            <div className="menu-item me-lg-1">
                              <a
                                className="menu-link py-3"
                                href="/metronic8/react/demo1/crafted/pages/wizards/vertical"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Vertical</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="menu-item menu-lg-down-accordion me-lg-1"
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          <i className="bi fs-3 bi-person" />
                        </span>
                        <span className="menu-title">Accounts</span>
                        <span className="menu-arrow" />
                      </span>
                      <div
                        className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                        data-kt-menu-dismiss="true"
                      >
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/crafted/account/overview"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Overview</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/crafted/account/settings"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Settings</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="menu-item menu-lg-down-accordion me-lg-1"
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          <i className="bi fs-3 bi-sticky" />
                        </span>
                        <span className="menu-title">Errors</span>
                        <span className="menu-arrow" />
                      </span>
                      <div
                        className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                        data-kt-menu-dismiss="true"
                      >
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/error/404"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Error 404</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/error/500"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Error 500</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="menu-item menu-lg-down-accordion me-lg-1"
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          <i className="bi fs-3 bi-layers" />
                        </span>
                        <span className="menu-title">Widgets</span>
                        <span className="menu-arrow" />
                      </span>
                      <div
                        className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                        data-kt-menu-dismiss="true"
                      >
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/crafted/widgets/lists"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Lists</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/crafted/widgets/statistics"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Statistics</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/crafted/widgets/charts"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Charts</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/crafted/widgets/mixed"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Mixed</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/crafted/widgets/tables"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tables</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/crafted/widgets/feeds"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Feeds</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="menu-item menu-lg-down-accordion me-lg-1"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">Apps</span>
                  </span>
                  <div
                    className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                    data-kt-menu-dismiss="true"
                  >
                    <div
                      className="menu-item menu-lg-down-accordion me-lg-1"
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          <i className="ki-duotone ki-message-text-2 fs-2">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>
                        <span className="menu-title">Chat</span>
                        <span className="menu-arrow" />
                      </span>
                      <div
                        className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
                        data-kt-menu-dismiss="true"
                      >
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/apps/chat/private-chat"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Private Chat</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/apps/chat/group-chat"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Group Chart</span>
                          </a>
                        </div>
                        <div className="menu-item me-lg-1">
                          <a
                            className="menu-link py-3"
                            href="/metronic8/react/demo1/apps/chat/drawer-chat"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Drawer Chart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item me-lg-1">
                      <a
                        className="menu-link py-3"
                        href="/metronic8/react/demo1/apps/user-management/users"
                      >
                        <span className="menu-icon">
                          <i className="ki-duotone ki-abstract-28 fs-2">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </span>
                        <span className="menu-title">User management</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="menu-item menu-lg-down-accordion me-lg-1"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">Mega menu</span>
                  </span>
                  <div
                    className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-850px p-5 p-lg-5"
                    data-kt-menu-dismiss="true"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                              Layouts
                            </h4>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">
                                  Light Sidebar
                                </span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">Dark Sidebar</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">Light Header</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">Dark Header</span>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-3">
                            <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                              Toolbars
                            </h4>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">Classic</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">SaaS</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">Accounting</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">Extended</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a className="menu-link">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                                </span>
                                <span className="menu-title">Reports</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="separator separator-dashed mx-lg-5 mt-2 mb-6" />
                        <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mb-5 mb-lg-0 mx-lg-5">
                          <div className="d-flex flex-column me-5">
                            <div className="fs-6 fw-bold text-gray-800">
                              Layout Builder
                            </div>
                            <div className="fs-7 fw-semibold text-muted">
                              Customize view
                            </div>
                          </div>
                          <a
                            className="btn btn-sm btn-primary fw-bold"
                            href="/metronic8/react/demo1/builder"
                          >
                            Try Builder
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3 py-lg-3 pe-lg-8 d-flex align-items-center">
                        <img
                          src="media/stock/900x600/45.jpg"
                          className="rounded mw-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="app-navbar flex-shrink-0">
              <div className="app-navbar-item align-items-stretch ms-1 ms-md-4">
                <div
                  id="kt_header_search"
                  className="d-flex align-items-stretch"
                  data-kt-search-keypress="true"
                  data-kt-search-min-length={2}
                  data-kt-search-enter="enter"
                  data-kt-search-layout="menu"
                  data-kt-menu-trigger="auto"
                  data-kt-menu-overflow="false"
                  data-kt-menu-permanent="true"
                  data-kt-menu-placement="bottom-end"
                >
                  <div
                    className="d-flex align-items-center"
                    data-kt-search-element="toggle"
                    id="kt_header_search_toggle"
                  >
                    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px">
                      <i className="ki-duotone ki-magnifier fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                  </div>
                  <div
                    data-kt-search-element="content"
                    className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px"
                  >
                    <div className="" data-kt-search-element="wrapper">
                      <form
                        data-kt-search-element="form"
                        className="w-100 position-relative mb-3"
                        autoComplete="off"
                      >
                        <i className="ki-duotone ki-magnifier fs-2 text-lg-1 text-gray-500 position-absolute top-50 translate-middle-y ms-0">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        <input
                          type="text"
                          className="form-control form-control-flush ps-10"
                          name="search"
                          placeholder="Search..."
                          data-kt-search-element="input"
                        />
                        <span
                          className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
                          data-kt-search-element="spinner"
                        >
                          <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
                        </span>
                        <span
                          className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
                          data-kt-search-element="clear"
                        >
                          <i className="ki-duotone ki-cross fs-2 text-lg-1 me-0">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </span>
                        <div
                          className="position-absolute top-50 end-0 translate-middle-y"
                          data-kt-search-element="toolbar"
                        >
                          <div
                            data-kt-search-element="preferences-show"
                            className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1"
                            data-bs-toggle="tooltip"
                            title="Show search preferences"
                          >
                            <i className="ki-duotone ki-setting-2 fs-1">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </div>
                          <div
                            data-kt-search-element="advanced-options-form-show"
                            className="btn btn-icon w-20px btn-sm btn-active-color-primary"
                            data-bs-toggle="tooltip"
                            title="Show more search options"
                          >
                            <i className="ki-duotone ki-down fs-2" />
                          </div>
                        </div>
                      </form>
                      <div data-kt-search-element="results" className="d-none">
                        <div className="scroll-y mh-200px mh-lg-350px">
                          <h3
                            className="fs-5 text-muted m-0 pb-5"
                            data-kt-search-element="category-title"
                          >
                            Users
                          </h3>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <img src="media/avatars/300-6.jpg" alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">Karina Clark</span>
                              <span className="fs-7 fw-bold text-muted">
                                Marketing Manager
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <img src="media/avatars/300-2.jpg" alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">Olivia Bold</span>
                              <span className="fs-7 fw-bold text-muted">
                                Software Engineer
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <img src="media/avatars/300-9.jpg" alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">Ana Clark</span>
                              <span className="fs-7 fw-bold text-muted">
                                UI/UX Designer
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <img src="media/avatars/300-14.jpg" alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">Nick Pitola</span>
                              <span className="fs-7 fw-bold text-muted">
                                Art Director
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <img src="media/avatars/300-11.jpg" alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">
                                Edward Kulnic
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                System Administrator
                              </span>
                            </div>
                          </a>
                          <h3
                            className="fs-5 text-muted m-0 pt-5 pb-5"
                            data-kt-search-element="category-title"
                          >
                            Customers
                          </h3>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img
                                  className="w-20px h-20px"
                                  src="media/svg/brand-logos/volicity-9.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">
                                Company Rbranding
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                UI Design
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img
                                  className="w-20px h-20px"
                                  src="media/svg/brand-logos/tvit.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">
                                Company Re-branding
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                Web Development
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img
                                  className="w-20px h-20px"
                                  src="media/svg/misc/infography.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">
                                Business Analytics App
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                Administration
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img
                                  className="w-20px h-20px"
                                  src="media/svg/brand-logos/leaf.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">
                                EcoLeaf App Launch
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                Marketing
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img
                                  className="w-20px h-20px"
                                  src="media/svg/brand-logos/tower.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                            <div className="d-flex flex-column justify-content-start fw-bold">
                              <span className="fs-6 fw-bold">
                                Tower Group Website
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                Google Adwords
                              </span>
                            </div>
                          </a>
                          <h3
                            className="fs-5 text-muted m-0 pt-5 pb-5"
                            data-kt-search-element="category-title"
                          >
                            Projects
                          </h3>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-document fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-bold">
                                Si-Fi Project by AU Themes
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                #45670
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-bold">
                                Shopix Mobile App Planning
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                #45690
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-bold">
                                Finance Monitoring SAAS Discussion
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                #21090
                              </span>
                            </div>
                          </a>
                          <a
                            href="/#"
                            className="d-flex text-dark text-hover-primary align-items-center mb-5"
                          >
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-bold">
                                Dashboard Analitics Launch
                              </span>
                              <span className="fs-7 fw-bold text-muted">
                                #34560
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="mb-4" data-kt-search-element="main">
                        <div className="d-flex flex-stack fw-bold mb-4">
                          <span className="text-muted fs-6 me-2">
                            Recently Searched:
                          </span>
                        </div>
                        <div className="scroll-y mh-200px mh-lg-325px">
                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-phone fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <a
                                href="/#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                BoomApp by Keenthemes
                              </a>
                              <span className="fs-7 text-muted fw-bold">
                                #45789
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <a
                                href="/#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                "Kept API Project Meeting
                              </a>
                              <span className="fs-7 text-muted fw-bold">
                                #84050
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <a
                                href="/#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                "KPI Monitoring App Launch
                              </a>
                              <span className="fs-7 text-muted fw-bold">
                                #84250
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart-simple-3 fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <a
                                href="/#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Project Reference FAQ
                              </a>
                              <span className="fs-7 text-muted fw-bold">
                                #67945
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-sms fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <a
                                href="/#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                "FitPro App Development
                              </a>
                              <span className="fs-7 text-muted fw-bold">
                                #84250
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-bank fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <a
                                href="/#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Shopix Mobile App
                              </a>
                              <span className="fs-7 text-muted fw-bold">
                                #45690
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-5">
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart-simple-3 fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <a
                                href="/#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                "Landing UI Design" Launch
                              </a>
                              <span className="fs-7 text-muted fw-bold">
                                #24005
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-kt-search-element="empty"
                        className="text-center d-none"
                      >
                        <div className="pt-10 pb-10">
                          <i className="ki-duotone ki-search-list fs-4x opacity-50">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </div>
                        <div className="pb-15 fw-bold">
                          <h3 className="text-gray-600 fs-5 mb-2">
                            No result found
                          </h3>
                          <div className="text-muted fs-7">
                            Please try again with a different query
                          </div>
                        </div>
                      </div>
                    </div>
                    <form className="pt-1 d-none">
                      <h3 className="fw-bold text-dark mb-7">
                        Advanced Search
                      </h3>
                      <div className="mb-5">
                        <input
                          type="text"
                          className="form-control form-control-sm form-control-solid"
                          placeholder="Contains the word"
                          name="query"
                        />
                      </div>
                      <div className="mb-5">
                        <div className="nav-group nav-group-fluid">
                          <label>
                            <input
                              type="radio"
                              className="btn-check"
                              name="type"
                              defaultValue="has"
                              defaultChecked=""
                            />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                              All
                            </span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              className="btn-check"
                              name="type"
                              defaultValue="users"
                            />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                              Users
                            </span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              className="btn-check"
                              name="type"
                              defaultValue="orders"
                            />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                              Orders
                            </span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              className="btn-check"
                              name="type"
                              defaultValue="projects"
                            />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                              Projects
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="mb-5">
                        <input
                          type="text"
                          name="assignedto"
                          className="form-control form-control-sm form-control-solid"
                          placeholder="Assigned to"
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          type="text"
                          name="collaborators"
                          className="form-control form-control-sm form-control-solid"
                          placeholder="Collaborators"
                        />
                      </div>
                      <div className="mb-5">
                        <div className="nav-group nav-group-fluid">
                          <label>
                            <input
                              type="radio"
                              className="btn-check"
                              name="attachment"
                              defaultValue="has"
                              defaultChecked=""
                            />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                              Has attachment
                            </span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              className="btn-check"
                              name="attachment"
                              defaultValue="any"
                            />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                              Any
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="mb-5">
                        <select
                          name="timezone"
                          aria-label="Select a Timezone"
                          data-control="select2"
                          data-placeholder="date_period"
                          className="form-select form-select-sm form-select-solid"
                        >
                          <option value="next">Within the next</option>
                          <option value="last">Within the last</option>
                          <option value="between">Between</option>
                          <option value="on">On</option>
                        </select>
                      </div>
                      <div className="row mb-8">
                        <div className="col-6">
                          <input
                            type="number"
                            name="date_number"
                            className="form-control form-control-sm form-control-solid"
                            placeholder="Lenght"
                          />
                        </div>
                        <div className="col-6">
                          <select
                            name="date_typer"
                            aria-label="Select a Timezone"
                            data-control="select2"
                            data-placeholder="Period"
                            className="form-select form-select-sm form-select-solid"
                          >
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                            <option value="years">Years</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2">
                          Cancel
                        </button>
                        <a
                          href="/#"
                          className="btn btn-sm fw-bolder btn-primary"
                          data-kt-search-element="advanced-options-form-search"
                        >
                          Search
                        </a>
                      </div>
                    </form>
                    <form className="pt-1 d-none">
                      <h3 className="fw-bold text-dark mb-7">
                        Search Preferences
                      </h3>
                      <div className="pb-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                            Projects
                          </span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue={1}
                            defaultChecked=""
                          />
                        </label>
                      </div>
                      <div className="py-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                            Targets
                          </span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue={1}
                            defaultChecked=""
                          />
                        </label>
                      </div>
                      <div className="py-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                            Affiliate Programs
                          </span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue={1}
                          />
                        </label>
                      </div>
                      <div className="py-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                            Referrals
                          </span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue={1}
                            defaultChecked=""
                          />
                        </label>
                      </div>
                      <div className="py-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                            Users
                          </span>
                          <input className="form-check-input" type="checkbox" />
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-7">
                        <button className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2">
                          Cancel
                        </button>
                        <button className="btn btn-sm fw-bolder btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="app-navbar-item ms-1 ms-md-4">
                <div
                  id="kt_activities_toggle"
                  className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
                >
                  <i className="ki-duotone ki-chart-simple fs-2">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                  </i>
                </div>
              </div>
              <div className="app-navbar-item ms-1 ms-md-4">
                <div
                  data-kt-menu-trigger="{default: 'click'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                  className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
                >
                  <i className="ki-duotone ki-element-plus fs-2">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                  </i>
                </div>
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
                  data-kt-menu="true"
                >
                  <div
                    className="d-flex flex-column bgi-no-repeat rounded-top"
                    style={{
                      backgroundImage: 'url("media/misc/menu-header-bg.jpg")',
                    }}
                  >
                    <h3 className="text-white fw-bold px-9 mt-10 mb-6">
                      Notifications{" "}
                      <span className="fs-8 opacity-75 ps-3">24 reports</span>
                    </h3>
                    <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_1"
                        >
                          Alerts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_2"
                        >
                          Updates
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_3"
                        >
                          Logs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade"
                      id="kt_topbar_notifications_1"
                      role="tabpanel"
                    >
                      <div className="scroll-y mh-325px my-5 px-8">
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-primary">
                                {" "}
                                <i className="ki-duotone ki-technology-2 fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                              >
                                Project Alice
                              </a>
                              <div className="text-gray-400 fs-7">
                                Phase 1 development
                              </div>
                            </div>
                          </div>
                          <span className="badge badge-light fs-8">1 hr</span>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-danger">
                                {" "}
                                <i className="ki-duotone ki-information-5 fs-2 text-danger">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </div>
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                              >
                                HR Confidential
                              </a>
                              <div className="text-gray-400 fs-7">
                                Confidential staff documents
                              </div>
                            </div>
                          </div>
                          <span className="badge badge-light fs-8">2 hrs</span>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-warning">
                                {" "}
                                <i className="ki-duotone ki-map001 fs-2 text-warning">
                                  <span className="path1" />
                                </i>
                              </span>
                            </div>
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                              >
                                Company HR
                              </a>
                              <div className="text-gray-400 fs-7">
                                Corporeate staff profiles
                              </div>
                            </div>
                          </div>
                          <span className="badge badge-light fs-8">5 hrs</span>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-success">
                                {" "}
                                <i className="ki-duotone ki-cloud-change fs-2 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </div>
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                              >
                                Project Red
                              </a>
                              <div className="text-gray-400 fs-7">
                                New frontend admin theme
                              </div>
                            </div>
                          </div>
                          <span className="badge badge-light fs-8">2 days</span>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-primary">
                                {" "}
                                <i className="ki-duotone ki-compass fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                              >
                                Project Breafing
                              </a>
                              <div className="text-gray-400 fs-7">
                                Product launch status update
                              </div>
                            </div>
                          </div>
                          <span className="badge badge-light fs-8">21 Jan</span>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-info">
                                {" "}
                                <i className="ki-duotone ki-graph-3 fs-2 text-info">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                              >
                                Banner Assets
                              </a>
                              <div className="text-gray-400 fs-7">
                                Collection of banner images
                              </div>
                            </div>
                          </div>
                          <span className="badge badge-light fs-8">21 Jan</span>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-warning">
                                {" "}
                                <i className="ki-duotone ki-color-swatch fs-2 text-warning">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                  <span className="path5" />
                                  <span className="path6" />
                                  <span className="path7" />
                                  <span className="path8" />
                                  <span className="path9" />
                                  <span className="path10" />
                                  <span className="path11" />
                                  <span className="path12" />
                                  <span className="path13" />
                                  <span className="path14" />
                                  <span className="path15" />
                                  <span className="path16" />
                                  <span className="path17" />
                                  <span className="path18" />
                                  <span className="path19" />
                                  <span className="path20" />
                                  <span className="path21" />
                                </i>
                              </span>
                            </div>
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                              >
                                Icon Assets
                              </a>
                              <div className="text-gray-400 fs-7">
                                Collection of SVG icons
                              </div>
                            </div>
                          </div>
                          <span className="badge badge-light fs-8">
                            20 March
                          </span>
                        </div>
                      </div>
                      <div className="py-3 text-center border-top">
                        <a
                          className="btn btn-color-gray-600 btn-active-color-primary"
                          href="/metronic8/react/demo1/crafted/pages/profile"
                        >
                          View All{" "}
                          <i className="ki-duotone ki-arrow-right fs-5">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </a>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="kt_topbar_notifications_2"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column px-9">
                        <div className="pt-10 pb-0">
                          <h3 className="text-dark text-center fw-bolder">
                            Get Pro Access
                          </h3>
                          <div className="text-center text-gray-600 fw-bold pt-1">
                            Outlines keep you honest. They stoping you from
                            amazing poorly about drive
                          </div>
                          <div className="text-center mt-5 mb-9">
                            <a
                              href="#"
                              className="btn btn-sm btn-primary px-6"
                              data-bs-toggle="modal"
                              data-bs-target="#kt_modal_upgrade_plan"
                            >
                              Upgrade
                            </a>
                          </div>
                        </div>
                        <div className="text-center px-4">
                          <img
                            className="mw-100 mh-200px"
                            alt="metronic"
                            src="media/illustrations/sketchy-1/1.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="kt_topbar_notifications_3"
                      role="tabpanel"
                    >
                      <div className="scroll-y mh-325px my-5 px-8">
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              New order
                            </a>
                            <span className="badge badge-light fs-8">
                              Just now
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              New customer
                            </a>
                            <span className="badge badge-light fs-8">
                              2 hrs
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              Payment process
                            </a>
                            <span className="badge badge-light fs-8">
                              5 hrs
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              Search query
                            </a>
                            <span className="badge badge-light fs-8">
                              2 days
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              API connection
                            </a>
                            <span className="badge badge-light fs-8">
                              1 week
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              Database restore
                            </a>
                            <span className="badge badge-light fs-8">
                              Mar 5
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              System update
                            </a>
                            <span className="badge badge-light fs-8">
                              May 15
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              Server OS update
                            </a>
                            <span className="badge badge-light fs-8">
                              Apr 3
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              API rollback
                            </a>
                            <span className="badge badge-light fs-8">
                              Jun 30
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              Refund process
                            </a>
                            <span className="badge badge-light fs-8">
                              Jul 10
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              Withdrawal process
                            </a>
                            <span className="badge badge-light fs-8">
                              Sep 10
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-bold"
                            >
                              Mail tasks
                            </a>
                            <span className="badge badge-light fs-8">
                              Dec 10
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="py-3 text-center border-top">
                        <a
                          className="btn btn-color-gray-600 btn-active-color-primary"
                          href="/metronic8/react/demo1/crafted/pages/profile"
                        >
                          View All{" "}
                          <i className="ki-duotone ki-arrow-right fs-5">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-navbar-item ms-1 ms-md-4">
                <div
                  className="position-relative btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
                  id="kt_drawer_chat_toggle"
                >
                  <i className="ki-duotone ki-message-text-2 fs-2">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                  </i>
                  <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
                </div>
              </div>
              <div className="app-navbar-item ms-1 ms-md-4">
                <a
                  href="#"
                  className="btn btn-icon  btn-active-light-primary btn-custom"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="ki-duotone ki-night-day theme-dark-hide fs-1">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                    <span className="path6" />
                    <span className="path7" />
                    <span className="path8" />
                    <span className="path9" />
                    <span className="path10" />
                  </i>
                </a>
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
                  data-kt-menu="true"
                >
                  <div className="menu-item px-3 my-0">
                    <a href="#" className="menu-link px-3 py-2 active">
                      <span className="menu-icon" data-kt-element="icon">
                        <i className="ki-duotone ki-night-day fs-1">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                          <span className="path5" />
                          <span className="path6" />
                          <span className="path7" />
                          <span className="path8" />
                          <span className="path9" />
                          <span className="path10" />
                        </i>
                      </span>
                      <span className="menu-title">Light</span>
                    </a>
                  </div>
                  <div className="menu-item px-3 my-0">
                    <a href="#" className="menu-link px-3 py-2">
                      <span className="menu-icon" data-kt-element="icon">
                        <i className="ki-duotone ki-moon fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </span>
                      <span className="menu-title">Dark</span>
                    </a>
                  </div>
                  <div className="menu-item px-3 my-0">
                    <a href="#" className="menu-link px-3 py-2">
                      <span className="menu-icon" data-kt-element="icon">
                        <i className="ki-duotone ki-screen fs-1">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                        </i>
                      </span>
                      <span className="menu-title">System</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="app-navbar-item ms-1 ms-md-4">
              
                {showProfile ?
                <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px show"
                data-kt-menu="true"
                onMouseLeave={onProfile}
                style={{
                  zIndex: 107,
                  position: "fixed",
                  inset: "0px 0px auto auto",
                  margin: 0,
                  transform: "translate(-30px, 0px)"
                }}
                data-popper-placement="bottom-end"
              >
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <div className="menu-content d-flex align-items-center px-3">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-50px me-5">
                      <img alt="Logo" src="/metronic8/demo1/assets/media/avatars/300-3.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Username*/}
                    <div className="d-flex flex-column">
                      <div className="fw-bold d-flex align-items-center fs-5">
                        {localStorage.getItem('employeeName')}{" "}
                        <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                          Employee
                        </span>
                      </div>
                      <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">
                        {" "}
                      </a>
                    </div>
                    {/*end::Username*/}
                  </div>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu separator*/}
                <div className="separator my-2" />
                {/*end::Menu separator*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a
                    href="/#/employee/layout/employee/profile"
                    className="menu-link px-5"
                  >

                    My Profile
                  </a>
                </div>
                {/*end::Menu item*/}
                
                {/*begin::Menu separator*/}
                <div className="separator my-2" />
                {/*end::Menu separator*/}
                
                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a
                    href="/"
                    className="menu-link px-5"
                    onClick={logOut}
                  >
                    Sign Out
                  </a>
                </div>
                {/*end::Menu item*/}
              </div>
              
                : <div
                className="cursor-pointer symbol symbol-35px"
                data-kt-menu-trigger="{default: 'click'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
                onMouseEnter={onProfile}
                onMouseLeave={onProfile}
              >
                
                <img src="media/avatars/300-3.jpg" alt="" />
                
              </div> }
              </div>
              <div
                className="app-navbar-item d-lg-none ms-2 me-n3"
                title="Show header menu"
              >
                <div
                  className="btn btn-icon btn-active-color-primary w-35px h-35px"
                  id="kt_app_header_menu_toggle"
                >
                  <i className="ki-duotone ki-text-align-left fs-2">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeHeader;
