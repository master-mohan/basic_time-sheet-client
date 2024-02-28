const ForgotPassword = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        {/*begin::Authentication - Password reset */}
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
                  id="kt_password_reset_form"
                  data-kt-redirect-url="/metronic8/demo1/../demo1/authentication/layouts/corporate/new-password.html"
                  action="#"
                >
                  {/*begin::Heading*/}
                  <div className="text-center mb-10">
                    {/*begin::Title*/}
                    <h1 className="text-dark fw-bolder mb-3">
                      Forgot Password ?
                    </h1>
                    {/*end::Title*/}
                    {/*begin::Link*/}
                    <div className="text-gray-500 fw-semibold fs-6">
                      Enter your email to reset your password.
                    </div>
                    {/*end::Link*/}
                  </div>
                  {/*begin::Heading*/}
                  {/*begin::Input group-*/}
                  <div className="fv-row mb-8 fv-plugins-icon-container">
                    {/*begin::Email*/}
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Email*/}
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                  </div>
                  {/*begin::Actions*/}
                  <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                    <button
                      type="button"
                      id="kt_password_reset_submit"
                      className="btn btn-primary me-4"
                    >
                      {/*begin::Indicator label*/}
                      <span className="indicator-label">Submit</span>
                      {/*end::Indicator label*/}
                      {/*begin::Indicator progress*/}
                      <span className="indicator-progress">
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                      {/*end::Indicator progress*/}{" "}
                    </button>
                    <a
                      href="/metronic8/demo1/../demo1/authentication/layouts/corporate/sign-in.html"
                      className="btn btn-light"
                    >
                      Cancel
                    </a>
                  </div>
                  {/*end::Actions*/}
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
        {/*end::Authentication - Password reset*/}
      </div>
    </>
  );
};

export default ForgotPassword;
