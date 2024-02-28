import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../auth/pages/AuthProvider'; 
import UpdateEmployee from '../../admin/UpdateEmployee';
import { Link } from 'react-router-dom';


function EmployeeProfile() {
const [profile, setProfile] = useState({});
const [task, setTask] = useState([]);
const {logout} = useAuth();


const [rejectedTasks, setRejectedTasks] = useState(0);
const [approvedTasks, setApprovedTasks] = useState(0);

const result = localStorage.getItem('token');
const token = `Bearer ${result}`;

    const fetchData = async () => {
     
    const response = await axios.get(
        "http://localhost:5050/e1/user/employee/profile",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setProfile(response.data[0]);
    };
    
const fetchTasks = async()=>{

    const tasks = await axios.get(
        "http://localhost:5050/e1/user/employee/employeetask",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTask(tasks.data);
      console.log(tasks.data);

      let rejected = 0;
      let approved = 0;

      await task.map((data)=>{
        const status = data.status;
        console.log(status);
          if(status.includes('rejected')){
            rejected++;
            setRejectedTasks(rejected);
          }else if(status.includes('approved')){
            approved++;
            setApprovedTasks(approved);
            console.log(approved);
          }
      })
       
      console.log(rejectedTasks,approvedTasks);
    }
    
useEffect(() => {
    fetchData();
    fetchTasks();
  }, []);


  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
    {/*begin::Content wrapper*/}
    <div className="d-flex flex-column flex-column-fluid">
      {/*begin::Toolbar*/}
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
        {/*begin::Toolbar container*/}
        <div
          id="kt_app_toolbar_container"
          className="app-container container-xxl d-flex flex-stack"
        >
          {/*begin::Page title*/}
          <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
            {/*begin::Title*/}
            <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
              Your Profile
            </h1>
            {/*end::Title*/}
            {/*begin::Breadcrumb*/}
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              {/*begin::Item*/}
              <li className="breadcrumb-item text-muted">
                <a
                  href="../../demo1/dist/index.html"
                  className="text-muted text-hover-primary"
                >
                  Home
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-400 w-5px h-2px" />
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-muted">Employee</li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-400 w-5px h-2px" />
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-muted">profile</li>
              {/*end::Item*/}
            </ul>
            {/*end::Breadcrumb*/}
          </div>
          {/*end::Page title*/}
          
        </div>
        {/*end::Toolbar container*/}
      </div>
      {/*end::Toolbar*/}
      {/*begin::Content*/}
      <div id="kt_app_content" className="app-content flex-column-fluid">
        {/*begin::Content container*/}
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          {/*begin::Layout*/}
          <div className="d-flex flex-column flex-lg-row">
            {/*begin::Sidebar*/}
            <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
              {/*begin::Card*/}
              <div className="card mb-5 mb-xl-8">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Summary*/}
                  {/*begin::User Info*/}
                  <div className="d-flex flex-center flex-column py-5">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-100px symbol-circle mb-7">
                      <img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="image" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a
                      href="#"
                      className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3"
                    >
                      {profile.employeeName}
                    </a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="mb-9">
                      {/*begin::Badge*/}
                      <div className="badge badge-lg badge-light-primary d-inline">
                      {profile.role}
                      </div>
                      {/*begin::Badge*/}
                    </div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    {/*begin::Info heading*/}
                    <div className="fw-bold mb-3">
                      Assigned Tasks
                      <span
                        className="ms-2"
                        ddata-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-content="Number of support tickets assigned, closed and pending this week."
                      >
                        <i className="ki-duotone ki-information fs-7">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>
                    </div>
                    {/*end::Info heading*/}
                    <div className="d-flex flex-wrap flex-center">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                        <div className="fs-4 fw-bold text-gray-700">
                          <span className="w-75px">{task.length}</span>
                          <i className="ki-duotone ki-arrow-up fs-3 text-success">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </div>
                        <div className="fw-semibold text-muted">Total</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                        <div className="fs-4 fw-bold text-gray-700">
                          <span className="w-50px">{rejectedTasks}</span>
                          <i className="ki-duotone ki-arrow-down fs-3 text-danger">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </div>
                        <div className="fw-semibold text-muted">Rejected</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                        <div className="fs-4 fw-bold text-gray-700">
                          <span className="w-50px">{approvedTasks}</span>
                          <i className="ki-duotone ki-arrow-up fs-3 text-success">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </div>
                        <div className="fw-semibold text-muted"> Approved</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::User Info*/}
                  {/*end::Summary*/}
                  {/*begin::Details toggle*/}
                  <div className="d-flex flex-stack fs-4 py-3">
                    <div
                      className="fw-bold rotate collapsible"
                      data-bs-toggle="collapse"
                      href="#kt_user_view_details"
                      role="button"
                      aria-expanded="false"
                      aria-controls="kt_user_view_details"
                    >
                      Details
                      <span className="ms-2 rotate-180">
                        <i className="ki-duotone ki-down fs-3" />
                      </span>
                    </div>
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-original-title="Edit customer details"
                      data-kt-initialized={1}
                    >
                       <a
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                      > <UpdateEmployee id={profile._id}/>
                      </a>

                    </span>
                  </div>
                  {/*end::Details toggle*/}
                  <div className="separator" />
                  {/*begin::Details content*/}
                  <div id="kt_user_view_details" className="collapse show">
                    <div className="pb-5 fs-6">
                      {/*begin::Details item*/}
                      <div className="fw-bold mt-5">Employee ID</div>
                      <div className="text-gray-600">{profile.employeeId}</div>

                      <div className="fw-bold mt-5">Designation</div>
                      <div className="text-gray-600">
                        <a href="#" className="text-gray-600 text-hover-primary">
                          {profile.designation}
                        </a>
                      </div>
                      {/*begin::Details item*/}
                      {/*begin::Details item*/}
                      <div className="fw-bold mt-5">Phone No</div>
                      <div className="text-gray-600">
                        <a href="#" className="text-gray-600 text-hover-primary">
                          {profile.phoneNo}
                        </a>
                      </div>
                      <div className="fw-bold mt-5">Email</div>
                      <div className="text-gray-600">
                        <a href="#" className="text-gray-600 text-hover-primary">
                          {profile.email}
                        </a>
                      </div>
                      {/*begin::Details item*/}
                      {/*begin::Details item*/}
                      <div className="fw-bold mt-5">Address</div>
                      <div className="text-gray-600">
                        {profile.address}
                      </div>
                      {/*begin::Details item*/}
                      {/*begin::Details item*/}
                      <div className="fw-bold mt-5">Age</div>
                      <div className="text-gray-600">{profile.age}</div>
                      {/*begin::Details item*/}
                      {/*begin::Details item*/}
                      <div className="fw-bold mt-5">DOB</div>
                      <div className="text-gray-600">{new Date(
                                  (profile.dob+"").substring(0,10)
                                ).toLocaleDateString('en-GB', {
                                  day: '2-digit',
                                  month: '2-digit',
                                  year: 'numeric',
                                })}</div>

                      {/*begin::Details item*/}

                     
                    </div>
                  </div>
                  {/*end::Details content*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              
            </div>
            {/*end::Sidebar*/}
            {/*begin::Content*/}
            <div className="flex-lg-row-fluid ms-lg-15">
              {/*begin:::Tabs*/}
              <ul
                className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8"
                role="tablist"
              >
                {/*begin:::Tab item*/}
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link text-active-primary pb-4 active"
                    data-bs-toggle="tab"
                    href="#kt_user_view_overview_tab"
                    aria-selected="true"
                    role="tab"
                  >
                    Overview
                  </a>
                </li>
                {/*end:::Tab item*/}
                
                
              </ul>
              {/*end:::Tabs*/}
              {/*begin:::Tab content*/}
              <div className="tab-content" id="myTabContent">
                {/*begin:::Tab pane*/}
                <div
                  className="tab-pane fade show active"
                  id="kt_user_view_overview_tab"
                  role="tabpanel"
                >
                  
                  {/*begin::Tasks*/}
                  <div className="card card-flush mb-6 mb-xl-9">
                    {/*begin::Card header*/}
                    <div className="card-header mt-6">
                      {/*begin::Card title*/}
                      <div className="card-title flex-column">
                        
                        <div className="fs-6 fw-semibold text-muted">
                          
                        </div>
                      </div>
                      {/*end::Card title*/}
                      {/*begin::Card toolbar*/}
                      <div className="card-toolbar">
                        <button
                          type="button"
                          className="btn btn-light-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_add_task"
                        >
                          <i className="ki-duotone ki-add-files fs-3">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                          Add Task
                        </button>
                      </div>
                      {/*end::Card toolbar*/}
                    </div>
                    {/*end::Card header*/}
                   
                  </div>
                  {/*end::Tasks*/}
                </div>
                
                
                {/*end:::Tab pane*/}
              </div>
              {/*end:::Tab content*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Layout*/}
        </div>
        {/*end::Content container*/}
      </div>
      {/*end::Content*/}
    </div>
    {/*end::Content wrapper*/}
   
  </div>
  
  );
}

export default EmployeeProfile