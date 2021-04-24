
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import AppContext from './context';


let styles = {
    SingleFound : {  padding: '20px 10px 20px 20px', border: '2px solid gray', marginBottom: '20px', borderRadius: '5px', textAlign: 'Left', background: '#ffc163', fontWeight: '600' }
}


const SingleFound = ({foundData}) => {
    let advisor = foundData.value.Name;
    const value = useContext(AppContext);

    return(
        
        <div onClick={ () => { value.showDetails(foundData) } } style={styles.SingleFound}>
                {advisor}
        </div>

    )
}
SingleFound.propTypes = {
    foundData: PropTypes.object.isRequired
  }

export default SingleFound;