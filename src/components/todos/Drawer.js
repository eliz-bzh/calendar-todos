import React from "react";

const Drawer = () => {

    return(
        <div className="rightColumn offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"  aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas">X</button>
            </div>
            <div className="offcanvas-body">
                ...Todos
            </div>
        </div>
        
    )
}

export default Drawer;