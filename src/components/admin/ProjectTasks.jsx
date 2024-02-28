import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "../../styles/costume-style.css";
import { useParams } from "react-router-dom";


function ProjectTasks() {

    const { id } = useParams();
    console.log(id);
    const [task, setTask] = useState([]);
    const create = useRef("");
    const result = localStorage.getItem("token");
    const token = `Bearer ${result}`;
  
    
          const getTasks = async () => {
            try {
            console.log(id);
            await axios.get(
              `http://localhost:5050/p1/admin/project/viewprojecttasks/${id}`,
              {
                headers: {
                  Authorization: token,
                },
              }
            ).then((response)=>setTask(response.data)).catch((error)=>console.log(error))
        } catch (error) {
            console.log(error);
        }
          };
         
      
      
      useEffect(() => {
        getTasks();
    }, [id, token]);

        const createTask = async (event) => {
          event.preventDefault();
          try {
            
          console.log(create.current.value);
          if (create.current.value) {
            const response = await axios.post(
              `http://localhost:5050/p1/admin/project/tasktoproject`,
              {
                projectId: id,
                taskName: create.current.value,
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            ).then((response)=>console.log(response)).catch((error)=>console.log(error))
          }
        } catch (error) {
          console.log(error);
          }
        };
        console.log(task);


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
                   Project List
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
                    <li className="breadcrumb-item text-muted">Project</li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">Project List</li>
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
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card header*/}
                  <div className="card-header border-0 pt-6">
                    {/*begin::Card title*/}
                    <div className="card-title">
                      {/*begin::Search*/}
                      <div className="d-flex align-items-center position-relative my-1">
                        <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        <input
                          ref={search}
                          onChange={onSearch}
                          type="text"
                          data-kt-user-table-filter="search"
                          className="form-control form-control-solid w-250px ps-13"
                          placeholder="Search user"
                        />
                      </div>
                      {/*end::Search*/}
                    </div>
                    {/*begin::Card title*/}
                    {/*begin::Card toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Toolbar*/}
                      <div
                        className="d-flex justify-content-end"
                        data-kt-user-table-toolbar="base"
                      >
                        {/*begin::Filter*/}
                        <button
                          type="button"
                          className="btn btn-light-primary me-3"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                          onMouseEnter={onFilter}
                          onMouseLeave={onFilter}
                        >
                          <i className="ki-duotone ki-filter fs-2">
                            <span className="path1" />
                            <span className="path2" />
                          </i> 
                          {filterDate ? <input ref={date} type="date" id='on-date4564' onChange={onDate} /> : "Filter"}
                          
                        </button>
    
                        {/*end::Filter*/}
    
                        {/*begin::Add user*/}
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_add_user"
                        >
                          <i className="ki-duotone ki-plus fs-2" />
                          Add Project
                        </button>
                        {/*end::Add user*/}
                      </div>
                      {/*end::Toolbar*/}
                    </div>
                    {/*end::Card toolbar*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body py-4">
                    {/*begin::Table*/}
                    <div
                      id="kt_table_users_wrapper"
                      className="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div className="table-responsive">
                        <table
                          className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
                          id="kt_table_users"
                        >
                          <thead>
                            <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                              <th
                                className="w-10px pe-2 sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="
                                  
                                    
                                  
                                "
                                style={{ width: "29.8906px" }}
                              >
                                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    data-kt-check="true"
                                    data-kt-check-target="#kt_table_users .form-check-input"
                                    defaultValue={1}
                                  />
                                </div>
                              </th>
                              <th
                                className="min-w-125px sorting"
                                tabIndex={0}
                                aria-controls="kt_table_users"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="User: activate to sort column ascending"
                                style={{ width: "18.078px" }}
                              >
                                S.No.
                              </th>
                              <th
                                className="min-w-125px sorting"
                                tabIndex={0}
                                aria-controls="kt_table_users"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Role: activate to sort column ascending"
                                style={{ width: "126.828px" }}
                              >
                                PROJECT NAME
                              </th>
                              <th
                                className="min-w-125px sorting"
                                tabIndex={0}
                                aria-controls="kt_table_users"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Last login: activate to sort column ascending"
                                style={{ width: "126.828px" }}
                              >
                                CREATED BY
                              </th>
                              <th
                                className="min-w-125px sorting"
                                tabIndex={0}
                                aria-controls="kt_table_users"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Two-step: activate to sort column ascending"
                                style={{ width: "126.828px" }}
                              >
                                CREATED ON
                              </th>
                              <th
                                className="min-w-125px sorting"
                                tabIndex={0}
                                aria-controls="kt_table_users"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Joined Date: activate to sort column ascending"
                                style={{ width: "16.578px" }}
                              >
                                STATUS
                              </th>
                              <th
                                className="text-end min-w-100px sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Actions"
                                style={{ width: "103.469px" }}
                              >
                                PROJECT TASKS
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-600 fw-semibold">
                          {displayList.length>0 ? displayList.map((data) => {
                              ++count;
                              return (
                                <tr className="odd" key={data._id}>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="1"
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="d-flex flex-column">
                                      <span>{count}</span>
                                    </div>
                                    {/*begin::User details*/}
                                  </td>
                                  <td>{data.projectName}</td>
                                  
                                  <td>{data.createdByName}</td>
                                  <td>
                                    {new Date(
                                      data.createdAt.substring(0, 10)
                                    ).toLocaleDateString('en-GB', {
                                      day: '2-digit',
                                      month: '2-digit',
                                      year: 'numeric',
                                    })}
                                  </td>
                                  {/* <td data-order="2023-05-05T20:43:00+05:30">{data.role}</td> */}
                                  <td data-order="2023-09-11T10:59:16+05:30">
                                    <div className="badge badge-light fw-bold">
                                      {data.status === "active" ? (
                                        <span class="badge badge-light-success">
                                          Active
                                        </span>
                                      ) : (
                                        <span class="badge badge-light-danger">
                                          Inactive
                                        </span>
                                      )}
                                    </div>
                                  </td>
                                  <td className="text-end">
                                    <Link
                                      // to={`/projecttasks/${data._id}`}
                                      id="view12"
                                    >
                                      View
                                    </Link>
                                  </td>
                                </tr>
                              );
                            }) : <td colspan="7"><div class="d-flex text-center w-100 align-content-center justify-content-center">No matching records found</div></td>}
                          </tbody>
                        </table>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start" />
                        <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="kt_table_users_paginate"
                          >
                             <ul className="pagination">
                          
                          <li className="page-item previous">
                            <button className="page-link page-text me-5" style={{ cursor: "pointer" }} onClick={prevPage} disabled={currentpage===1}>
                              Previous
                            </button>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" style={{ cursor: "pointer" }} >
                              {currentpage}
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" style={{ cursor: "pointer" }} data-pagevalue={nextPageNo+1} onClick={setPage}>
                              {(nextPageNo+1)<=lastPage ? nextPageNo+1 : ""}
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" style={{ cursor: "pointer" }}  data-pagevalue={nextPageNo + 2} onClick={setPage}>
                            {(nextPageNo+2)<=lastPage ? nextPageNo+2 : ""}
                            </a>
                          </li>
                          <li className="page-item next">
                            <a className="page-link page-text" style={{ cursor: "pointer" }} onClick={nextPage}>
                            {currentpage <lastPage ? "Next" : ""}
                            </a>
                          </li>
        
                        </ul>
    
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end::Table*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
        </div>
      );
}

export default ProjectTasks;