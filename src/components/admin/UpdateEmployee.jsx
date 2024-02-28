import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "../../styles/costume-style.css";

function UpdateEmployee({id}) {

  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    invokeModal(!isShow);
  }


  const [message,setMessage] = useState("");
  const [formData, setFormdata] = useState({});
  const [employee,setEmployee] =useState({});

  const result = localStorage.getItem('token');
  const token = `Bearer ${result}`;

  useEffect(()=>{
  const fetchData = async () => {
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
  },[id]);

  useEffect(()=>{
    setFormdata(employee);
  },[employee])


const handleChange = (event)=>{
  const {name,value} = event.target;
  setFormdata({
      ...formData,
      [name]:value
  })
}


  const handleSubmit = async (event) => {
      event.preventDefault();
      try {

      await axios.put(
      `http://localhost:5050/a1/admin/employee/update/${id}`,formData,
      {
        headers: {
          Authorization: token,
        },
      }).then((response)=>{ 
        setMessage(<span style={{color:'green',fontFamily:"serif"}}>{response.data.message.toUpperCase()}</span>);
          window.location.reload();})
      .catch((error)=>{setMessage(<span style={{color:'red',fontFamily:"serif"}}>{error.response.data.message}</span>);})

      } catch (error) {

          setMessage(<span style={{color:'red',fontFamily:"serif"}}>{error.response.data.message}</span>);
      }
  };
  const dob = formData.dob+"";
  const date = dob.substring(0,10);

  return (

          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            <button 
            id='editEmployee45'
            type="button"
            style={{border:'0px solid',display:'flex', alignItems:'center', color:'white'}}
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_user"
            variant="success" onClick={initModal}>
             <i className="ki-duotone ki-pencil fs-2">
              <span className="path1"></span>
              <span className="path2"></span>
              </i>
            </button>
            <Modal show={isShow}>
            <div className="modal-content">
              {/*begin::Modal header*/}
              <Modal.Header closeButton onClick={initModal}>
              <div className="modal-header" id="kt_modal_add_user_header">
                {/*begin::Modal title*/}
                
                  <Modal.Title className="fw-bold" >Add Employee</Modal.Title>
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
                  onSubmit={handleSubmit}
                >
                  <div class="fv-plugins-message-container"><div class="fv-help-block"><span role="alert">{message}</span></div></div>
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
                        Full Name
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        onChange={handleChange}
                        name="employeeName"
                        value={formData.employeeName}
                        placeholder="Employee Name"
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
                        Email
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        placeholder="email"
                        type="email"
                        className="form-control form-control-solid mb-3 mb-lg-0"
                      />
                      {/*end::Input*/}
                      <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                    </div>
                    {/*end::Input group*/}

                    <div className="fv-row mb-7 fv-plugins-icon-container">
                      {/*begin::Label*/}
                      <label className="required fw-semibold fs-6 mb-2">
                        Phone No.
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        onChange={handleChange}
                        name="phoneNo"
                        value={formData.phoneNo}
                        placeholder="Phone No"
                        type="number"
                        className="form-control form-control-solid mb-3 mb-lg-0"
                      />
                      {/*end::Input*/}

                      {/*begin::Input group*/}
                      <div className="fv-row mb-7 fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="required fw-semibold fs-6 mb-2">
                          Age
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          onChange={handleChange}
                          name="age"
                          value={formData.age}
                          placeholder="age"
                          type="number"
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
                          DOB
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          onChange={handleChange}
                          name="dob"
                          value={date}
                          placeholder="DOB"
                          type="date"
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
                          Address
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          onChange={handleChange}
                          name="address"
                          value={formData.address}
                          placeholder="Address"
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
                          Government ID
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          onChange={handleChange}
                          name="governmentId"
                          value={formData.governmentId}
                          placeholder="Government Id"
                          type="number"
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
                          PAN ID
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          onChange={handleChange}
                          name="pan"
                          value={formData.pan}
                          placeholder="PAN"
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
                          Designation
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          onChange={handleChange}
                          name="designation"
                          value={formData.designation}
                          placeholder="Designation"
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
                          Role
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          onChange={handleChange}
                          name="role"
                          value={formData.role}
                          placeholder="Role"
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
                      onClick={handleSubmit}
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

export default UpdateEmployee;
