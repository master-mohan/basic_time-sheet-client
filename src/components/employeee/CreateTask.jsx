import { useState, useEffect, useRef } from "react";
import axios from "axios";
import '../../styles/costume-style.css'
import UpdateTask from "./UpdateTask";
import Select from 'react-select';
import URL from "../../services/urlservices";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function CreateTask() {
  const [tasks, setTasks] = useState([]);
  const [filterDate,setFilterDate] = useState(false);
  const [displayList,setDisplayList] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [isCreate,setIsCreate] = useState([false]);
  const [formData,setFormData] = useState({});
  const tagName = useRef(null);
  const description = useRef(null);
  const taskDate =  useRef(null);
  const navigate = useNavigate();

  const result = localStorage.getItem("token");
  const token = `Bearer ${result}`;
  const search = useRef();
  const date = useRef("");


  useEffect(() => {
    console.log(result);
    const fetchData = async () => {
      const response = await axios.get(
        URL.allProjectTasks,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTasks(response.data);
      if(isCreate.length<=tasks.length){
        setIsCreate(prevState =>[
          ...prevState,false
        ]);
      }
    };
    fetchData();
  }, []);


  const handleCreate = (index)=>{
    console.log("index ===== ",index);
    setIsCreate(prevState =>[
      ...prevState.slice(0, index).map(()=>false),
      true,
      ...prevState.slice(index+1).map(()=>false),
    ]);
  }

    //begin pagination
    const [currentpage, setCureentPage] = useState(1);
    const itemsPerPage = 5;
    const startIndex = (currentpage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayAble = tasks.slice(startIndex, endIndex);
    let nextPageNo = currentpage;
    const lastPage = Math.ceil(tasks.length / itemsPerPage);
    let count = startIndex;
  
    useEffect(()=>{
      setDisplayList(displayAble);
    },[currentpage,tasks]);
  
    const nextPage = () => {
      if (endIndex < tasks.length) {
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


  const onFilter = ()=>{
    setFilterDate(!filterDate);
  }


  const onSearch = async (e) => {
    e.preventDefault();
    const src = search.current.value.toLowerCase();
  
    if(src.length>=3){
      setSearchItem(src); 
      console.log(src);
    }else{
      console.log(src.length);
      setDisplayList(tasks);
    }
  };

  const filterData = async () => {
    try {

    const response = await axios.get(
      `${URL.allProjectTasks}?search=${searchItem}`,

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
  
  useEffect(()=>{
    filterData();
  },[searchItem]);




  //Begin filter button

  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  let filterDisplay = "";
    
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


  //begin filter 
  const [selectedProject, setSelectedProject] = useState(null);

  const project = [
    { value: 'Smart City', label: 'Smart City' },
    { value: 'Artificial intelligence', label: 'Artificial intelligence' },
    { value: 'Hotel Management', label: 'Hotel Management' },
  ]
  
    
  const onReset = (event)=>{
    event.preventDefault();
    setSelectedProject(null);
    console.log("reset");
  }

  const handleFilterSubmit = async(event)=>{
    event.preventDefault();
    let filter = "";
    if(selectedProject!==null){
      filter = `projectName=${selectedProject.value}`;
    }

    try {
      const querrryURL =`${URL.allProjectTasks}?filter=${encodeURIComponent(filter)}`;
      console.log("Front end url ====",querrryURL);
      const response = await axios.get(querrryURL,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTasks(response.data);
      // navigate('/layout/employee/lists');
      setSelectedProject(null);
      closePopup();

    } catch (error) {
      console.log(error);
    }

  }

   //end filter 


   const onDate = async (event) => {
    event.preventDefault();
    const dates = date.current.value;
    console.log("datesss ===",dates);
    if(dates){
    const updates = await axios.get(
      `http://localhost:5050/e1/employee/task/getondate?date=${dates}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setTasks(updates.data);
    }
    closePopup();
  };


    const handleFormData = async(id)=>{

      
        const response = await axios.get(`http://localhost:5050/p1/admin/project/viewsingletask/${id}`,
    {
        headers: {
          Authorization: token,
        },
      });
      setFormData(response.data[0]);
    }


    const [isShow, invokeModal] = useState(false)
    const initModal = () => {
      console.log(isShow);
      invokeModal(!isShow)
    }

    const [message, setMessage] = useState("");

  const handleSubmit = async(event)=>{
    event.preventDefault();
    if(tagName.current.value && description.current.value && taskDate.current.value){
   const response =  await axios.post('http://localhost:5050/e1/employee/task/create',{
        "taskId":formData._id,
        "projectId":formData.projectId,
        "tagName": tagName.current.value,
        "description": description.current.value,       
        "taskDate" : taskDate.current.value
      },
    {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        initModal();
         navigate('/employee/layout/tasks/list');
        setMessage(
          <span style={{ color: "green", fontFamily: "serif" }}>
            {response.data.message.toUpperCase()}
          </span>
        );
        
      })
      .catch((error) => {
        console.log(error);
        setMessage(
          <span style={{ color: "red", fontFamily: "serif" }}>
            {error.response.data.message.toUpperCase()}
          </span>
        );
      });
      
    }else{
        console.log("enter required fields");
        setMessage(
          <span style={{ color: "red", fontFamily: "serif" }}>
            {"enter required fields".toUpperCase()}
          </span>
        );
    }
}




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
                Create New Task
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
                <li className="breadcrumb-item text-muted">Employee Task</li>
                {/*end::Item*/}

                 {/*begin::Item*/}
                 <li className="breadcrumb-item">
                  <span className="bullet bg-gray-400 w-5px h-2px" />
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="breadcrumb-item text-muted">Create Task</li>
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
                      placeholder="Search user"
                      onChange={onSearch}
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
                        <div ref={popupRef} className="popup" id="popup45">
                       <div 
                       className="menu menu-sub menu-sub-dropdown w-300px w-md-325px show"
                       data-kt-menu="true"
                       data-popper-placement="bottom-end"
                       style={{
                         zIndex: 107,
                         position: "sticky",
                         inset: "0px 0px auto auto",
                         margin: 0,
                         transform: "translate(-120px, 10px)"
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
                            Project Name
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
                            Task Name
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
                            Created By
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
                            Created on
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
                            Create Task
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 fw-semibold">
                      {displayList.length>0 ? displayList.map((data) => {
                          const index = ++count;
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
                                  <span>{index}</span>
                                </div>
                                {/*begin::User details*/}
                              </td>
                              <td>{data.projectName}</td>
                              <td data-order="2023-09-11T10:59:16+05:30">
                                <div className="badge badge-light fw-bold">
                                {data.taskName}
                                </div>
                              </td>
                              <td>{data.createdByName}</td>
                              
                              {/* <td data-order="2023-05-05T20:43:00+05:30">{data.role}</td> */}
                              <td>
                                {new Date(
                                  data.createdAt.substring(0, 10)
                                ).toLocaleDateString('en-GB', {
                                  day: '2-digit',
                                  month: '2-digit',
                                  year: 'numeric',
                                })}
                              </td>
                              
                              <td>
                                    
                                    <Link
                                    onClick={()=> {
                                      handleCreate(index);
                                     handleFormData(data._id);
                                     initModal();
                                    }}
                                   
                                    id='taskid'>Create</Link>
                                      {isCreate[count] ? 
                                        <Modal show={isShow}>
                                          <Modal.Header closeButton onClick={initModal}> <b> Add Your Task</b></Modal.Header>
                                     <Modal.Body>
                                      {message}
                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                            {/*begin::Form*/}
                                            <form
                                            onSubmit={()=>handleSubmit(event)}
                                              id="kt_modal_add_user_form"
                                              className="form fv-plugins-bootstrap5 fv-plugins-framework"
                                              
                                            >
                                              <div className="fv-plugins-message-container"><div className="fv-help-block"><span role="alert"></span></div></div>
                                              {/*begin::Scroll*/}
                                              <div
                                                className="d-flex flex-column scroll-y me-n7 pe-7"
                                                id="kt_modal_add_user_scroll"
                                                data-kt-scroll="true"
                                                data-kt-scroll-activate="{default: false, lg: true}"
                                                data-kt-scroll-max-height="auto"
                                                data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                                data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                                data-kt-scroll-offset="300px"
                                                style={{maxHeight:'300px'}}
                                              >
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-7 fv-plugins-icon-container">
                                                  {/*begin::Label*/}
                                                  <label className="required fw-semibold fs-6 mb-2">
                                                    Project Name
                                                  </label>
                                                  {/*end::Label*/}
                                                  {/*begin::Input*/}
                                                  <input
                                                    name="projectName"
                                                    value={formData.projectName}
                                                  
                                                    type="text"
                                                    className="form-control form-control-solid mb-3 mb-lg-0"
                                                  />
                                                  {/*end::Input*/}
                                                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-7 fv-plugins-icon-container">
                                                  {/*begin::Label*/}
                                                  <label className="required fw-semibold fs-6 mb-2">
                                                    Task Name
                                                  </label>
                                                  {/*end::Label*/}
                                                  {/*begin::Input*/}
                                                  <input
                                                    
                                                    name="taskName"
                                                    value={formData.taskName}
                                                    
                                                    type="text"
                                                    className="form-control form-control-solid mb-3 mb-lg-0"
                                                  />
                                                  {/*end::Input*/}
                                                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                </div>
                                                {/*end::Input group*/}

                                                <div className="fv-row mb-7 fv-plugins-icon-container">
                                                  {/*begin::Label*/}
                                                  <label className="required fw-semibold fs-6 mb-2">
                                                    Enter the Tag Name
                                                  </label>
                                                  {/*end::Label*/}
                                                  {/*begin::Input*/}
                                                  <input
                                                    
                                                    name="tagName"
                                                    ref={tagName} placeholder="enter tag name"
                                                    type="text"
                                                    className="form-control form-control-solid mb-3 mb-lg-0"
                                                  />
                                                  {/*end::Input*/}

                                                  {/*begin::Input group*/}
                                                  <div className="fv-row mb-7 fv-plugins-icon-container">
                                                    {/*begin::Label*/}
                                                    <label className="required fw-semibold fs-6 mb-2">
                                                      Enter the Description
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                      name="description"
                                                      ref={description} placeholder="enter description"
                                                      type="text"
                                                      className="form-control form-control-solid mb-3 mb-lg-0"
                                                    />
                                                    {/*end::Input*/}
                                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                  </div>
                                                  {/*end::Input group*/}

                                                  {/*begin::Input group*/}
                                                  <div className="fv-row mb-7 fv-plugins-icon-container">
                                                    {/*begin::Label*/}
                                                    <label className="required fw-semibold fs-6 mb-2">
                                                      Enter the Date 
                                                    </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                      name="taskDate"
                                                      ref={taskDate} placeholder=""
                                                      type="date"
                                                      className="form-control form-control-solid mb-3 mb-lg-0"
                                                    />
                                                    {/*end::Input*/}
                                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                  </div>
                                                  {/*end::Input group*/}

                                                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                </div>
                                              </div>
                                              {/*end::Scroll*/}
                                              {/*begin::Actions*/}
                                              <div className="fv-row mb-7 fv-plugins-icon-container">
                                                <button
                                                  type="reset"
                                                  className="btn btn-light me-3"
                                                  data-kt-users-modal-action="cancel"
                                                >
                                                  Discard
                                                </button>
                                                <button
                                                  type="submit"
                                                  className="btn btn-primary"
                                                  data-kt-users-modal-action="submit"
                                                >
                                                  <span className="indicator-label" >Submit</span>
                                                  <span className="indicator-progress">
                                                    Please wait...
                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                  </span>
                                                </button>
                                              </div>
                                              {/*end::Actions*/}
                                            </form>
                                            {/*end::Form*/}
                                            </div>
                                            </Modal.Body>
                                            </Modal>
                                      : ""}
                                      
                              </td>
                              
                            </tr>
                          );
                        }) : <td colSpan="10"><div className="d-flex text-center w-100 align-content-center justify-content-center">No matching records found</div></td>}
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

export default CreateTask;
