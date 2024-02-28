import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/costume-style.css";
import { useNavigate } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import Select from 'react-select';
import URL from "../../services/urlservices";




function EmployeeLists() {
  const [employee, setEmployee] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const [filterDisplay,setFilterDisplay] = useState('');



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
  

  const date = useRef("");
  const navigate = useNavigate();

  const search = useRef("");
  const result = localStorage.getItem("token");
  const token = `Bearer ${result}`;

  const fetchData = async () => {
    const response = await axios.get(
      URL.employeeList,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setEmployee(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeEmployee = async (id, event) => {
    event.preventDefault();
    
    const response = await axios.delete(
      `${URL.employeeDelete}/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const update = employee.filter((emp) => emp._id !== id);
    setEmployee(update);
  };

  //begin pagination
  const [currentpage, setCureentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentpage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayAble = employee.slice(startIndex, endIndex);
  let nextPageNo = currentpage;
  const lastPage = Math.ceil(employee.length / itemsPerPage);
  let count = startIndex;

  useEffect(() => {
    setDisplayList(displayAble);
  }, [currentpage, employee]);

  const nextPage = () => {
    if (endIndex < employee.length) {
      setCureentPage(currentpage + 1);
    }
  };

  const prevPage = () => {
    if (currentpage > 1) {
      setCureentPage(currentpage - 1);
    }
  };

  const setPage = (event) => {
    const pageNo = event.target.getAttribute("data-pagevalue") - 0;
    if (pageNo > 1 && pageNo <= lastPage) {
      setCureentPage(pageNo);
    }
  };
  //end pagination

  const onSearch = async (e) => {
    e.preventDefault();
    const src = search.current.value.toLowerCase();

    if (src.length >= 3) {
      setSearchItem(src);
      console.log(src);
    } else {
     
      setDisplayList(displayAble);
    }
  };


    
      const filterData = async () => {
        try {

        const response = await axios.get(
          `${URL.employeeList}?search=${searchItem}`,

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

  const onDate = async (event) => {
    event.preventDefault();
    const dates = date.current.value;
    setFilterDisplay(new Date(
      (dates + "").substring(0, 10)
    ).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }));
    console.log("search date ====" ,dates);
    if (dates) {
      const filteredOnDate = employee.filter((data) => {
        const employeeDate = data.createdAt.substring(0, 10);
       
        if (employeeDate === dates) {
          return data;
        }
      });
      setEmployee(filteredOnDate);
      
      closePopup();
    }
  };

  //begin filter 
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  

  const designation = [
    { value: 'Accountant', label: 'Accountant' },
    { value: 'Architecture', label: 'Architecture' },
    { value: 'Administrator', label: 'Administrator' },
    { value: 'HR Executive', label: 'HR Executive' },
    { value: 'Senior Developer', label: 'Senior Developer' },
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Marketing Manager', label: 'Marketing Manager' },
    
  ];
  

  const role = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
  ];
  

    
  const onReset = (event)=>{
    event.preventDefault();
    setSelectedDesignation(null);
    setSelectedRole(null);
    console.log("reset");
  }

  const handleFilterSubmit = async(event)=>{
    event.preventDefault();


    let filter = "";
    
    if(selectedDesignation!==null  && selectedRole!==null){
      filter= `designation=${selectedDesignation.value}&role=${selectedRole.value}`;
    }else if(selectedDesignation!==null){
      filter = `designation=${selectedDesignation.value}`;
    }else if(selectedRole!==null){
      filter = `role=${selectedRole.value}`;
    }


    try {
      const querrryURL =`${URL.employeeList}?filter=${encodeURIComponent(filter)}`;
      console.log("Front end url ====",querrryURL);
      const response = await axios.get(querrryURL,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setEmployee(response.data);
      // navigate('/layout/employee/lists');
      setSelectedDesignation(null);
      setSelectedRole(null);
      closePopup();

    } catch (error) {
      console.log(error);
    }

  }


   //end filter 

  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main" >
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
                Employee List
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
                <li className="breadcrumb-item text-muted">Employee List</li>
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
                      type="text"
                      data-kt-user-table-filter="search"
                      className="form-control form-control-solid w-250px ps-13"
                      placeholder="Search employee"
                      onChange={onSearch}
                    />
                  </div>
                  {/*end::Search*/}
                </div>
                {/*begin::Card title*/}
                {/*begin::Card toolbar*/}
                <div className="card-toolbar"  id='filterButton'>
                  {/*begin::Toolbar*/}
                  <div  id='filterButton'
                    className="d-flex justify-content-end"
                    data-kt-user-table-toolbar="base"
                  >
                    
                    <button
                      type="button"
                      id='filterButton'
                      className="btn btn-light-primary me-3"
                      
                    >
                      <span>{filterDisplay}</span>
                    </button>


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
                         width:'300px'
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
                         

                         <div id='filterButton' className="mb-10" data-select2-id="select2-data-130-ph5j" style={{color:'#4B5675',fontSize:'smaller',textAlign:'left'}}>
                           <label className="form-label fs-6 fw-semibold" id='filterButton'>Designation :</label>

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
                            
                            defaultValue={selectedDesignation}
                            onChange={setSelectedDesignation}
                            options={designation}
                          />
                           
                         </div>
                         {/*end::Input group*/}
                         
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

                            defaultValue={selectedRole}
                            onChange={setSelectedRole}
                            options={role}
                          />
                           
                         </div>
                         {/*end::Input group*/}


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
                              onClick={(event)=>onReset(event)}
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
                      <AddEmployee />
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
                        <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0" id="employee-list-header">
                          <th
                            className="w-10px pe-2 sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="
                                
                                  
                                
                              "
                            style={{ width: "29.8906px" }}
                          >
                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3" id="employee-list-header">
                              <input
                              id="employee-list-header"
                                className="form-check-input"
                                type="checkbox"
                                data-kt-check="true"
                                data-kt-check-target="#kt_table_users .form-check-input"
                                defaultValue={1}
                              />
                            </div>
                          </th>
                          <th
                          id="employee-list-header"
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
                            id="employee-list-header"
                            tabIndex={0}
                            aria-controls="kt_table_users"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Role: activate to sort column ascending"
                            style={{ width: "126.828px" }}
                          >
                            EMPLOYEE NAME
                          </th>
                          <th
                            className="min-w-125px sorting"
                            id="employee-list-header"
                            tabIndex={0}
                            aria-controls="kt_table_users"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Last login: activate to sort column ascending"
                            style={{ width: "126.828px" }}
                          >
                            PHONE NO
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
                            DESIGNATION
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
                            ROLE
                          </th>
                          <th
                            className="text-end min-w-100px sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Actions"
                            style={{ width: "103.469px" }}
                          >
                            ACTION
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 fw-semibold">
                        {displayList.length > 0 ? (
                          displayList.map((data) => {
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
                                <td>{data.employeeName}</td>
                                <td data-order="2023-09-11T10:59:16+05:30">
                                  <div className="badge badge-light fw-bold">
                                    {data.phoneNo}
                                  </div>
                                </td>
                                <td>{data.designation}</td>
                                <td>
                                  {data.role === "admin" ? (
                                    <span class="badge badge-light-info fs-7 fw-bold">
                                      Admin
                                    </span>
                                  ) : (
                                    <span class="badge badge-light-warning fs-7 fw-bold">
                                      User
                                    </span>
                                  )}
                                </td>
                                {/* <td data-order="2023-05-05T20:43:00+05:30">{data.role}</td> */}
                                <td className="text-end">
                                  <Link
                                    to={`/layout/employee/view/${data._id}`}
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                  >
                                    <i className="ki-duotone ki-switch fs-2">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>{" "}
                                  </Link>

                                  <Link
                                    href="#"
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                  >
                                    {" "}
                                    <UpdateEmployee id={data._id} />
                                  </Link>

                                  <a
                                    href="#"
                                    onClick={(e) => removeEmployee(data._id, e)}
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                  >
                                    <i className="ki-duotone ki-trash fs-2">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                      <span className="path5"></span>
                                    </i>{" "}
                                  </a>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <td colspan="7">
                            <div class="d-flex text-center w-100 align-content-center justify-content-center">
                              No matching records found
                            </div>
                          </td>
                        )}
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
                            <button
                              className="page-link page-text me-5"
                              style={{ cursor: "pointer" }}
                              onClick={prevPage}
                              disabled={currentpage === 1}
                            >
                              Previous
                            </button>
                          </li>
                          <li className="page-item active">
                            <a
                              className="page-link"
                              style={{ cursor: "pointer" }}
                            >
                              {currentpage}
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              style={{ cursor: "pointer" }}
                              data-pagevalue={nextPageNo + 1}
                              onClick={setPage}
                            >
                              {nextPageNo + 1 <= lastPage ? nextPageNo + 1 : ""}
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              style={{ cursor: "pointer" }}
                              data-pagevalue={nextPageNo + 2}
                              onClick={setPage}
                            >
                              {nextPageNo + 2 <= lastPage ? nextPageNo + 2 : ""}
                            </a>
                          </li>
                          <li className="page-item next">
                            <a
                              className="page-link page-text"
                              style={{ cursor: "pointer" }}
                              onClick={nextPage}
                            >
                              {currentpage < lastPage ? "Next" : ""}
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
      {/* <span
  className="select2-container select2-container--bootstrap5 select2-container--open"
  style={{ position: "absolute", top: "281.188px", left: "720.75px" }}
>
  <span
    className="select2-dropdown select2-dropdown--below"
    dir="ltr"
    style={{ width: "279.5px" }}
  >
    <span className="select2-search select2-search--dropdown select2-search--hide">
      <input
        className="select2-search__field"
        type="search"
        tabIndex={0}
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
        role="searchbox"
        aria-autocomplete="list"
        autoComplete="off"
        aria-label="Search"
        aria-controls="select2-o3iw-results"
        aria-activedescendant="select2-o3iw-result-mk5u-Administrator"
      />
    </span>
    <span className="select2-results">
      <ul
        className="select2-results__options"
        role="listbox"
        id="select2-o3iw-results"
        aria-expanded="true"
        aria-hidden="false"
      >
        <li
          className="select2-results__option select2-results__option--selectable select2-results__option--highlighted"
          id="select2-o3iw-result-mk5u-Administrator"
          role="option"
          data-select2-id="select2-data-select2-o3iw-result-mk5u-Administrator"
          aria-selected="true"
        >
          Administrator
        </li>
        <li
          className="select2-results__option select2-results__option--selectable"
          id="select2-o3iw-result-wrgd-Analyst"
          role="option"
          data-select2-id="select2-data-select2-o3iw-result-wrgd-Analyst"
          aria-selected="false"
        >
          Analyst
        </li>
        <li
          className="select2-results__option select2-results__option--selectable"
          id="select2-o3iw-result-67j8-Developer"
          role="option"
          data-select2-id="select2-data-select2-o3iw-result-67j8-Developer"
          aria-selected="false"
        >
          Developer
        </li>
        <li
          className="select2-results__option select2-results__option--selectable"
          id="select2-o3iw-result-vdcl-Support"
          role="option"
          data-select2-id="select2-data-select2-o3iw-result-vdcl-Support"
          aria-selected="false"
        >
          Support
        </li>
        <li
          className="select2-results__option select2-results__option--selectable select2-results__option--selected"
          id="select2-o3iw-result-aow2-Trial"
          role="option"
          data-select2-id="select2-data-select2-o3iw-result-aow2-Trial"
          aria-selected="false"
        >
          Trial
        </li>
      </ul>
    </span>
  </span>
</span>


<span
  className="select2-container select2-container--bootstrap5 select2-container--open"
  style={{ position: "absolute", top: "276.141px", left: "720.75px" }}
>
  <span
    className="select2-dropdown select2-dropdown--above"
    dir="ltr"
    style={{ width: "279.5px" }}
  >
    <span className="select2-search select2-search--dropdown select2-search--hide">
      <input
        className="select2-search__field"
        type="search"
        tabIndex={0}
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
        role="searchbox"
        aria-autocomplete="list"
        autoComplete="off"
        aria-label="Search"
        aria-controls="select2-db1w-results"
        aria-activedescendant="select2-db1w-result-a4f6-Enabled"
      />
    </span>
    <span className="select2-results">
      <ul
        className="select2-results__options"
        role="listbox"
        id="select2-db1w-results"
        aria-expanded="true"
        aria-hidden="false"
      >
        <li
          className="select2-results__option select2-results__option--selectable select2-results__option--selected select2-results__option--highlighted"
          id="select2-db1w-result-a4f6-Enabled"
          role="option"
          data-select2-id="select2-data-select2-db1w-result-a4f6-Enabled"
          aria-selected="true"
        >
          Enabled
        </li>
      </ul>
    </span>
  </span>
</span> */}
    </div>
  );
}

export default EmployeeLists;
