import React, { Component } from 'react';
import { connect } from 'react-redux';
// we need our action center
import updateFrozen from '../actions/frozenInvUpdate'
// in order for updateFrom to be an action creator, we need to import..
import { bindActionCreators } from 'redux';
import AddItem from './AddItems';


class FrozenDept extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        // this.props.updateFrozen([]);
    }

    changeQuantity = (operation, indexToChange) => {
        console.log(operation, indexToChange);
        this.props.updateFrozen(operation, indexToChange);
    }

    render() { 
        console.log(this.props.frozenData)
        return (

        <ul>
            <AddItem dept="Frozen"/>
            <h1>Frozen component here!</h1>
            {this.props.frozenData.map((i, j) => { return( 

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
        frozenData: state.frozen,
    }
}

function mapDispatchToProps(dispatch){
    //mapDispatchToProps is how we connect
    // our componenet using this action creator
    // to the dispatch
    // this function returns bindActionCreators and we hand bindActionCreators an object
    return bindActionCreators({
        // each property will be a local prop
        // each value will be a function, action creator, that will have return value (action)
        //sent to the dispatch
        updateFrozen: updateFrozen
        // updateFrozen WAS a regular function.
        // but bindACtionCreators is like being bit by a radioactive spider.
        // it's now an action creator
        // an ACTION CREATOR is a FUNCTION that returns an ACTION
        // and ACTION is an OBJECT that has at least ONE property: type.
        // The dispatch will send that OBJECT to EVERY REDCUER!
    }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);