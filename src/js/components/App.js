import React, { Component } from 'react';
import axios from 'axios';
import {Circle2} from 'react-preloaders2';

import AppContext from './context';
import FoudList from './FoundList'
import DetailsComponent from './DetailsComponent';

const style = {
    preloader : {   position: 'relative !important', display: 'block', width: 'auto', height: 'auto', left: 'unset', right: 'unset',  zIndex: 'initial', background: 'transparent' }
}




class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            dataFetched : false,
            activeFound  : null
        } 
        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.showDetailsHandler = this.showDetailsHandler.bind(this);
      
    }

    componentDidMount(){
       this.getDataFromServer();
 
    }

    /*** Getting data from server  ***/
    async getDataFromServer (){
        console.log('getDataFromServer')
       
       
            try {
                let response = await axios.get('/api', { headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'}
                    } )
                this.setState({
                    data: response.data,
                    dataFetched: true                   
                })
            } catch (err) {
                console.error(err)
            }
        }
        
        /*** Show more details about selected found ***/
        showDetailsHandler(activeFound){
           this.setState({ activeFound : activeFound})

        }
    
    render(){
        let content;
        this.state.dataFetched ? content = <FoudList data={this.state.data} /> : content = <Circle2 style={ style.preloader } />;
        let details;
        this.state.activeFound ? details = <DetailsComponent item={this.state.activeFound} />: null;

        return(
            <div className="w-100 d-flex justify-content-around align-items-center" >
                <AppContext.Provider value = {{ showDetails : this.showDetailsHandler }}>
                    <div className="col-12 col-md-5 col-content" >
                        {content} 
                        </div>
                    <div className="col-12 col-md-7 " >
                        {details} 
                    </div>
                </AppContext.Provider>        
            </div>  
        );
    }
}
export default App;