import React, {Component} from 'react';

class AddFoundtoList  extends Component {

        constructor(props) {
            super(props);
            this.state = {

            }
        }

        render(){
            return(
                <div onClick={this.props.showForm } >
                        Add
                </div>

            )
        }
}

export default AddFoundtoList;