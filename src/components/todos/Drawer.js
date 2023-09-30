import React from "react";

const Drawer = ({ dateTodos }) => {

    return(
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {dateTodos.toLocaleString('en-GB', {dateStyle:'medium'})}
                </div>
            </div>
        </div>
    )
}

export default Drawer;