import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";

function ViewEmployee() {
  const { id } = useParams();

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const result = localStorage.getItem("token");

    const fetchData = async () => {
      const token = `Bearer ${result}`;
      const response = await axios.get(
        `http://localhost:5050/a1/admin/employee/view/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setEmployee(response.data[0]);
    };
    fetchData();
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
                View Employee Details
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
                <li className="breadcrumb-item text-muted">
                  <a
                    href="../../demo1/dist/index.html"
                    className="text-muted text-hover-primary"
                  >
                    Employee
                  </a>
                </li>

                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item">
                  <span className="bullet bg-gray-400 w-5px h-2px" />
                </li>
                {/*begin::Item*/}
                <li className="breadcrumb-item text-muted">Employee List</li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item">
                  <span className="bullet bg-gray-400 w-5px h-2px" />
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item text-muted">View</li>
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
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                          alt="image"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Name*/}
                      <a
                        href="#"
                        className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3"
                      >
                        {employee.employeeName}
                      </a>
                      {/*end::Name*/}
                      {/*begin::Position*/}
                      <div className="mb-9">
                        {/*begin::Badge*/}
                        <div className="badge badge-lg badge-light-primary d-inline">
                          {employee.role}
                        </div>
                        {/*begin::Badge*/}
                      </div>
                      {/*end::Position*/}
                      {/*begin::Info*/}
                      {/*begin::Info heading*/}
                      <div className="fw-bold mb-3">
                        Assigned Tickets
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
                            <span className="w-75px">243</span>
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
                            <span className="w-50px">56</span>
                            <i className="ki-duotone ki-arrow-down fs-3 text-danger">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </div>
                          <div className="fw-semibold text-muted">Solved</div>
                        </div>
                        {/*end::Stats*/}
                        {/*begin::Stats*/}
                        <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                          <div className="fs-4 fw-bold text-gray-700">
                            <span className="w-50px">188</span>
                            <i className="ki-duotone ki-arrow-up fs-3 text-success">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </div>
                          <div className="fw-semibold text-muted">Open</div>
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
                          className="btn btn-sm btn-light-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_update_details"
                        >
                          <UpdateEmployee id={employee._id} />
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
                        <div className="text-gray-600">
                          {employee.employeeId}
                        </div>

                        <div className="fw-bold mt-5">Designation</div>
                        <div className="text-gray-600">
                          <a
                            href="#"
                            className="text-gray-600 text-hover-primary"
                          >
                            {employee.designation}
                          </a>
                        </div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className="fw-bold mt-5">Phone No</div>
                        <div className="text-gray-600">
                          <a
                            href="#"
                            className="text-gray-600 text-hover-primary"
                          >
                            {employee.phoneNo}
                          </a>
                        </div>
                        <div className="fw-bold mt-5">Email</div>
                        <div className="text-gray-600">
                          <a
                            href="#"
                            className="text-gray-600 text-hover-primary"
                          >
                            {employee.email}
                          </a>
                        </div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className="fw-bold mt-5">Address</div>
                        <div className="text-gray-600">{employee.address}</div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className="fw-bold mt-5">Age</div>
                        <div className="text-gray-600">{employee.age}</div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className="fw-bold mt-5">DOB</div>
                        <div className="text-gray-600">
                          {new Date(
                            (employee.dob + "").substring(0, 10)
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </div>

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
                      aria-selected="true"
                      role="tab"
                    >
                      Overview
                    </a>
                  </li>
                  {/*end:::Tab item*/}
                  {/*begin:::Tab item*/}
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link text-active-primary pb-4"
                      data-kt-countup-tabs="true"
                      data-bs-toggle="tab"
                      href="#kt_user_view_overview_security"
                      data-kt-initialized={1}
                      aria-selected="false"
                      tabIndex={-1}
                      role="tab"
                    >
                      Security
                    </a>
                  </li>
                  {/*end:::Tab item*/}
                  {/*begin:::Tab item*/}
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link text-active-primary pb-4"
                      data-bs-toggle="tab"
                      href="#kt_user_view_overview_events_and_logs_tab"
                      aria-selected="false"
                      tabIndex={-1}
                      role="tab"
                    >
                      Events &amp; Logs
                    </a>
                  </li>
                  {/*end:::Tab item*/}
                  {/*begin:::Tab item*/}
                  <li className="nav-item ms-auto">
                    {/*begin::Action menu*/}
                    <a
                      href="#"
                      className="btn btn-primary ps-7"
                      data-kt-menu-trigger="click"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-end"
                    >
                      Actions
                      <i className="ki-duotone ki-down fs-2 me-0" />
                    </a>
                    {/*begin::Menu*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold py-4 w-250px fs-6"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                          Payments
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <a href="#" className="menu-link px-5">
                          Create invoice
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <a href="#" className="menu-link flex-stack px-5">
                          Create payments
                          <span
                            className="ms-2"
                            data-bs-toggle="tooltip"
                            aria-label="Specify a target name for future usage and reference"
                            data-bs-original-title="Specify a target name for future usage and reference"
                            data-kt-initialized={1}
                          >
                            <i className="ki-duotone ki-information fs-7">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-5"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                      >
                        <a href="#" className="menu-link px-5">
                          <span className="menu-title">Subscription</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-5">
                              Apps
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-5">
                              Billing
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-5">
                              Statements
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu separator*/}
                          <div className="separator my-2" />
                          {/*end::Menu separator*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <div className="menu-content px-3">
                              <label className="form-check form-switch form-check-custom form-check-solid">
                                <input
                                  className="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  defaultValue=""
                                  name="notifications"
                                  defaultChecked="checked"
                                  id="kt_user_menu_notifications"
                                />
                                <span
                                  className="form-check-label text-muted fs-6"
                                  htmlFor="kt_user_menu_notifications"
                                >
                                  Notifications
                                </span>
                              </label>
                            </div>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-3" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                          Account
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <a href="#" className="menu-link px-5">
                          Reports
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5 my-1">
                        <a href="#" className="menu-link px-5">
                          Account Settings
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <a href="#" className="menu-link text-danger px-5">
                          Delete customer
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu*/}
                    {/*end::Menu*/}
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
                          <h2 className="mb-1">User's Tasks</h2>
                          <div className="fs-6 fw-semibold text-muted">
                            Total 25 tasks in backlog
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

export default ViewEmployee;
