import React, { Component } from 'react';
import { connect } from 'react-redux';
// in order for this component to know about redux, we need some glue

class DairyDept extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.dairyData)
        return ( 
        <ul>
            <h1>Dairy component here!</h1>
            {this.props.dairyData.map((i, j) => { return <li key={j}>{i.food}: {i.quantity}</li>})}
        </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        dairyData: state.dairy,
    }
}

export default connect(mapStateToProps)(DairyDept);