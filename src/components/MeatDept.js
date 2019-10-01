import React, { Component } from 'react';
import { connect } from 'react-redux';
// in order for this component to know about redux, we need some glue
import { bindActionCreators } from 'redux';
import updateMeat from '../actions/meatInvUpdate'
import AddItem from './AddItems';

class MeatDept extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    changeQuantity = (operation, indexToChange) => {
        console.log(operation, indexToChange);
        this.props.updateMeat(operation, indexToChange);
    }

    render() { 
        console.log(this.props.meatData)
        return (

        <ul>
            <AddItem dept="Meat"/>
            <h1>Meat component here!</h1>
            {this.props.meatData.map((i, j) => { return( 

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
    // mapStateToProps takes 1 arg: "state"
    // that "state" var, IS the rootReducer (store)
    // mapStateToProps returns an object with:
    // key/property is the local prop name is THIS component
    // value will be the property in the rootReducer (store)
    return {
        meatData: state.meat,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateMeat: updateMeat
    }, dispatch)
}

// export default MeatDept;

// we don't export the calls when we need redux
// we export connect (a function)
// connect takes 2 args:
// 1. a function that is going to map state to props
// 2. a function that maps the dispatch to props
// 3. connect is a function that returns a function
// 3.1 that function that takes an arg of the class
// const MeatDeptWithRedux = connect(mapStateToProps);
// export default MeatDeptWithRedux(MeatDept);

export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);