import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // const hMartInventory = ...
        // console.log(this.props.frozenData)
        return (
        <ul>
            <h1>Main component here!</h1>
            {this.props.dairyData.map((i, j) => { return <li key={j}>{i.food}: {i.quantity}</li> })}
            {this.props.frozenData.map((i, j) => { return <li key={j}>{i.food}: {i.quantity}</li> })}
            {this.props.meatData.map((i, j) => { return <li key={j}>{i.food}: {i.quantity}</li> })}
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
 
export default connect(mapStateToProps)(Main);