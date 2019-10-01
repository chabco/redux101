import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInventory from '../actions/clearInventory';
import resetInventory from '../actions/resetInventory';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // const hMartInventory = ...
        // console.log(this.props.frozenData)

        const frozenQuantity = this.props.frozenData.reduce((a,b)=> a+b.quantity, 0)
        console.log(frozenQuantity);
        const dairyQuantity = this.props.dairyData.reduce((a,b)=> a+b.quantity, 0)
        console.log(dairyQuantity);
        const meatQuantity = this.props.meatData.reduce((a,b)=> a+b.quantity, 0)
        console.log(meatQuantity);


        return (
        <ul>
            <h1>Main component here!</h1>
            <h2>Meat Dept Total: {meatQuantity}</h2>
            {this.props.meatData.map((i, j) => { return <li key={j}>{i.food}: {i.quantity}</li> })}
            <h2>Dairy Dept Total: {dairyQuantity}</h2>
            {this.props.frozenData.map((i, j) => { return <li key={j}>{i.food}: {i.quantity}</li> })}
            <h2>Frozen Dept Total: {frozenQuantity}</h2>
            {this.props.dairyData.map((i, j) => { return <li key={j}>{i.food}: {i.quantity}</li> })}
            <br></br>
            <button onClick={this.props.clearInventory}>Clear All</button>
            <button onClick={this.props.resetInventory}>Reset</button>

        </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        frozenData: state.frozen,
        dairyData: state.dairy,
        meatData: state.meat,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInventory,
        resetInventory
    }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Main);