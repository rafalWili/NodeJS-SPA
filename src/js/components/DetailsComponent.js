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
    card : { width: '100%', minHeight: '60vh', padding: '20px', borderColor: '#000', background: 'white' }
}

class DetailsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
let options  = [];
let countries = [];
let performance = this.props.item.value.Performance;
let AllocationCountry = this.props.item.value.AllocationCountry;

performance.map( (value, index) => {
    options.push([ Date.UTC(value.Date.split('-')[0], 11, 1), value.Value] )
});
AllocationCountry.map( (value, index) => {
    countries.push( {name: value.Key, y: value.Value } )
});

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
                                yAxis: {
                                    min : 80,
                                    max: 150
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
                         <h4 style={{ margin: '20px 0' }}>Country Allocation</h4>
                         
                       <HighchartsReact
                    highcharts={Highcharts}
                    options={{ 
                                chart: {
                                            plotBackgroundColor: null,
                                            plotBorderWidth: null,
                                            plotShadow: false,
                                            type: 'pie',
                                        
                                        },
                                        colors: ['#000000', '#0d233a', '#8bbc21', '#910000', '#1aadce',
        '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
                                title: {
                                   // text: 'Browser market shares in January, 2018'
                                },
                                tooltip: {
                                    pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
                                },
                                accessibility: {
                                    point: {
                                        valueSuffix: '%'
                                    }
                                },
                                plotOptions: {
                                    pie: {
                                        allowPointSelect: true,
                                        cursor: 'pointer',
                                        dataLabels: {
                                            enabled: false,
                                            format: '<b>{point.name}</b>: {point.percentage:.0f} %'
                                          
                                        }
                                    }
                                   
                                },
                                legend: {
                                        layout: 'vertical',
                                        align: 'right',
                                        verticalAlign: 'top',
                                        y: 130,
                                        navigation: {
                                            activeColor: '#3E576F',
                                            animation: true,
                                            arrowSize: 12,
                                            inactiveColor: '#CCC',
                                            style: {
                                                fontWeight: 'bold',
                                                color: '#333',
                                                fontSize: '12px'
                                            },
                                           
                                        },
                                         itemStyle : { 
                                                fontSize: '18px'
                                            }
                                    },
                                series: [{
                                    name: 'Country',
                                    colorByPoint: true,
                                    data: countries,
                                    showInLegend: true
                                   
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
