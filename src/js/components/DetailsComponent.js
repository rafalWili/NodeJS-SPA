import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
      text: 'My chart'
    },
    series: [{
        type: 'line',
      data: [1, 2, 3]
    }]
  }


let styles = {
    card : { width: '100%', minHeight: '60vh', padding: '20px', borderColor: '#000', background: 'lightblue' }
}

class DetailsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        let details = this.props.item;
        return(
            <Card style={styles.card}  > 
                <h2>{details.value.Name}</h2>
                <h4>Performance history</h4>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={{
                                title: {
                                text: 'My chart'
                                },
                                series: [{
                                    type: 'line',
                                data: [1, 2, 3]
                                }]
                            }}
                                            />
                
                  
            </Card>

        )
    }
}


DetailsComponent.propTypes = {
    item: PropTypes.object.isRequired
  }


export default DetailsComponent;
