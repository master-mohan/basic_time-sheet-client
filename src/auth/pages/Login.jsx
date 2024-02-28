import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import axios from "axios";
import SideMenu from "../../components/core/SideMenu";

const Login = () => {
  const navigate = useNavigate();
  const username = useRef("");
  const password = useRef("");
  const {login,setRole} = useAuth();
  
  const [message, setMessage] = useState("");

  const forgotPwd = () => {
    navigate("/auth/forgot-password");
  };

  const onSignIn = async(e) => {
      e.preventDefault();
      try {
        if(username.current.value.length<1 || password.current.value.length<1){
          setMessage(<h2 style={{color:'red',fontFamily:"serif"}}>Enter valid username/password</h2>);
        }else{
      const response = await axios.post('http://localhost:5050/e1/employee/login',{
        "username":username.current.value,"password":password.current.value
      });
        console.log(response.data.message);
        if(response.data.token){
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("employeeName",response.data.user.employeeName);
          login();
          console.log(response.data.user.role);
          if(response.data.user.role==='admin'){
            setRole(true);
            navigate("/layout/employee/lists");
          }
          else if(response.data.user.role==='user'){
            setRole(false);
            navigate('/employee/layout/tasks/list');
          }
          
        }
      }
      } catch (error) {
        setMessage(<h2 style={{color:'red',fontFamily:"serif"}}>Enter valid username/password</h2>);
      }
    
  };

  return (
    <>
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        {/*begin::Authentication - Sign-in */}
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          {/*begin::Body*/}
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            {/*begin::Form*/}
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              {/*begin::Wrapper*/}
              <div className="w-lg-500px p-10">
                {/*begin::Form*/}
                <form
                  className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
                  noValidate="novalidate"
                  id="kt_sign_in_form"
                >
                  {/*begin::Heading*/}
                  <div className="text-center mb-11">
                    {/*begin::Title*/}
                    <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                    {/*end::Title*/}
                    {/*begin::Subtitle*/}
                    <div className="text-gray-500 fw-semibold fs-6">
                      Your Social Campaigns
                    </div>
                    {/*end::Subtitle-*/}
                  </div>
                  {/*begin::Heading*/}
                  {/*begin::Login options*/}
                  <div className="row g-3 mb-9">
                    {/*begin::Col*/}
                    <div className="col-md-6">
                      {/*begin::Google link-*/}
                      <a
                        href="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                      >
                        <img
                          alt="Logo"
                          src="media/svg/brand-logos/google-icon.svg"
                          className="h-15px me-3"
                        />
                        Sign in with Google
                      </a>
                      {/*end::Google link-*/}
                    </div>
                    {/*end::Col*/}
                    {/*begin::Col*/}
                    <div className="col-md-6">
                      {/*begin::Google link-*/}
                      <a
                        href="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                      >
                        <img
                          alt="Logo"
                          src="media/svg/brand-logos/apple-black.svg"
                          className="theme-light-show h-15px me-3"
                        />
                        <img
                          alt="Logo"
                          src="media/svg/brand-logos/apple-black-dark.svg"
                          className="theme-dark-show h-15px me-3"
                        />
                        Sign in with Apple
                      </a>
                      {/*end::Google link-*/}
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Login options*/}
                  {/*begin::Separator*/}
                  <div className="separator separator-content my-14">
                    <span className="w-125px text-gray-500 fw-semibold fs-7">
                      Or with email
                    </span>
                  </div>
                  <span>{message}</span>
                  {/*end::Separator*/}
                  {/*begin::Input group-*/}
                  <div className="fv-row mb-8 fv-plugins-icon-container">
                    {/*begin::Email*/}
                    <input
                    ref={username}
                      type="text"
                      placeholder="Username"
                      name="phone no"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Email*/}
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                  </div>
                  {/*end::Input group-*/}
                  <div className="fv-row mb-3 fv-plugins-icon-container">
                    {/*begin::Password*/}
                    <input
                    ref={password}
                      type="password"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Password*/}
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                  </div>
                  {/*end::Input group-*/}
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div />
                    {/*begin::Link*/}
                    <a
                      className="link-primary cursor-pointer"
                      onClick={forgotPwd}
                    >
                      Forgot Password ?
                    </a>
                    {/*end::Link*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Submit button*/}
                  <div className="d-grid mb-10">
                    <button
                      type="submit"
                      id="kt_sign_in_submit"
                      className="btn btn-primary"
                      onClick={onSignIn}
                    >
                      {/*begin::Indicator label*/}
                      <span className="indicator-label">Sign In</span>
                      {/*end::Indicator label*/}
                      {/*begin::Indicator progress*/}
                      <span className="indicator-progress">
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                      {/*end::Indicator progress*/}{" "}
                    </button>
                  </div>
                  {/*end::Submit button*/}
                  {/*begin::Sign up*/}
                  <div className="text-gray-500 text-center fw-semibold fs-6">
                    Not a Member yet?
                    <a
                      href="/metronic8/demo1/../demo1/authentication/layouts/corporate/sign-up.html"
                      className="link-primary"
                    >
                      Sign up
                    </a>
                  </div>
                  {/*end::Sign up*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Form*/}
            {/*begin::Footer*/}
            <div className="w-lg-500px d-flex flex-stack px-10 mx-auto">
              {/*begin::Languages*/}
              <div className="me-10">
                {/*begin::Toggle*/}
                <button
                  className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  data-kt-menu-offset="0px, 0px"
                >
                  <img
                    data-kt-element="current-lang-flag"
                    className="w-20px h-20px rounded me-3"
                    src="media/flags/united-states.svg"
                    alt=""
                  />
                  <span data-kt-element="current-lang-name" className="me-1">
                    English
                  </span>
                  <span className="d-flex flex-center rotate-180">
                    <i className="ki-duotone ki-down fs-5 text-muted m-0" />{" "}
                  </span>
                </button>
                {/*end::Toggle*/}
                {/*begin::Menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
                  data-kt-menu="true"
                  id="kt_auth_lang_menu"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link d-flex px-5"
                      data-kt-lang="English"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          data-kt-element="lang-flag"
                          className="rounded-1"
                          src="media/flags/united-states.svg"
                          alt=""
                        />
                      </span>
                      <span data-kt-element="lang-name">English</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link d-flex px-5"
                      data-kt-lang="Spanish"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          data-kt-element="lang-flag"
                          className="rounded-1"
                          src="media/flags/spain.svg"
                          alt=""
                        />
                      </span>
                      <span data-kt-element="lang-name">Spanish</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link d-flex px-5"
                      data-kt-lang="German"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          data-kt-element="lang-flag"
                          className="rounded-1"
                          src="media/flags/germany.svg"
                          alt=""
                        />
                      </span>
                      <span data-kt-element="lang-name">German</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link d-flex px-5"
                      data-kt-lang="Japanese"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          data-kt-element="lang-flag"
                          className="rounded-1"
                          src="media/flags/japan.svg"
                          alt=""
                        />
                      </span>
                      <span data-kt-element="lang-name">Japanese</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link d-flex px-5"
                      data-kt-lang="French"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          data-kt-element="lang-flag"
                          className="rounded-1"
                          src="media/flags/france.svg"
                          alt=""
                        />
                      </span>
                      <span data-kt-element="lang-name">French</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}
              </div>
              {/*end::Languages*/}
              {/*begin::Links*/}
              <div className="d-flex fw-semibold text-primary fs-base gap-5">
                <a
                  href="/metronic8/demo1/../demo1/pages/team.html"
                  target="_blank"
                >
                  Terms
                </a>
                <a
                  href="/metronic8/demo1/../demo1/pages/pricing/column.html"
                  target="_blank"
                >
                  Plans
                </a>
                <a
                  href="/metronic8/demo1/../demo1/pages/contact.html"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>
              {/*end::Links*/}
            </div>
            {/*end::Footer*/}
          </div>
          {/*end::Body*/}
          {/*begin::Aside*/}
          <div
            className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
            style={{
              backgroundImage: "url(media/misc/auth-bg.png)",
            }}
          >
            {/*begin::Content*/}
            <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
              {/*begin::Logo*/}
              <a
                href="/metronic8/demo1/../demo1/index.html"
                className="mb-0 mb-lg-12"
              >
                <img
                  alt="Logo"
                  src="media/logos/custom-1.png"
                  className="h-60px h-lg-75px"
                />
              </a>
              {/*end::Logo*/}
              {/*begin::Image*/}
              <img
                className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
                src="media/misc/auth-screens.png"
                alt=""
              />
              {/*end::Image*/}
              {/*begin::Title*/}
              <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">
                Fast, Efficient and Productive
              </h1>
              {/*end::Title*/}
              {/*begin::Text*/}
              <div className="d-none d-lg-block text-white fs-base text-center">
                In this kind of post,{" "}
                <a
                  href="#"
                  className="opacity-75-hover text-warning fw-bold me-1"
                >
                  the blogger
                </a>
                introduces a person they’ve interviewed <br /> and provides some
                background information about
                <a
                  href="#"
                  className="opacity-75-hover text-warning fw-bold me-1"
                >
                  the interviewee
                </a>
                and their <br /> work following this is a transcript of the
                interview.
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Aside*/}
        </div>
        {/*end::Authentication - Sign-in*/}
      </div>
    </>
  );
};

export default Login;
