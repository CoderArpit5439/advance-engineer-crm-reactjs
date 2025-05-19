import React from 'react'

export const RightBar = () => {
  return (
    <div className="offcanvas offcanvas-end border-0" tabindex="-1" id="theme-settings-offcanvas">
        <div className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
            <h5 className="m-0 me-2 text-white">Theme Customizer</h5>

            <button type="button" className="btn-close btn-close-white ms-auto" id="customizerclose-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
            <div data-simplebar className="h-100">
                <slot></slot>
            </div>

        </div>
        <div className="offcanvas-footer border-top p-3 text-center">
            <div className="row">
                <div className="col-6">
                    <button type="button" className="btn btn-light w-100" id="reset-layout">Reset</button>
                </div>
                <div className="col-6">
                    <a href="https://1.envato.market/velzon-admin" target="_blank" className="btn btn-primary w-100">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}
