import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Index extends Component {
    render() {

        return (
            <NavLink className="list-group-item" {...this.props}/>
        );
    }
    componentDidMount() {

    }
}

export default Index;
