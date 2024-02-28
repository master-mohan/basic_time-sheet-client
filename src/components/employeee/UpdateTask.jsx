import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "../../styles/costume-style.css";

function UpdateTask({taskId}) {

    const [viewTask, setViewTask] = useState({});
  const [isShow, invokeModal] = useState(false);
  const [message, setMessage] = useState("");
  let [formData,setFormData] = useState({
    tagName:'',
    description:''
  });


  const initModal = () => {
    console.log(isShow);
    invokeModal(!isShow)
  }

  const result = localStorage.getItem("token");
  const token = `Bearer ${result}`;

    useEffect(() => {

      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:5050/e1/user/employee/singletask/${taskId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setViewTask(response.data);
       
        console.log(response.data);
      };
      fetchData();
    }, [taskId]);


    useEffect(()=>{
      setFormData({
        tagName:viewTask.tagName,
        description:viewTask.description
      });
    },[viewTask]);

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formData);
      try {
        if (formData) {
          await axios
            .put(
              `http://localhost:5050/e1/employee/task/update/${taskId}`,
              formData,
              {
                headers: {
                  Authorization: token,
                },
              }
            )
            .then((response) => {
              invokeModal();
              console.log(response.data.message);
              setMessage(
                <span style={{ color: "rgb(241, 178, 170)", fontFamily: "serif" }}>
                  {response.data.message.toUpperCase()}
                </span>
              );
              // navigate('/usertasks');
            })
            .catch((error) => {
              setMessage(
                <span style={{ color: "red", fontFamily: "serif" }}>
                  {error.response.data.message}
                </span>
              );
            });
            
        } else {
          console.log("enter required fields");
        }
      } catch (error) {
        console.log(error.response.data.message);
        setMessage(
          <span style={{ color: "rgb(241, 178, 170)", fontFamily: "serif" }}>
            {error.response.data.message}
          </span>
        );
      }
    };

    const handleChange = (event)=>{
      let {name,value} = event.target;
      event.preventDefault();
      setFormData({
        ...formData,
        [name]:value
      });
  }




  return (

          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            <button 
            id='view-task567'
            type="button"
            style={{border:'0px solid',display:'flex', alignItems:'center'}}
            variant="success" onClick={initModal}>
             ViewTask
            </button>
            <Modal show={isShow}>
            <div className="modal-content">
              {/*begin::Modal header*/}
              <Modal.Header closeButton onClick={initModal}>
              <div className="modal-header" id="kt_modal_add_user_header">
                {/*begin::Modal title*/}
                
                  <Modal.Title className="fw-bold" >View Task</Modal.Title>
{/*<h2 ></h2> */}
                  
                
                {/*end::Modal title*/}
                
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
                  data-kt-users-modal-action="close"
                  style={{ cursor: "pointer" }}
                >
                  
                </div>
                {/*end::Close*/}
              </div>  
              </Modal.Header>
              {/*end::Modal header*/}
              <Modal.Body>
              {/*begin::Modal body*/}
              <div class="fv-plugins-message-container"><div class="fv-help-block"><span role="alert">{message}</span></div></div>
                  
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Form*/}
                <form
                  id="kt_modal_add_user_form"
                  className="form fv-plugins-bootstrap5 fv-plugins-framework"
                  action="#"
                >
                  
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
                        Employee Name
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        name="employeeName"
                        value={viewTask.employeeName}
                        
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
                      Project Name
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                       
                        name="text"
                        value={viewTask.projectName}
                        
                        className="form-control form-control-solid mb-3 mb-lg-0"
                      />
                      {/*end::Input*/}
                      <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                    </div>
                    {/*end::Input group*/}

                    <div className="fv-row mb-7 fv-plugins-icon-container">
                      

                    {/*begin::Input group*/}
                    <div className="fv-row mb-7 fv-plugins-icon-container">
                      {/*begin::Label*/}
                      <label className="required fw-semibold fs-6 mb-2">
                      Task Name
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                       
                        name="text"
                        value={viewTask.taskName}
                        
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
                      Tag Name
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                       
                        name="tagName"
                        value={formData.tagName}
                        onChange={handleChange}
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
                          Description
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
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
                        Task Date
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          
                          name="createdon"
                          value={new Date(
                            viewTask.taskDate+"".substring(0, 10)
                          ).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                          })}
                          
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
                        Created on
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          
                          name="createdon"
                          value={new Date(
                            viewTask.createdAt+"".substring(0, 10)
                          ).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                          })}
                          
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
                        Status
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input 
                          name="status"
                          value={viewTask.status==="" ? "-------" : viewTask.status}
                          
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
                            Approver
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          name="pan"
                          value={viewTask.approver==="" ? "-------" : viewTask.approver}
                          
                          type="text"
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
                      id="updateButton89"
                      type="submit"
                      className="btn btn-primary"
                      data-kt-users-modal-action="submit"
                      onClick={(e)=>handleSubmit(e)}
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
              {/*end::Modal body*/}
            </div>
            </Modal>
          </div>
  );
}

export default UpdateTask;



