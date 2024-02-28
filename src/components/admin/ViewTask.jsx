import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "../../styles/costume-style.css";

function ViewTask({taskId}) {

    const [viewTask, setViewTask] = useState({});
  const [isShow, invokeModal] = useState(false);


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
                          
                          name="age"
                          value={viewTask.tagName}
                          
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
                          Description
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          
                          name="description"
                          value={viewTask.description}
                          
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
                          value={viewTask.status}
                          
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
                          value={viewTask.approver}
                          
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

export default ViewTask;



