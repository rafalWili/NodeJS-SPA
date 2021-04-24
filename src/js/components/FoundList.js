import React from 'react'
import Card from 'react-bootstrap/Card';
import SingleFound from './SingleFound';
import PropTypes from 'prop-types';

let styles = {
    card : { width: '100%', minHeight: '40vh', padding: '20px', borderColor: '#000', background: 'lightblue' }
}

const FoudList = (props) => {

    return(
        
        <Card style={styles.card}  > 
        { props.data.map( (found) => {  return <SingleFound key={found._id} foundData={found} /> } ) }
        
        
        </Card>
    )

}

FoudList.propTypes = {
    data: PropTypes.array.isRequired
  }

export default FoudList;


