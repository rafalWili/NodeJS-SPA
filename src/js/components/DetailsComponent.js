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
let options = [];
let performance = this.props.item.value.Performance;

performance.map( (value, index) => {
    options.push([ Date.UTC(value.Date.split('-')[0], 11, 1), value.Value] )
})

        let details = this.props.item;
        return(
            <Card style={styles.card}  > 
                <h2>{details.value.Name}</h2>
                <h4>Performance history</h4>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={{  xAxis: {
                                    type: 'datetime'
                                },
                                title: {
                                text: 'My chart'
                                },
                                series: [{
                                    type: 'spline',
                                data: options
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
