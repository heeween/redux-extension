import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
class Index extends Component {

    render() {

        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>

                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News} />
                            <Route path="/home/message" component={Message} />
                            <Redirect to="/home/news" />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
