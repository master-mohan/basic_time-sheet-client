import React from 'react'

function Approve() {
  return (
    <div> <div 
    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4 show" 
    data-kt-menu="false" 
    style={{zIndex: '105', position: 'fixed', inset: 'auto 0px 0px auto', margin: '0px', transform: 'translate(-60px, -136px)'}} 
    data-popper-placement="top-end">
        <div className="menu-item px-3">
            <a className="menu-link px-3">
                Edit
            </a>
        </div>
        <div className="menu-item px-3">
            <a 
            className="menu-link px-3" 
            data-kt-users-table-filter="delete_row">
            Delete
        </a>
        </div>
    </div></div>
  )
}

export default Approve