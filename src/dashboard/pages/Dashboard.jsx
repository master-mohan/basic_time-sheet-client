import { Outlet } from "react-router-dom";
import EmployeeLists from "../../components/admin/EmployeeLists";
import Header from "../../components/core/Header";
import SideMenu from "../../components/core/SideMenu";

const Dashboard = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <Header />
          <SideMenu /> 
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
