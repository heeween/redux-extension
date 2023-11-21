import React, { Component } from 'react';

import { Route, Switch, Link } from "react-router-dom/cjs/react-router-dom";
import Detail from './Detail'
class Index extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {messageArr.map((message) => {
                        return <li key={message.id}>
                            {/* use params to pass data to route */}
                            <Link to={`/home/message/detail/${message.id}`} >{message.title}</Link>
                            &nbsp;<button onClick={() => this.showByPush(message.id)}>push</button>
                            &nbsp;<button onClick={()=>this.showByRelace(message.id)}>replace</button>
                            {/* use search to pass data to route */}
                            {/* <Link to={`/home/message/detail/?id=${message.id}`} >{message.title}</Link> */}
                            {/* use state to pass data to route */}
                            {/* <Link to={{pathname:'/home/message/detail',state:{id:message.id}}} >{message.title}</Link> */}
                        </li>
                    })}
                </ul>
                <hr />
                <Switch>
                    <Route path="/home/message/detail/:id" component={Detail} />
                    {/* <Route path="/home/message/detail" component={Detail} /> */}
                </Switch>
            </div>
        );
    }
    showByRelace = (id) => {
        console.log(this.props.history);
        this.props.history.replace(`/home/message/detail/${id}`)
    }
    showByPush = (id) => {
        console.log(this.props.history);
        this.props.history.push(`/home/message/detail/${id}`)
    }
}

export default Index;
