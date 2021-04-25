import React from 'react';

const AddFoundForm = ({visible}) => {
    return(
        <div className={visible ? ' addFoundFormClass formShow ' : ' addFoundFormClass ' } >
          <form className="mt-5 p-5">
            <div className="form-group">
                <label htmlFor="foundNameInput">Found Name</label>
                <input type="text" className="form-control" id="foundNameInput" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default AddFoundForm;



