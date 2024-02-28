import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Datefilter from "./Datefilter";
import Header from "../core/Header";
import SideMenu from "../core/SideMenu";
import ProjectTasks from "./ProjectTasks";
import Select from 'react-select';
import "../../styles/costume-style.css";
import url from "../../services/urlservices";
import AddProject from "./AddProject";

function ProjectList() {
  const date = useRef("");
  const [projects, setProjects] = useState([]);
  const [filterDate,setFilterDate] = useState(false);
  const [displayList,setDisplayList] = useState([]);
  const search = useRef("");
  const [searchItem, setSearchItem] = useState('');

  const result = localStorage.getItem("token");
  const token = `Bearer ${result}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        url.projectLists,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setProjects(response.data);
    };
    fetchData();
  }, []);

  const updateStatus = async (id, name, event) => {
    console.log("Update status function called");
    event.preventDefault();
    try {
      const response = await axios
        .put(
          `http://localhost:5050/p1/admin/project/status/${id}`,
          {
            projectName: name,
            status: event.target.value,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => console.log(response.data.message))
        .catch((error) => console.log(error.response.data.message));

      const updates = projects.map((data) => {
        if (data._id === id && event.target.value) {
          data.status = event.target.value;
        }
        return data;
      });
      setProjects(updates);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };


  //begin pagination
  const [currentpage, setCureentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentpage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayAble = projects.slice(startIndex, endIndex);
  let nextPageNo = currentpage;
  const lastPage = Math.ceil(projects.length / itemsPerPage);
  let count = startIndex;

  useEffect(()=>{
    
    setDisplayList(displayAble);
  },[currentpage,projects]);


  const nextPage = () => {
    if (endIndex < projects.length) {
      setCureentPage(currentpage + 1);
    }
  };

  const prevPage = () => {
    if (currentpage > 1) {
      setCureentPage(currentpage - 1);
    }
  };

  const setPage = (event) => {
    const pageNo = event.target.getAttribute('data-pagevalue')-0;
    if(pageNo > 1 && pageNo <= lastPage){
      setCureentPage(pageNo);
    }
  }
//end pagination



const onSearch = async (e) => {
  e.preventDefault();
  const src = search.current.value.toLowerCase();

  if(src.length>=3){
    setSearchItem(src); 
    console.log(src);
  }else{
    console.log(src.length);
    setDisplayList(displayAble);
  }
};

const filterData = async () => {
  try {

  const response = await axios.get(
    `${url.projectLists}?search=${searchItem}`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  setDisplayList(response.data);
} catch (error) {
  console.log(error);
}
};

useEffect(() => {
  filterData();
}, [searchItem]);





  //begin filter 
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  // const [selectedDate, setSelectedDate] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  
    //Begin filter button
    const showPopup = (event) => {
      event.stopPropagation();
      console.log(isOpen);
      setIsOpen(true);
    };
  
    const closePopup = () => {
      setIsOpen(false);
    };
  
    const closePopupOnClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    }
  
    useEffect(() => {
      if (isOpen) {
        document.addEventListener('click', closePopupOnClickOutside);
      } else {
        document.removeEventListener('click', closePopupOnClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', closePopupOnClickOutside);
      };
    }, [isOpen]);
  //end filter button

  

  const status = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  const project = [
    { value: 'Smart City', label: 'Smart City' },
    { value: 'Artificial intelligence', label: 'Artificial intelligence' },
    { value: 'Hotel Management', label: 'Hotel Management' },
  ]


  const onReset = ()=>{
    setSelectedProject(null);
    setSelectedStatus(null);
    console.log("reset");
  }


const handleFilterSubmit = async(event)=>{
  event.preventDefault();

  let filter = "";
  
  if(selectedStatus!==null  && selectedProject!==null){
    filter= `status=${selectedStatus.value}&projectName=${selectedProject.value}`;
  }else if(selectedProject!==null){
    filter = `projectName=${selectedProject.value}`;
  }else if(selectedStatus!==null){
    filter = `status=${selectedStatus.value}`;
  }

  try {
    console.log("Front end token",token);
    const response = await axios.get(
      `${url.projectLists}?filter=${encodeURIComponent(filter)}`,
     
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setProjects(response.data);
    
    setSelectedStatus(null);
    closePopup();

  } catch (error) {
    console.log(error);
  }

}

const onDate = async (event) => {
  event.preventDefault();
  const dates = date.current.value;
  console.log("datesss ===",dates);
  if(dates){
  const updates = await axios.get(
    `${url.projectLists}?date=${dates}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  setProjects(updates.data);
  }
  closePopup();
};

//end filter

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
                      id='filterButton'
                      className="btn btn-light-primary me-3"
                      name="close"
                      onClick={(event)=>showPopup(event)}
                      
                    >
                      <i className="ki-duotone ki-filter fs-2">
                        <span className="path1"  />
                        <span className="path2" />
                      </i>

                      {isOpen ? (
                        <div ref={popupRef} className="popup" style={{width:'270px'}}>
                       <div 
                       className="menu menu-sub menu-sub-dropdown w-300px w-md-325px show"
                       data-kt-menu="true"
                       data-popper-placement="bottom-end"
                       style={{
                         zIndex: 107,
                         position: "sticky",
                         inset: "0px 0px auto auto",
                         margin: 0,
                         transform: "translate(-80px, 58px)",
                         
                       }}
                     >
                       {/*begin::Header*/}
                       <div className="px-7 py-5" id='filterButton'>
                         <div className="fs-5 text-dark fw-bold" id='filterButton'>Filter Options</div>
                       </div>
                       {/*end::Header*/}
                       {/*begin::Separator*/}
                       <div className="separator border-gray-200"id='filterButton' />
                       {/*end::Separator*/}
                       {/*begin::Content*/}
                       <div className="px-7 py-5" data-kt-user-table-filter="form" id='filterButton'>
                        
                         
{/*begin::Input group*/}
                         

<div className="mb-10" data-select2-id="select2-data-130-ph5j" id='filterButton' style={{color:'#4B5675',fontSize:'smaller',textAlign:'left'}}> 
                           <label className="form-label fs-6 fw-semibold" id='filterButton'>Role :</label>

                           <Select id='filterButton'
                           className="form-select-solid fw-bold"
                           data-kt-select2="true"
                           data-placeholder="Select option"
                           data-allow-clear="true"
                           data-kt-user-table-filter="role"
                           data-hide-search="true"
                           data-select2-id="select2-data-9-9xw8"
                           tabIndex={-1}
                           aria-hidden="true"
                           data-kt-initialized={1}

                            defaultValue={selectedStatus}
                            onChange={setSelectedStatus}
                            options={status}
                          />
                           
                         </div>
                         {/*end::Input group*/}



{/*begin::Input group*/}
                         

<div id='filterButton' className="mb-10" data-select2-id="select2-data-130-ph5j" style={{color:'#4B5675',fontSize:'smaller',textAlign:'left'}}>
                           <label className="form-label fs-6 fw-semibold" id='filterButton'>Projects :</label>

                           <Select id='filterButton'
                           className="form-select-solid fw-bold"
                           data-kt-select2="true"
                           data-placeholder="Select option"
                           data-allow-clear="true"
                           data-kt-user-table-filter="role"
                           data-hide-search="true"
                           data-select2-id="select2-data-9-9xw8"
                           tabIndex={-1}
                           aria-hidden="true"
                           data-kt-initialized={1}
                            
                            defaultValue={selectedProject}
                            onChange={setSelectedProject}
                            options={project}
                          />
                           
                         </div>
                         {/*end::Input group*/}



{/*begin::Input group*/}



{/*begin::Input group*/}
                         

                          <div className="mb-10" data-select2-id="select2-data-130-ph5j" id='filterButton' style={{color:'#4B5675',fontSize:'smaller',textAlign:'left'}}> 
                           <label className="form-label fs-6 fw-semibold" id='filterButton'>Select Date :</label>

                           <div className="sd-text__content sd-question__content" role="presentation">
                              <input
                                id="sq_100i"
                                className="sd-input sd-text"
                                type="date"
                                // min="2023-09-14"
                                // max="2999-12-31"
                                placeholder=""
                                aria-required="true"
                                aria-labelledby="sq_100_ariaTitle"
                                aria-invalid="false"
                                data-rendered="r"
                                ref={date} 
                                onChange={onDate}
                              />
                            </div>

                           
                         </div>
                         {/*end::Input group*/}



                         {/*begin::Actions*/}
                         <div className="d-flex justify-content-end">
                           <button 
                             type="reset"
                             className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6"
                             data-kt-menu-dismiss="true"
                             data-kt-user-table-filter="reset"
                              onClick={()=>onReset()}
                           >
                             Reset
                           </button>
                           <button 
                             type="submit"
                             className="btn btn-primary fw-semibold px-6"
                             data-kt-menu-dismiss="true"
                             data-kt-user-table-filter="filter"
                             onClick={(event)=>handleFilterSubmit(event)}
                           >
                             Apply
                           </button>
                         </div>
                         {/*end::Actions*/}
                       </div>
                       {/*end::Content*/}
                     </div>
                     </div>
                      ) : (
                        "Filter"
                      )}
                    </button>

                    {/*end::Filter*/}

                    {/*begin::Add user*/}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_add_user"
                    >
                      <AddProject/>
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

export default ProjectList;
