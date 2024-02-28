import { Navigate, createHashRouter } from "react-router-dom";
import ForgotPassword from './../auth/pages/ForgotPassword';
import Login from './../auth/pages/Login';
import Layout from './../layouts/Layout';
import EmployeeLists from './../components/admin/EmployeeLists';
import ProjectList from './../components/admin/ProjectList';
import EmployeeTasks from './../components/admin/EmployeeTasks';
import ViewEmployee from "../components/admin/ViewEmployee";
import Profile from "../components/admin/Profile";
import { useAuth } from "../auth/pages/AuthProvider";
import TaskLists from "../components/employeee/TaskList";
import EmployeeLayout from "../layouts/EmployeeLayout";
import EmployeeProfile from "../components/core/Employee/EmployeeProfile";
import CreateTask from "../components/employeee/CreateTask";

function Routers(){
  const {isAuthenticated,isAdmin} = useAuth();
const router = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <Login />,
        },
  
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
      ],
    },
    
    {
      path: "layout",
      element: (isAuthenticated && isAdmin) ? <Layout /> : <Navigate to='/'/>,
      children: [
        {
          path: "employee/lists",
          element: <EmployeeLists />,
        },
        {
          path: "project/list",
          element: <ProjectList />,
        },
        {
          path: "employee/tasks",
          element: <EmployeeTasks />,
        },
        {
          path: "employee/view/:id",
          element: <ViewEmployee />,
        },
        {
          path: "employee/profile",
          element:  <Profile />,
        },
        
       
      ],
    },
    {
      path: "employee/layout",
      element: (isAuthenticated && !isAdmin) ? <EmployeeLayout /> : <Navigate to='/'/>,
      children: [ 
        {
          path: "tasks/list",
          element: <TaskLists />,
        },
        {
          path: "employee/profile",
          element:  <EmployeeProfile />,
        },
        {
          path: "tasks/create",
          element:  <CreateTask/>,
        },
      ]

    }
  ]);
  return router;
}
  export default Routers;