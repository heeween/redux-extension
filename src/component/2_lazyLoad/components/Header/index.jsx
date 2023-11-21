import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
class Index extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>header</h2>
                    </div>
                </div>
            </div>
        );
    }
    goBack = () => {
        this.props.history.goBack()
    }
    goForward = () => {
        this.props.history.goForward()
    }
}

export default withRouter(Index);
