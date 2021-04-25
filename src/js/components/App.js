import React, { Component } from 'react';
import axios from 'axios';
import {Circle2} from 'react-preloaders2';

import AppContext from './context';
import FoudList from './FoundList'
import DetailsComponent from './DetailsComponent';
import AddFoundtoList from './AddFoundtoList';
import AddFoundForm from './AddFoundForm';

const style = {
    preloader : {   position: 'relative !important', display: 'block', width: 'auto', height: 'auto', left: 'unset', right: 'unset',  zIndex: 'initial', background: 'transparent' }
}




class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            dataFetched : false,
            activeFound  : null,
            formVisible  : false
        } 
        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.showDetailsHandler = this.showDetailsHandler.bind(this);
        this.toggleFormHandler = this.toggleFormHandler.bind(this);
      
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

        toggleFormHandler(){
            this.setState(
                prevState => ({
                    formVisible: !prevState.formVisible
                }))
        }
    
    render(){
        let content;
        let addFound;
        this.state.dataFetched ? content = <FoudList data={this.state.data} /> : content = <Circle2 style={ style.preloader } />;
        this.state.dataFetched ? addFound = <AddFoundtoList  showForm={this.toggleFormHandler} /> : null;
        let details;
        this.state.activeFound ? details = <DetailsComponent item={this.state.activeFound} />: null;

        return(
            <AppContext.Provider value = {{ showDetails : this.showDetailsHandler }}>

            <div className="w-100 d-flex justify-content-around align-items-center mt-5 pt-5" >
                    <div className="col-12 col-md-5 col-content" >
                        {content} 
                        </div>
                    <div className="col-12 col-md-7 " >
                        {details} 
                    </div>
                    <div className="addFoundClass"> 
                      {addFound}
                    </div>
            </div>  
            <AddFoundForm visible={this.state.formVisible}/>

            </AppContext.Provider>        

        );
    }
}
export default App;