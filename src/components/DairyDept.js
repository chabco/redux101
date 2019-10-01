import React, { Component } from 'react';
import { connect } from 'react-redux';
// in order for this component to know about redux, we need some glue
import { bindActionCreators } from 'redux';
import updateDairy from '../actions/dairyInvUpdate';
import AddItem from './AddItems';

class DairyDept extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    changeQuantity = (operation, indexToChange) => {
        console.log(operation, indexToChange);
        this.props.updateDairy(operation, indexToChange);
    }

    render() { 
        console.log(this.props.dairyData)
        return (

        <ul>
            <AddItem dept="Dairy"/>
            <h1>Dairy component here!</h1>
            {this.props.dairyData.map((i, j) => { return( 

            <div key={j}>
                <li>{i.food}: {i.quantity}</li>
    
    
                <input className="add-button" type="button" onClick={()=>{this.changeQuantity('+', j)}} value="+"/>
    
    
                <input className="add-button" type="button" onClick={()=>{this.changeQuantity('-', j)}} value="-"/> 
            </div>
                
                    )
                }
            )
        }


        </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        dairyData: state.dairy,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateDairy
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DairyDept);