import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "../../styles/costume-style.css";
import url from "../../services/urlservices";
import { useNavigate } from "react-router-dom";

function AddProject() {

  const [isShow, invokeModal] = React.useState(false)
  const [message,setMessage] = useState("");
  const projectName = useRef("");
  const result = localStorage.getItem("token");
  const token = `Bearer ${result}`;
const navigate = useNavigate();


  const initModal = () => {
    console.log(isShow);
    invokeModal(!isShow)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      if(projectName.current.value.length<1){
        setMessage(<span style={{color:'red',fontFamily:"serif"}}>Enter the Project</span>);
      }else{
    await axios.post(
      url.createProject,
      {projectName:projectName.current.value},
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response)=>{ 
      setMessage(<span style={{color:'rgb(241, 178, 170)',fontFamily:"serif"}}>{response.data.message.toUpperCase()}</span>);
      window.location.reload();
    })
    .catch((error)=>{console.log(error);
      setMessage(<span style={{color:'red',fontFamily:"serif"}}>{error.response.data.message}</span>);})
      }
    } catch (error) {
      // console.log(error);
      console.log(error.response.data.message);
        setMessage(<span style={{color:'rgb(241, 178, 170)',fontFamily:"serif"}}>{error.response.data.message}</span>);
    }
  };


  return (

          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            <button 
            id='addemployee45'
            type="button"
            style={{border:'0px solid',display:'flex', alignItems:'center', color:'white'}}
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_user"
            variant="success" onClick={initModal}>
             
              <i className="ki-duotone ki-plus fs-2"  />
              Add Project
            </button>
            <Modal show={isShow}>
            <div className="modal-content">
              {/*begin::Modal header*/}
              <Modal.Header closeButton onClick={initModal}>
              <div className="modal-header" id="kt_modal_add_user_header">
                {/*begin::Modal title*/}
                
                  <Modal.Title className="fw-bold" >Create New Project</Modal.Title>
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
                      Project Name : 
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="text" 
                        ref={projectName} 
                        placeholder="Enter Project Name " 
                        className="form-control form-control-solid mb-3 mb-lg-0"
                      />
                      {/*end::Input*/}
                      <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                    </div>
                    {/*end::Input group*/}
                    

                   
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
              {/*end::Modal body*/}
            </div>
            </Modal>
          </div>
  );
}

export default AddProject;



